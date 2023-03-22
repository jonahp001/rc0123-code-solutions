SELECT "customers"."firstName" as "First Name",
      "customers"."lastName" as "Last Name",
      sum("payments"."amount") as "Total Amount Paid"
  FROM "customers"
  JOIN "payments" using ("customerId")
  group by "First Name", "Last Name"
  order by "Total Amount Paid" DESC;
