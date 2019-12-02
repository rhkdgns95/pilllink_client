import React from "react";
import { Switch, Route as Router, Redirect, RouteComponentProps } from "react-router";
import LoggedInProvider from "./LoggedInProvider";
import Home from "../Home";
import { GET_MY_PROFIE } from "./LoggedInQueries";
import { graphql } from "react-apollo";
import { getMyProfile } from "../../Types/api";

/**
 *  LoggedIn
 * 
 *  token값으로 다음사용자로 구분된다.
 *  관리자 - 일반유저 - 토큰이 잘못된유저
 *  각 3가지의 경우에 해당하는 라우터를 작성.
 *  @param data 
 *  data = User | undefined.
 */
interface IProps {
    data: getMyProfile
};
const LoggedIn: React.FC<IProps> = ({data}) => {
    console.log("Loggined : ", data.GetMyProfile);
    return (
        <LoggedInProvider>
            <PublicUser />
        </LoggedInProvider> 
    );
}

const PublicUser = () => (
    <Switch>
        <Router to={"/"} component={Home} exact={true}/>
        <Redirect from={"*"} to={"/"}/>
    </Switch>
);
// const Manager = () => {
//     <Switch>
//         <Router to={"/"} component={Home} exact={true}/>
//         <Redirect from={"*"} to={"/"}/>
//     </Switch>
// };

export default graphql<any, any>(GET_MY_PROFIE)(LoggedIn);