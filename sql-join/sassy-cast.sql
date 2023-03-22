SELECT "actors"."firstName" AS "First Name",
        "actors"."lastName" AS "Last Name"
  FROM "actors"
  JOIN  "castMembers" USING ("actorId")
  JOIN  "films" USING ("filmId")
  WHERE "films"."title" = 'Jersey Sassy';
