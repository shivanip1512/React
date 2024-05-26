const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {
                [...Array(15)].map((e, i) => <ShimmerCard key={i}/>)
            }
        </div>
    );
};

const ShimmerCard = () => {
    return (
        <div className="shimmer-card">
                <div className="shimmer card-img"></div>
                <div className="shimmer card-content"></div>
                <div className="shimmer card-content" style={{"width":"100px"}}></div>
        </div>
    );
};

export default Shimmer;