/*
Write an SQL query to report the shortest distance between any two points from the Point2D table. Round the distance to two decimal points.
*/

SELECT
    round(min(sqrt(pow(P1.y-P2.y,2)+pow(P1.x-P2.x,2))),2) as shortest
FROM
   Point2D P1,
    Point2D P2
WHERE
    P1.x <> P2.x OR
    P1.y <> P2.y