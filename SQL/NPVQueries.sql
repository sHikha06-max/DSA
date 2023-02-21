SELECT Queries.id, Queries.year,ifnull(Npv.npv,0) as npv
FROM Queries
LEFT JOIN Npv
ON Npv.id = Queries.id and Npv.year = Queries.year;