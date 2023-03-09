/*
Write an SQL query to report the movies with an odd-numbered ID and a description that is not "boring".
*/

select id, movie, description, rating
from Cinema
where (id % 2) = 1 and description != "boring"
order by rating desc