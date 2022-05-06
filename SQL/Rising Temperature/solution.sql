# Write your MySQL query statement below

select a.id from weather a, weather b where DATEDIFF(a.Recorddate,b.Recorddate) = 1 and a.temperature > b.temperature;
