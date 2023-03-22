SELECT "customers"."firstName" AS "First Name",
        "customers"."lastName" AS "Last Name"
  FROM "customers"
  JOIN "rentals" USING ("customerId")
  JOIN "inventory" USING ("inventoryId")
  JOIN "films" USING ("filmId")
  WHERE "films"."title" = 'Magic Mallrats';
