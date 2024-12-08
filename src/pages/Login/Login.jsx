import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate =  useNavigate();

    console.log(navigate);
    
    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />

            <button onClick={() => navigate('/')} type={'button'}>Back</button>

            <br />
            <br />
            <br />
            <br />
            <h1>Login</h1>
        </div>
    )
}

export default Login;