import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log("Child Constructor")
    }

    componentDidMount() {
        console.log("Child mounted")
    }

    render() {
        console.log("Child render")
        const { name, location } = this.props;
        const {count} = this.state;
        return (
            <div className="user-card" >
                <h3>Count = {count}</h3>
                <button onClick={
                    () => {
                        // NEVER update state variables directly
                        this.setState({
                            count: this.state.count +1,
                        });
                    }
                }>Click here</button>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : @im_shivanip</h4>
        </div>
        );
    }
}

export default UserClass;