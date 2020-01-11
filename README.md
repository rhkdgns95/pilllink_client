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
- [X] Result.
- [x] Result - Translator, MyPage - History - Translate Lang.
- [x] fetchPolicy->update->refetchQueries, My History Count Bug Fixed, Translator Part 1.
- [x] InKorea Address Update.
- [x] Git deploy.
- [x] Git deploy part 2.
- [x] Git deploy part 3.
- [x] Step Redirect To Feedback, Feedback - Translated, 기타 -> 응급처치.
- [x] StepDetailsSymptom Screen Modify.
- [x] Languages, Symptoms, Details Modfiy, svg -> png.
- [x] deploy
- [x] UpdateMyProfile, GetMyProfile Bug Fixed, Add ToggleText.
- [x] Feedback Add Toggle Button, Update diarrhea Image.
- [x] Image Bug Fixed.
- [x] CreateMedicalRecord redirect to /mypage., Translator Multiple checking text
- [x] Route Fixed.
- [x] GoDaddy dns register.
- [x] Ago Update Translator.
- [x] Update Translator, Delete Other's Confirm.
- [x] Adding UpdateMyPassword, Account Settings(ID, Password).
- [x] Update Step Button.
- [x] LoginContainer youtube video popup.
- [x] Netlify add _redirects.
- [x] Add Board + Admin - Records.
- [x] Feedback - Mulitple Confirm, History - Table in Table.
- [x] UI - BoardButton. 
- [x] Admin - Statistic No Completed.
- [x] Admin - Chart(Gender, Area, Nationality)
- [x] Admin - All Chart(Statistic Modify)
- [x] Admin - Line Chart - MedicalRecord.
- [] Polyfil.
- [] MyPage - History Part 2 (Confirm)
- [] Manager.
- [] Browser IE - polyfill
- [] Git Update - Security.
- [] Register Domain.
- [] Teting.
- [] Ralations Server - Nationality Code / Value.
- [] LocalStorage - No JWT.

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
9. yarn add react-app-polyfill
10. yarn add --dev gh-pages
11. yarn add d3-selection @types/d3-selection
12. yarn add d3-scale @types/d3-scale d3-array @types/d3-array 
13. yarn add d3-axis @types/d3-axis
14[예시]. yarn add randomstring @types/randomstring
15. yarn add antd
16. yarn add react-app-rewired
17. yarn add babel-plugin-import
18. yarn add customize-cra
19. yarn add react-apexcharts
20. yarn add apexcharts

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
- 4.5 [CTRL + SHIFT + L]
: 한 파일에서 선택한 단어에 커서를 지정한다.
- 4.6 F2
: 한 파일에서 선택한 단어를 리팩토링해준다.
- 4.7 웹 페이지 루트경로
: 로컬서버의 페이지루트는 "/"일것이다. 하지만, 서버측의 루트경로에는 process.env.PUBLIC_URL으로 설정된다.
: 이때 다른 라우터로접근하려면 BrowserRouter의 basename에 process.env.PUBLIC_URL값을 적어준 다음에 진행한다. 그리고 react-router-dom의 Link는 자동저으로 PUBLIC_URL이 등록되어있다는점을 기억하자.
- 4.8. 404 Not Found.
: Netlify의 홈페이지에서 배포한 것의 404 Page Not Found를 방지하기위해서 _redirects를 루트경로에 추가하고 아래의 한줄을 작성하면 해결된다.
: /*    /index.html   200
- 4.9. useState주의점.
: [1] 배열로 사용할때, 하나의 useState의 값을 복사 할 수 없다. 
  (즉 배열 갯수만큼 useState를 생성해야한다.)
: [2] 똑같은 값에 대입하는 경우 복사가아니라, 의존하게되며 서로의 값은 useState의 값을 참조한다. 주소의 참조라는 개념이다.
- Feedback의 예시로 N개의 useState를 사용시에는 배열로 만들었다가 에러가 났었다. 이는 위의 개념을 읽어보면 이해될것이다. 하나의 useState를 여러 변수에 대입시 복사가아니라 의존하게 된다. 즉 값이 참조하는게아니라, 주소가 참조되어서 값을 수정할때 원하는값으로 수정하기 어렵다. 그리고 배열을 추가할때도 마찬가지이다. 그래서 해결한 방법으로는, useState객체를 N개만큼 추가하여 일일이 넣었다. -> 다른방법으로도 찾아보자.
- 5.0 D3 Chart
: D3 Chart는 svg태그안에 데이터 rect와 line등등 svg관련 태그들을 추가시켜서 임의로 사용가능하다. 
: 보통은 useRef로 svg를 참조하는 ref값을 생성하여, 마운트가 된 이후 그리도록 한다. (제이쿼리 라이브러리를 지원해주어서 사용 가능하다.)
: (JQuery에서)DOM데이터의 속성 추가할때 attr('fill', 'red')와같이 사용한다.
: 그렇지만 그보다더 효과적으로 사용하기위해 아래처럼사용한다.(data사용!)
: .data(data) .append('rect') .attr('fill', d => d.color) .attr('width', d => d.width)와 같이 data에 = [{ width : 400, fill: 'red' }]와 같이 넣어주면 해당 DOM이 사용할수있는 Data속성이 정의된다. 
- 5.1 Antd 부분 적용하기.
: react-app-rewired

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

## 7. Deploy
[ Github 페이지 ]
- 7.1 갱신시 먼저 package.json의 homepage의 속성에 URL주소를 적어준다.
ex) github page의 배포경우 username.github.io 라고 되어있다.
ex) 이 homepage의 명칭으로 index.html의 파일경로에 %PUBLIC_URL%로 인식한다.
- 7.2 npm run deploy하면, git의 settings의 custom url이 초기화된다. 그래서 명령어 "npm run deploy" 이후 다시 입력해주도록한다.
- 7.3 그다음 라우터등록을 루트경로 바로아래에 CNAME에 입력해주도록 한다. www.XXX.com 와 같이 www.를 입력해주어야 된다는점이있다.
[ 도메인 등록페이지 ]
- 7.4 A유형의 @으로 192.30.252.153~4 둘다 등록시켜놓는다.
- 7.5 CNAME의 www에 rhkdgns95.github.io로 입력해주도록 한다.
- 7.6 끝.

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
