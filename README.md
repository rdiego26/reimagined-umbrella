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
- `umbrella listBy --location Portugal --language Java` List all stored users by programming language and/or location
- `umbrella listByLocation Portugal` List stored users by programming location
- `umbrella listByLanguage JavaScript` List stored users by programming language

### Next steps / Improvements
- Put all solution to run via docker
- Implement unit tests
- Add [chalk](https://www.npmjs.com/package/chalk) and [boxen](https://www.npmjs.com/package/boxen) to make the experience more user-friendly
- Refactor listBy to accept multiple optional params and remove listByLocation and listByLanguage options