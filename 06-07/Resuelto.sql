-- SELECT last_name FROM actors  ---> GUNN*
-- SELECT title, awards FROM movies --> PARQUE
-- SELECT length FROM movies where title = 'Titanic' 320
-- SELECT title, genre_id from series WHERE title = 'Person of Interest' --> 4
-- SELECT season_id FROM episodes WHERE number=2 ---> 46
-- SELECT title, release_date FROM movies WHERE release_date > '1999-10-04 00:00:00' AND release_date < '2004-12-04 00:00:00'  -->rey
-- SELECT title FROM movies WHERE title LIKE '%a' --> hotel
-- SELECT first_name, last_name FROM actors WHERE first_name LIKE 'Jim' ---> Jim Parsons
-- SELECT SUM(awards) FROM movies WHERE title LIKE 'La Guerra de las galaxias%' ---> 13 
-- SELECT movies.title from movies INNER JOIN actors ON actors.favorite_movie_id = movies.id and first_name = 'Leonardo' ---> La Guerra DE las galaxias: Episodio VII
-- SELECT movies.title from movies INNER JOIN actors ON actors.favorite_movie_id = movies.id and actors.rating = 2.3
-- SELECT series.title, genres.name FROM series INNER JOIN genres on genres.id = series.genre_id ---> fantasia 
-- SELECT movies.title, genres.name FROM movies INNER JOIN genres on genres.id = movies.genre_id and genres.name = 'animacion' --> intensamente
-- SELECT actors.first_name, actors.last_name, movies.title FROM actors INNER JOIN actor_movie ON 
-- actor_movie.actor_id = actors.id INNER JOIN movies ON actor_movie.movie_id = movies.id WHERE movies.title = 'Parque Jurasico' ---> Dern
-- SELECT movies.title, genres.name, movies.rating FROM movies INNER JOIN genres ON movies.genre_id = genres.id where movies.rating BETWEEN 1 AND 4 ---> Mi
-- SELECT genre_id, avg(length), genres.name FROM movies INNER JOIN genres ON movies.genre_id = genres.id GROUP BY genre_id ORDEN BY avg(length); ---> Infantiles
-- SELECT actors.first_name, COUNT(actor_movie.id) FROM actors INNER JOIN actor_movie ON actors.id = actor_movie.actor_id INNER JOIN movies ON actor_movie.movie_id = movies.id group by actors.id order by COUNT(actor_movie.id) DESC --> EMA



 



 

