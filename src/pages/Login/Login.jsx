import { useNavigate, Navigate } from "react-router-dom";

const Login = () => {
    const navigate =  useNavigate();

    console.log(navigate);

    // if (1 === 1) {
    //     return <Navigate to={'/'}/>
    // }
    
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