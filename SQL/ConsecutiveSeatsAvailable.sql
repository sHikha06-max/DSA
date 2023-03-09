/*
Write an SQL query to report all the consecutive available seats in the cinema.
*/

SELECT DISTINCT c1.seat_id
FROM cinema c1, cinema c2
WHERE c1.free = 1
AND c2.free = 1
AND (c1.seat_id = c2.seat_id + 1 OR c1.seat_id = c2.seat_id - 1)
