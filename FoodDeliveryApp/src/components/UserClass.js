import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Rob",
                location: "default",
                avatar_url: "https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png"
            }
        }
    }

    async componentDidMount() {
        // console.log("mounted!");
        const data = await fetch("https://api.github.com/users/shivanip1512");
        const json = await data.json();
        this.setState({
            userInfo: json
            }
        );

        /*
        this.timer = setInterval(() => {
            console.log("Timer there");
        },1000);
        */
    }

    componentDidUpdate() {
        // console.log("updated!");
    }

    componentWillUnmount() {
        // clearInterval(this.timer);
        // console.log("ComponentWillUnmount");
    }

    render() {
        const { name, location, blog, avatar_url } = this.state.userInfo;
        // console.log("rendered!")
        return (
            <div className="user-card mx-[38%] my-[3%] text-center" >
                    <img className="w-[300px] mx-[8%]" src={avatar_url} />
                    <h2><span className="font-bold">Name : </span>{name}</h2>
                    <h3><span className="font-bold">Location : </span>{location}</h3>
                    <h4><span className="font-bold">Contact : </span> 
                        <a target='_blank'
                            rel='noopener noreferrer'
                            href="https://shivanip1512.github.io/">{blog}</a>
                    </h4>
            </div>
        );
    }
}

export default UserClass;1