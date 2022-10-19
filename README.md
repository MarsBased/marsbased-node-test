# README

Marsbased Node Test

## Setup

- Create a new `.env` file based on `default.env`.
- Run `npm i` for installing dependencies.
- Run `npm run dev`, it will create the app docker image and start every required service.
- Run `npm run prisma db push` for syncing the database with the prisma schema in `/prisma/schema.prisma`.

## Development

- Run `npm run dev` if services are not already started.
- Navigate to `http://localhost:3000`
- The app will automatically reload on any code change.



