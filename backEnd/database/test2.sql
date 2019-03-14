CREATE TABLE IF NOT EXISTS Deck (
    rank TEXT NOT NULL,
    suit TEXT NOT NULL
)


INSERT INTO Deck (rank, suit)
SELECT rank,
       suit
  FROM ranks
       CROSS JOIN
       suits