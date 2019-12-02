import React from "react";
import HomeProvider from "./HomeProvider";
import HomePresenter from "./HomePresenter";

const Home = () => (
    <HomeProvider>
        <HomeContainer/>
    </HomeProvider>
);

const HomeContainer = () => (
    <HomePresenter />
)

export default Home;