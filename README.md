# PillLink Client
> pill link client app.

## 1. Todo
- [x] Init React to Typescript.
- [x] ThemeProvider - styled-components.
- [x] ApolloProvider, Router, Auth.
- [x] Headers context, Create Routes Logged In/Out.
- [x] Codegen.
- [x] Login Component, App ProgressBar.
- [] General User Componnent.
- [] Manager Component.


## 2. Install
1. yarn create react-app ./ --typescript
2. yarn add styled-components @types/styled-components
3. yarn add apollo-boost graphql react-apollo 
4. yarn add apollo-cache-inmemory apollo-link-http apollo-client
5. yarn add react-router-dom @types/react-router-dom
6. yarn add apollo -g
> codegen global로 사용하기 위한것.
7. yarn add lodash @types/lodash
> compose를 사용해서 graphql - hoc 방식을 겹쳐서 사용하려고했으나 제거함.

## 3. Dev


## 4. Study
- 4.1 ref 주의점.
: ref를 사용시, 인자로 ref를넣어주려고 컴포넌트의 prop에 ref라는 이름을 주면안된다.
: 이와 비슷하게 이미 존재하는 props로 key가 있다는 점을 주의하자.
- 4.2 useLazyQuery사용시 주의점
: fetchPolicy: "cache-and-network" 를 설정하지 않으면, 값이 에러난경우 변경하지 않는다면, 실행되지 않는다.


<!-- 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->
