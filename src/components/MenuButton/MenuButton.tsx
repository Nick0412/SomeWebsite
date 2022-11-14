import React from "react";

interface MenuProps {
    name: string
}

class MenuButton extends React.Component<MenuProps> {
    constructor(props: MenuProps) {
        super(props)
    }

    override render(): React.ReactNode {
        return (
            <button>
                {this.props.name}
            </button>
        )
    }
}

export default MenuButton;