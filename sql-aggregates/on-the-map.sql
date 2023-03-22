SELECT "countries"."name" as "Country",
      count(*) as "Amount of Cities"
  FROM "countries"
  JOIN "cities" using ("countryId")
  group by "Country";
