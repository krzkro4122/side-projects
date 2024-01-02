import asyncio
import uuid

from fastapi import HTTPException, status
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.ext.declarative import as_declarative, declared_attr

DATABASE_FILE_PATH = "/tmp/todo/"
DATABASE_FILE_NAME = "db.db"
SQLALCHEMY_DATABASE_URL = f"sqlite+aiosqlite:///{DATABASE_FILE_PATH}{DATABASE_FILE_NAME}"

engine = create_async_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={
        "check_same_thread": False,
    },
)

async_session = sessionmaker(
    engine, # type: ignore
    autocommit=False,
    class_=AsyncSession
) # type: ignore

async def get_db():
    async with async_session() as session: # type: ignore
        try:
            yield session
            await session.commit()
        except SQLAlchemyError as sql_ex:
            await session.rollback()
            raise sql_ex
        except HTTPException as http_ex:
            await session.rollback()
            raise http_ex
        finally:
            await session.close()

@as_declarative()
class Base:
    """
    Declarative base for orm
    """

    id: str
    __name__: str

    @declared_attr # type: ignore
    def __tablename__(cls) -> str:
        return cls.__name__.lower()

    async def save(self, db_session: AsyncSession):
        try:
            db_session.add(self)
            return await db_session.commit()
        except SQLAlchemyError as ex:
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail=repr(ex),
            )

    async def delete(self, db_session: AsyncSession):
        try:
            await db_session.delete(self)
            await db_session.commit()
            return True
        except SQLAlchemyError as ex:
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail=repr(ex),
            )

    async def update(self, db_session: AsyncSession, **kwargs):
        for k, v in kwargs.items():
            if v is not None:
                setattr(self, k, v)
        try:
            db_session.add(self)
            await db_session.commit()
            return self
        except SQLAlchemyError as ex:
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail=repr(ex),
            )

    @classmethod
    async def find_by_id(cls, db_session: AsyncSession, id: str):
        stmt = select(cls).where(cls.id == id) # type: ignore
        result = await db_session.execute(stmt)
        instance = result.scalars().first()
        if not instance:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Could not find a record for {cls.__name__} with id: {id}",
            )
        return instance

    @classmethod
    async def find_all(cls, db_session: AsyncSession):
        stmt = select(cls)
        result = await db_session.execute(stmt)
        instance = result.scalars().all()
        if not instance:
            return []
        return list(instance)

async def init_models():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)  # type: ignore
        await conn.run_sync(Base.metadata.create_all)  # type: ignore
