CREATE TABLE items (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    times_clicked INTEGER DEFAULT 0
);

INSERT INTO items (id, name) VALUES
    (0, 'item 0'),
    (1, 'item 1');
