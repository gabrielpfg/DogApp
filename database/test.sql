-- CREATE TABLE dogs (
--     type       TEXT,
--     color TEXT
-- );
 
-- INSERT INTO dogs(type, color) 
-- VALUES('Hunting','Black'), ('Guard','Brown');
 
-- -- create and insert data into the cats table
-- CREATE TABLE cats (
--     type       TEXT,
--     color TEXT
-- );
 
-- INSERT INTO cats(type,color) 
-- VALUES('Indoor','White'), 
--       ('Outdoor','Black');

CREATE TABLE IF NOT EXISTS ranks (
    rank TEXT NOT NULL
);
 
CREATE TABLE IF NOT EXISTS suits (
    suit TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS jokers (
    rank TEXT DEFAULT 'joker',
    suit TEXT NOT NULL
);
 
INSERT INTO ranks(rank) 
VALUES('2'),('3'),('4'),('5'),('6'),('7'),('8'),('9'),('10'),('J'),('Q'),('K'),('A');
 
INSERT INTO suits(suit) 
VALUES('Clubs'),('Diamonds'),('Hearts'),('Spades');

INSERT INTO jokers(suit) 
VALUES('Red'),('Black');
