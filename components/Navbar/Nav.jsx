import Img from "../../images/reactjs-icon.svg";

function Nav() {
    return (
        <div className="nav">
            <div className="logo">
                <img src={Img} alt="" />
                <h1 className="nav-heading">ReactFacts</h1>
            </div>

            <p className="nav-p">React Course - Project 1</p>
        </div>
    )
}
export default Nav