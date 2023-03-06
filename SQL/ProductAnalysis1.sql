/*Write an SQL query that reports the product_name, year, and price for each sale_id in the Sales table.

Return the resulting table in any order.
*/

select product_name, year, price 
from Sales 
LEFT JOIN Product on Sales.product_id = Product.product_id