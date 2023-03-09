/*
Write an SQL query to find the customer_number for the customer who has placed the largest number of orders
*/

select customer_number
from Orders
group by customer_number 
order by count(customer_number) desc
limit 1;