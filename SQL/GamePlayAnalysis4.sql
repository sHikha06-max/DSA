/*
Write an SQL query to report the fraction of players that logged in again 
on the day after the day they first logged in, rounded to 2 decimal places.
In other words, you need to count the number of players that logged in for 
at least two consecutive days starting from their first login date, then divide 
that number by the total number of players.
*/

select 
round((select count(distinct a.player_id) from Activity a
inner join 
(select player_id, min(event_date) as first_logged 
    from Activity 
    group by player_id) b on datediff(a.event_date, b.first_logged)=1
    and a.player_id = b.player_id)
    /
    (select count(distinct player_id) from Activity),2) as fraction;