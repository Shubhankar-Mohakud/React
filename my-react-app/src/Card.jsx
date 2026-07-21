import profilePic from "./assets/image.png"

function Card() {
    return(
        <div className="card">
            <img src={profilePic} width={200} alt="profile picture" className="card-image"/>
            <h2 className="card-title">Shubhankar Mohakud</h2>
            <p className="card-text">I am a Computer Science student</p>
        </div>
    );
}

export default Card