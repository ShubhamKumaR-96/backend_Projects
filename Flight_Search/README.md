/

- src/
  index.js
  models/
  controller/
  middleware/
  services/
  utils/
  config/
  respository/
-tests.


## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but one airplane but one airplane can be used in multiple flights
  - A city has many airports but one airports belongs to a city
  - One airport can have many flights, but a flights belongs to one airport