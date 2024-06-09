import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{

    constructor(props) {
        super(props);
        console.log("Parent Constructor")
    }

    componentDidMount() {
        console.log("Parent mounted")
    }

    render() {
        console.log("Parent Render")
        return (
        <div>
            <h1>About</h1>
            <h3>This is Dummy Project</h3>
            <UserClass
                name={"Shivani Pacharne (Class)"}
                location={"Pune (Class)"}
            />
            <UserClass
                name={"Mark (Class)"}
                location={"US (Class)"}
            />
        </div>
    );
    }
}

/*
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h3>This is Dummy Project</h3>
            <UserClass
                name={"Shivani Pacharne (Class)"}
                location={"Pune (Class)"}
            />
        </div>
    );
};
*/

export default About;