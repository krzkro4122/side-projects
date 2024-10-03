FROM ubuntu:22.04 as builder

ENV TZ=Europe/Warsaw

EXPOSE 9000

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install -y vim git curl golang sqlite3

COPY . /gopher

WORKDIR /gopher

RUN go mod download
RUN go install




CMD [ "bash", "entrypoint.sh"]
