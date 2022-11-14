import React from "react";

interface ClockState {
    date: Date
}

class Clock extends React.Component<{}, ClockState> {
    timerID: any;

    constructor(props: any) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    override componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    override componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(): void {
        this.setState({
            date: new Date()
        });
    }

    override render(): React.ReactNode {
        return(
            <div>
                <h2>It is {this.state.date.toUTCString()}</h2>
            </div>
        )
    }
}

export default Clock;