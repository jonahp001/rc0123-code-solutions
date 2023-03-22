SELECT "a"."line1" AS "Street Name",
      "a"."district" AS "District",
      "c"."name" AS "City"
  FROM "cities" AS "c"
  JOIN "addresses" AS "a" USING ("cityId");
