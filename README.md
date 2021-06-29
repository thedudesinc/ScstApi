# ScstApi

## PREREQUISITES

Node.js
mysql server

## INSTALLATION

Before your run the application, you will need a .env file at the root with the following variables: `PORT, DATABASE_URL`.

To run the application, first install all the npm packages using `npm install` in your favorite terminal (make sure your directory is set to the root of the project).

To create the database in mysql, make sure you have mysql installed and the server running.
Next install prisma cli by running `npm install prisma`
Then execute the migrate command `npx prisma migrate dev --name init`

Then execute the run command on the dev script `npm run dev` in your favorite terminal.
