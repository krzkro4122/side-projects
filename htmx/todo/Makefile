current_dir := $(dir $(abspath $(firstword $(MAKEFILE_LIST))))

serve:
	uvicorn src.main:app --reload

build:
	docker build -t layor/todo .

run:
	docker run --rm -it -v $(current_dir):/app -p 8000:8000 layor/todo
