# Manao

Manao means "To do" in [Malgasy](https://en.wikipedia.org/wiki/Malagasy_language).

Manao is a light web application designed to streamline tracking day-to-day objectives, such as:

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

- `javascript` with `React`
- `python` with FastApi
- `sqlite3` with SQLalchemy
- docker for max street cred
