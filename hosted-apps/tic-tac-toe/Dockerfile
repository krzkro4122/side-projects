FROM python:3.10

WORKDIR /app

COPY requirements.txt /app

RUN pip3 install -r requirements.txt

COPY static /app/static
COPY static /app/static/tic-tac-toe
COPY templates /app/templates
COPY main.py /app

EXPOSE 5005

CMD ["python3", "main.py"]
