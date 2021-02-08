# How to run

- Install both server and frontend
- server:
    - npm run dev (nodemon and watch)
    - npm run build (node)
    - npm run start
- frontend
    - npm run start

The api does not provide a way to get multiple cards by IDs and does not provide a way to get random cards, to solve this I get the total count and sending random id between 0 and the totalcount with a loop based on the number of the players, the api are not consistent indeed sometime it returns an error that the item is not in the cache.