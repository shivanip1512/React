const User = (props) => {
    return (
        <div className="user-card" >
            <h2>Name : {props.name}</h2>
            <h3>Location : Pune</h3>
            <h4>Contact : @im_shivanip</h4>
        </div>
    );
};

export default User;