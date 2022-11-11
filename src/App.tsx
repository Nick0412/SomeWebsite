import React from "react";
import "./App.scss";

interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 537,
};

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>HELLO Love: {user.name}, {user.id}</h1>
            </div>
        );
    }
}

export default App;