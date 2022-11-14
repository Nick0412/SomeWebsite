import React from "react";
import Clock from "Components/Clock/Clock"
import Toggle from "Components/Toggle/Toggle"
import MenuButton from "Components/MenuButton/MenuButton";

import "./App.scss";
import Menu from "Components/Menu/Menu";

class App extends React.Component {
    override render() {
        return(
            <div>
                <Clock />
                <Clock />
                <Menu />
            </div>
        );
    }
}

export default App;