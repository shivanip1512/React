import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h3>This is Dummy Project</h3>
            <User name={"Shivani Pacharne (function)"} />
            <UserClass name={"Shivani Pacharne (Class)"} location={"Pune (Class)"} />
        </div>
    );
};

export default About;