import React from "react";
import HomeProvider from "./HomeProvider";
import HomePresenter from "./HomePresenter";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps<any> {
    
}
const Home: React.FC<IProps> = ({
    history
}) => (
    
    <HomeProvider history={history}>
        <HomeContainer/>
    </HomeProvider>
);

const HomeContainer = () => (
    <HomePresenter />
)

export default Home;