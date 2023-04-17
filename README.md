# reimagined-umbrella
A NodeJS CLI to integrate with Github Rest API.

### Steps to use

## Up the database container
`docker-compose up`

## Resolve dependencies
`npm install`

## Run the migrations
`npm run migrate:up`

## Install
Run `npm install -g .`, after that the command `umbrella` will be available.

## Commands
- `umbrella user rdiego26` Fetch and store user info
- `umbrella list` List all stored users (only username)
- `umbrella listByLocation Portugal` List stored users by programming language
- `umbrella listByLanguage JavaScript` List stored users by programming language