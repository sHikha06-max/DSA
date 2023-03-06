/*
Write an SQL query to report the shortest distance between any two points from the Point table.
*/

select min(p1.x - p2.x) shortest
from point p1
inner join point p2 on p1.x > p2.x