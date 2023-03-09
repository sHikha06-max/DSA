/*

Write an SQL query to report all the classes that have at least five students.*/

select class from courses
group by class
HAVING count(distinct student) >= 5;