# README

## Requirements

### Data ingesting

We want you to create a Node script that will retrieve COVID daily stats from the following endpoint: https://api.covidtracking.com/v2/us/daily/2021-01-02.json and store them to a PostgreSQL Database. Notice that you can retrieve data from different days by changing the request path (e.g. https://api.covidtracking.com/v2/us/daily/2020-03-10.json).

The script that you'll create will retrieve the number of daily cases, testing, outcomes and deaths for all the days from February 2021 to March 2021 and will store them in the Database.

We have given you a SQL schema using the Prisma ORM in [prisma/schema.prisma](prisma/schema.prisma) for you to store / retrieve the data.

### API Endpoint

You'll need to create an endpoint that will retrieve the day with more deaths, with more cases, with more outcomes and more testing. The response would look like this:

```json
{
  "deaths": "03/05/2021",
  "outcomes": "05/05/2021",
  "cases": "08/05/2021",
  "testing": "13/05/2021"
}
```

This information will be queried from the previously stored data from the Database.

The endpoint will accept parameters to filter the results by a date range.

You can install any 3rd party package that might help you to develop the functionality.

## Evaluation criteria

We will evaluate the following:

- Understanding of the functional requirements and the provided results
- Code style (naming, methods length, etc)
- Code organization
- Use of the language (Javascript and Typescript features)

## Getting Started

The test has been developed so that you can get up and running easily by using Docker.
In order to work, you need to have Docker installed first: https://docs.docker.com/get-docker/
You can decide not to use Docker, but it's the recommended approach as everything will work out of the box.

- Run `npm run docker:install` to create the app Docker image and install the project dependencies.
- Run `npm run prisma db push` to sync the database with the prisma schema defined in `/prisma/schema.prisma`.
- Run `npm start` to start the app. Navigate to `http://localhost:3000`
  - This command enables auto-reloading


If you want to execute any command inside docker, you can use: `npm run docker:run <your command>`
For example: `npm run docker:run npm run my-task` or `npm run docker:run npm install <package-name> --save-dev`

## Troubleshooting

- Run `npm i` in the project's folder if you want to have Visual Studio Code linting and navigation.
  - Following the Getting Started guide will only install those dependencies inside Docker.
- In order to install new packages you'll need to run `npm run docker:install` again.
- If you need to run other prisma-cli commands, you can run them using `npm run prisma <command>`
