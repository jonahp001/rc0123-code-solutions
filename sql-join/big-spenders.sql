SELECT "c"."firstName" AS "firstName",
      "c"."lastName" AS "lastName",
      "p"."amount" AS "amount"
  FROM "customers" AS "c"
  JOIN "payments" AS "p" USING ("customerId")
  ORDER BY "amount" DESC
  LIMIT 10;
