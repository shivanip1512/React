import { useEffect, useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Timer there.");
        }, 1000);
        
        // return called when unmounting
        return () => {
            clearInterval(timer);
        };
    },[]);

    return (
        <div className="user-card" >
            <h3>Count = {count}</h3>
            <h3>Count2 = { count2}</h3>
            <h2>Name : {props.name}</h2>
            <h3>Location : Pune</h3>
            <h4>Contact : @im_shivanip</h4>
        </div>
    );
};

export default User;