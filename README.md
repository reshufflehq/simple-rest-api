## A starting point for creating your REST API with Reshuffle.

This is a simple starter kit for a REST API implementation. You can use it to easily create many useful APIs. Additionally, you can use the Swagger specification to automatically create a working UI. This UI can be used for testing and sharing your API with other developers.

Learn more about creating [API endpoints](https://dev.reshuffle.app/serving-api-endpoints) with reshuffle.

## Screenshots:

  <img src="./app-screen.png" width="80%" height="80%">

This is a Reshuffle template app. [Reshuffle](https://www.reshuffle.com) provides a progressive way to build fullstack applications, without needing to understand the cloud.

> Note: Reshuffle is built on top of Create React App

## Getting Started

1.  `npm start` to run a local version of your app.
2.  Make changes, and see them reflected locally.
    > Note: Your frontend code resides in the standard `src` directory.
            Backend code needs to reside in the `backend` directory. [Read more here](https://dev.reshuffle.com)
3.  `npx reshuffle deploy` to deploy your app to the cloud.

## Impoprtant files

1. The API code can be found at `./backend/_handler.js`
2. The API description can found in `./backend/swagger.json`
3. The source code for the frontend react components can be found in `/src`

## Available Scripts

Inside your Reshuffle project directory, you may run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
You will see any backend errors on the command line

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

Read more about deploying with Reshuffle [here](https://dev.reshuffle.app/deploying-to-reshuffle)

### `npx reshuffle deploy`

Deploys your Reshuffle app to the cloud, thereby making it available on your apps URL.

> Note: `reshuffle deploy` implicitly runs `npm run build`

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more about Reshuffle by reading the [dev docs](https://dev.reshuffle.app).

- [API Reference](https://dev-docs.reshuffle.com)
- [Main Concepts](https://dev.reshuffle.app/hello-reshuffle)
- [Getting Started](https://dev.reshuffle.app/getting-started)
- [Running Locally](https://dev.reshuffle.app/running-locally)
- [Serving API endpoints](https://dev.reshuffle.app/serving-api-endpoints)

You can learn more about [Create React App by reading the docs.](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify