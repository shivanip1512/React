import { UserContext } from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return (
        <div>
            <UserClass
                name="Dummy"
                    location="Ireland"
                    email="+91-96853XXXXX"
                />
                {
                /*
                <UserContext.Consumer>
                    {
                        (data) => <p>{data.loggedInUser}</p>
                    }
                </UserContext.Consumer>
                */
                }
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