SELECT "genres"."name" as "Genres",
      count(*) as "Number of Movies"
  FROM "actors"
  JOIN "castMembers" using ("actorId")
  JOIN "filmGenre" using ("filmId")
  JOIN "genres" using ("genreId")
  WHERE "actors"."actorId" = 178
  group by "Genres";
