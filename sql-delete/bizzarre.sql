DELETE
  from "cities"
  WHERE "name" = 'Pyongyang'
RETURNING *;
