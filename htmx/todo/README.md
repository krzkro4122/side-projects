# Todo

A super simple web application designed to streamline tracking day-to-day objectives, such as:

- tasks
- chores
- reminders
- death threat ideas

## Serve locally

Install dependencies:

```sh
    virtualenv .venv
    source .venv/bin/activate
    pip install -r requirements.txt
```

Run the server on `http://localhost:8000`:

```sh
    make
```

## Serve with docker

(OPTIONAL) Building the image yourself:

```sh
    make build
```

And run with:

```sh
    make run
```

## Stack

- `HTMX` with a sprinkle of vanilla `JS`
- `python` with FastApi and jinja2
- `sqlite3` with SQLalchemy
- docker for max street cred
