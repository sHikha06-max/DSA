/*
Write an SQL query to report the question that has the highest answer rate. If multiple questions have the same maximum answer rate, report the question with the smallest question_id.
*/

select question_id as survey_log
from surveylog
group by question_id
order by SUM(IF(action = "answer", 1, 0)) / SUM(IF(action = "show", 1, 0)) DESC, question_id
limit 1