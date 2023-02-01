import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <>
            <h1> Welcome! this is the landing</h1>
            <Link to='/home'>Home</Link>
        </>
    )
}

export default LandingPage;