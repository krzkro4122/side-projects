from sqlalchemy import Column, Integer, String, ForeignKey, Table
from sqlalchemy.orm import relationship, backref
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Item(Base):
    __tablename__ = "items"

    item_id = Column(Integer, primary_key=True)
    name = Column(String)
    times_clicked = Column(Integer, default=0)
