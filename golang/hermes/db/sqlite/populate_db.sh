#!/bin/bash

cat db/sqlite/populate_db.sql | sqlite3 db/sqlite/db.db
