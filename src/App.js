import React from "react";
import { hot } from "react-hot-loader";
import Album from "./album/Album";
import "./App.css";

const App = () => (
    <div className="albums-app">
        <h1>React Interview Challenge</h1>
        <Album />
    </div>
);

export default hot(module)(App);
