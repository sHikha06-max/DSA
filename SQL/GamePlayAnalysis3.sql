/*
Write an SQL query to report for each player and date, how many games played so 
far by the player. That is, the total number of games played by the player until that date. Check the example for clarity.
*/

select a.player_id, a.event_date, sum(b.games_played) as games_played_so_far
from activity a join activity b
on a.player_id = b.player_id
where a.event_date >= b.event_date
group by a.player_id, a.event_date
order by a.player_id;