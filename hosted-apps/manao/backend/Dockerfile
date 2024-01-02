FROM python:3.11

COPY requirements.txt requirements.txt

RUN apt update
RUN apt upgrade -y
RUN apt install -y make
RUN pip install -r requirements.txt

COPY src /app/src

WORKDIR /app

EXPOSE 8001

ENTRYPOINT ["uvicorn"]
CMD ["src.main:app", "--host", "0.0.0.0", "--port", "8001"]
