<h1 align="center">
Palawan Chrome Portal
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

## clone or download

```terminal
$ git clone https://github.com/irokhes/palawan-chrome-portal.git
$ npm i
```

## project structure

```terminal
LICENSE
package.json
server/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Client-side usage(PORT: 3001)

```terminal
$ cd client   // go to client folder
$ npm i       // npm install pacakges
$ npm run dev // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 8000)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

``` 
// create .env file in path ./server/src/.env
// set up the following variables. 
MONGODB_URI, APP_URL, FRONT_URL, JWT_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
```

### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install pacakges
$ npm run dev // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```

## Deploy Server to [Heroku]

```terminal
$ npm i -g heroku
$ heroku login
...
$ heroku create
$ npm run heroku:add <your-super-amazing-heroku-app>
// remember to run this command in the root level, not the server level, so if you follow the documentation along, you may need to do `cd ..`
$ pwd
/Users/<your-name>/mern
$ npm run deploy:heroku
```

### After creating heroku

remember to update the file of [client/webpack.prod.js]

```javascript
 'API_URI': JSON.stringify('https://your-super-amazing-heroku-app.herokuapp.com')
```

# Dependencies(tech-stacks)

| Client-side                   | Server-side           |
| ----------------------------- | --------------------- |
| axios: ^0.15.3                | bcrypt-nodejs: ^0.0.3 |
| babel-preset-stage-1: ^6.1.18 | body-parser: ^1.15.2  |
| lodash: ^3.10.1               | cors: ^2.8.1          |
| react: ^16.2.0                | dotenv: ^2.0.0        |
| react-dom: ^16.2.0            | express: ^4.14.0      |
| react-redux: ^4.0.0           | jwt-simple: ^0.5.1    |
| react-router-dom: ^4.2.2      | mongoose: ^4.7.4      |
| redux: ^3.7.2                 | morgan: ^1.7.0        |
| redux-thunk: ^2.1.0           |
