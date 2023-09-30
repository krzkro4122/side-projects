FROM python:3.11

WORKDIR /app

COPY requirements.txt requirements.txt

RUN apt install -y make
RUN pip install -r requirements.txt

EXPOSE 8000

ENTRYPOINT ["uvicorn"]
CMD ["src.main:app", "--host", "0.0.0.0", "--reload"]
