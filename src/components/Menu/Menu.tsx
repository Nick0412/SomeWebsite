import React from "react";
import MenuButton from "Components/MenuButton/MenuButton";

class Menu extends React.Component {
    constructor(props: any) {
        super(props);
    }

    override render(): React.ReactNode {
        return(
            <div>
                <MenuButton name="button1" />
                <MenuButton name="anohther here" />
            </div>
        );
    }
}

export default Menu;