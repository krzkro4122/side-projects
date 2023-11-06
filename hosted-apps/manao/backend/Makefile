current_dir := $(dir $(abspath $(firstword $(MAKEFILE_LIST))))

serve:
	uvicorn src.main:app --reload --port 8080

build:
	docker build -t layor/todo .

daemon:
	docker run --rm -d --name todo -it -v /tmp/todo:/tmp/todo -p 8000:8000 layor/todo

run:
	docker run --rm --name todo -it -v /tmp/todo:/tmp/todo -p 8000:8000 layor/todo

clean:
	docker rm -f todo && \
	docker run --rm --name todo -it -v /tmp/todo:/tmp/todo -p 8000:8000 layor/todo
