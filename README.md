# PillLink Client
> pill link client app.

## 1. Todo
- [x] Init React to Typescript.
- [x] ThemeProvider - styled-components.
- [x] ApolloProvider, Router, Auth.
- [x] Headers context, Create Routes Logged In/Out.
- [x] Codegen.
- [x] Login Component, App ProgressBar.
- [x] Login Component / SignUp Component.
- [x] General User Componnent.
- [x] MyPage - Edit
- [x] MyPage - History Part 1 (Pagination)
- [x] Added image, Mobile screen check.
- [x] Natinoality, Translate Language.
- [x] Feedback Part 1 (Manage Step State).
- [x] Feedback Part 2 (Create Medical Record).
- [] Result.
- [] MyPage - History Part 2 (Confirm)
- [] Manager.
- [] Browser IE - polyfill
- [] Git Update - Security.
- [] Register Domain.
- [] Teting.
- [] Ralations Server - Nationality Code / Value.

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
8. yarn add react-daum-postcode


## 3. Dev


## 4. Study
- 4.1 ref 주의점.
: ref를 사용시, 인자로 ref를넣어주려고 컴포넌트의 prop에 ref라는 이름을 주면안된다.
: 이와 비슷하게 이미 존재하는 props로 key가 있다는 점을 주의하자.
- 4.2 useLazyQuery사용시 주의점
: fetchPolicy: "cache-and-network" 를 설정하지 않으면, 값이 에러난경우 변경하지 않는다면, 실행되지 않는다.
- 4.3 변수 바로이동
: 참조하는 변수로 바로 이동할경우, [Ctrl + d]로 지정해서 변수 셀렉트하고 F12를 누르면 바로이동가능.
- 4.4 setState
: prevState와 newState를 비교하여 데이터를 변경되도록 한다.
: setState의 return값은 새로운 데이터가 변경될 데이터고, 인자로는 prevState를 받는다.
: ex) setState((prevState: number) => return prevState + 1); 
: 주의점으로 인자와 리턴값으로는 useState에설정된 <>의 타입을 잘살펴보도록한다.
: 위의 예제에서는 당연히 number값으로 인자로하는 것이라면, number값이 리턴되도록 한다.

## 5. Pagination - Medical Record 요청
- 5.0 총 데이터 갯수를 가져오도록 한다.
: 전체를 나누어서 페이지 갯수를 정한다. 
> 5.0.0 N / 40 + 1 =>  ??
> 5.0.1 한 Page당 4개씩. N * (4 * 10) // N은 현 페이지 index.

- 5.1 URL에 갯수를 받는다.
: 없는 경우 1로 redirect시킴.

- 5.2 URL의 쿼리에 4개씩 요청.
> 5.2.1 Page 1
: 1부터 4까지 가져온다. 
: 1 * 4 = 4 => 4 - (4 - 1)
> 5.2.2 Page 2
: 5부터 8까지 가져온다
: 2 * 4 = 8 => 8 - (4 - 1)
> 5.2.3 Page 3
: 3 * 4 = 12 => 12 - (4 - 1)

- 5.3 [1-10], [11-20], [21-31] 
: 1페이지 / 10 => 0 => (0 + 1) * 10 => 10
: 11페이지 / 10 => 1 => (1 + 1) * 10 => 20

## 6. ICons
- 6.1 Flag
> https://www.flaticon.com/packs/international-flags

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
