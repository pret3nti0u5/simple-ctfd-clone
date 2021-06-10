# Simple CTFd Clone

### This a simple clone of [CTFd](https://github.com/CTFd/CTFd) framework implemented using the MERN Stack.

<div align="center"><img src="https://user-images.githubusercontent.com/57453561/121484475-e23c4e80-c9ec-11eb-8b44-f6665ab91667.png" alt="image" width="1000" /></div>
<br/>

## Getting Started

### Development

```zsh
git clone https://github.com/pret3nti0u5/simple-ctfd-clone.git
cd simple-ctfd-clone
npm i                   #Install server side dependencies
npm run client-install  #Install client side dependencies
npm run dev             #You will have to setup all the required env variable in ./config/dev.env for this to work perfectly
```

This will start the client server on localhost on port 3000 and the express server on port 5000.
You will have to setup your env variables in ./config/dev.env, which includes the server port.

You can also run the client server and express server separately using the following commands

```zsh
npm run server #Run backend server on port 5000 using nodemon (auto server restart on code change)
npm run start #Run backend server on port 5000 using node (no auto reload)
npm run client #Run client server on port 3000
```

### Production

Once you have made all the changes that you require you can push to production by -
<br/>

- Changing the `callbackURL` in `./middleware/passport-setup.js` and the `base_URI` in `./client/src/components/LoginPage.js` and `./client/src/components/Navbar.js` to the url this platform is being hosted on.

```zsh
cd client
npm run build
```

On build finish you can deploy it to the hosting provider of your choice.

#### Deployment to Heroku

If you plan to deploy it to heroku then I would suggest not deleting the Procfile or the heroku-postbuild script.

You can deploy to Heroku using the following steps.

- Ensure that you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed.
- Run the following command

```zsh
heroku create [unique herkou repository name]
heroku config:set [env-variable-key:env-variable-value] #for all the env variables set up in ./config/dev.env
git add -A
git commit -m "Deploying to heroku"
git push heroku master
```

## Motivation

The cybersecurity club in my university required a simple yet functional CTF holding platform for holding small CTF competitions after lecture sessions.
<br />
This required the platform to be easily deployable to free hosting sites such as heroku with the capability of setting it up fresh for the next session without much hassle.

## Technologies Used

The platform has been developed using the **MERN** Stack. The exact use of each component of the MERN Stack and the technologies used have been described below

- **React** - Frontend for this app has been developed using ReactJS using [Create React App](https://github.com/facebook/create-react-app) bolierplate.

  - [**React Redux**](https://github.com/reduxjs/react-redux) - For State management.
  - [**React Router**](https://github.com/ReactTraining/react-router) - Most of the navigation is handled using React Router, only falling back to server side routing for Google Oauth steps.
  - [**Axios**](https://github.com/axios/axios) - For making api requests to the backend.
  - [**Bulma CSS**](https://bulma.io/) - Helps in making the app responsive and gives the app a neat uniform look.

- **Express** - Backend for this app has been made using the [Express](https://expressjs.com/) framework.

  - [**PassportJS**](http://www.passportjs.org/) - Google Oauth 2.0 strategy has been used and currently is the only method for authentication for this app. Suits my needs as I need to lock this app down so that it can be used only by students of my university.
  - [**cookie-session**](https://github.com/expressjs/cookie-session) - For generating cookies.

- **MongoDB** - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) has been used for spinning up a free DB for this app.
  - [**mongoose**](https://mongoosejs.com/) - ODM library for MongoDB.

## To-Do List

- [ ] Integrate an Admin Panel for smoother challenge addition and editing.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

If you got until here, show your love hitting the ⭐️ button, I'd really appreciate it.
