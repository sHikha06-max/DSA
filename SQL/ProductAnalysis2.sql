/*Write an SQL query that reports the total quantity sold for every product id.
Return the resulting table in any order.*/

select product_id, sum(quantity) as total_quantity
from Sales
group by product_id