SELECT "f"."releaseYear" AS "Release Year",
        "g"."name" AS "Genre",
        "f"."title" AS "Title"
  FROM "films" AS "f"
  JOIN  "filmGenre" USING ("filmId")
  JOIN  "genres" as "g" USING ("genreId")
  WHERE "f"."title" = 'Boogie Amelie';
