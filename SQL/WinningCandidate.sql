/*
 Write an SQL query to report the name of the winning candidate (i.e., the candidate who got the largest number of votes).
*/

select name
from Candidate
where id = (
select CandidateId
from Vote
group by CandidateId
order by count(*) desc
limit 1)
;