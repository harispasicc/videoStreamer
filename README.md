# videoStreamer

Project description:

Video Streamer is and application that allows a user to connect a video straming software to it and shows the live video the user is streaming. It also allows users to manipulate their streams by creating new ones, as well as changing and deleting the existing ones.

Project features:

-API SERVER:

Contains db.json with array of streams, and package.json

-CLIENT SERVER:

Contains public, src and packages. In src we have from REDUX actions in which is stored index.js with types.js. In index.js we have CRUD and Authentification functions. While in reducers we have authReducers with authentification cases, streamReducres with stream CRUD cases, getReducer with geting only one stream by using id, and finally index.js all reducers stored.

Then we have api folder with api port 3001.

Component folder with all functionality starting with Header with navbar features, GoogleAuth with google authentification logic, StreamList main page with '/' listing all streams, StreamForm reusable form with Fields, validation, error messages, buttons, StreamCreate creating new streams with StreamForm, StreamEdit reusing StreamForm calling fetchStream and editStream from actions and useSelector for stream to avoid undentified title/description error, StreamDelete with Modal to delete stream and message with connected stream title. StreamShow by making stream title as Link in StreamList showing streams with OBS.

RTMP SERVER:

With index.js and packages. In index.js we have node-media-server with ports which connects our OBS and with flv.js streams the stream on browser.

Built with:

-HTML -CSS(Semantic UI) -JS -React JS -API -REDUX -RTMPSERVER

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
