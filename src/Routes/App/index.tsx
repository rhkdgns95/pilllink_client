import App from "./AppContainer";
import {graphql} from "react-apollo";
import { IS_LOGGED } from "./AppQueries.local";
// import { flowRight as compose } from 'lodash';

export default graphql<any, any>(IS_LOGGED)(App);