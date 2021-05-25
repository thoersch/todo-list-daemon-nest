## NestJS daemon/cron seed project

* NestJs
* TypeORM

## Cron-based daemon processing for Todos seed projects
Cron daemon to do some backend processing of persisted todos

* Front end project: https://github.com/thoersch/react-native-ts-seed
* API project: https://github.com/thoersch/todo-list-api-nestjs

## Running to Daemon locally

**NOTE** This assumes you've launched && migrated the db from the API project above.

* update the `.env` file to point to your db instance / container 
* `npm run build`
* `npm run start`

Every minute, the daemon will report out how many stored todos exist.

`> [Nest] 18058   - 05/24/2021, 9:03:00 PM   [TodoService] Todos: 2`

## Bulding & Running from container 

**NOTE** This assumes you've launched && migrated the db from the API project above.

* `cd /path/to/project/root`
* Build container: `docker build -t your_tag .`
* Run container: `docker run -d -t your_tag`

## License

Copyright © 2021 Tyler Hoersch

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.