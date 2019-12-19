import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
// import 'react-app-polyfill/ie9';
// import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from './Styles/typed-components';
import { GlobalStlyes } from './Styles/global-styled';
import App from './Routes/App';
import theme from './Styles/theme';
import { ApolloProvider } from "react-apollo";
import client from './apollo';


ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <App />
            <GlobalStlyes />
        </ThemeProvider>
    </ApolloProvider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
