DELETE
  from "films"
  WHERE "rating" != 'G'
returning *;
