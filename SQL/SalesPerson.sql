/*
Write an SQL query to report the names of all the salespersons who did not have any orders related to the company with the name "RED".
*/

SELECT s.name FROM SalesPerson s
    WHERE s.sales_id NOT IN (
        SELECT o.sales_id FROM Orders o LEFT JOIN Company c
            ON c.com_id=o.com_id
        WHERE c.name="RED"
    );