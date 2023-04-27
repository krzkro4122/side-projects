FROM python:3.11

VOLUME [ "server" ]
WORKDIR "/server"

COPY . .

RUN pip install --no-cache-dir --upgrade -r requirements.txt

CMD [ "python3", "main.py" ]

# NOT WORKING