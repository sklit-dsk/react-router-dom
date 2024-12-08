import { useState } from 'react';
import NotFoundImg from '../../assets/NotFound.jpg';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    setTimeout(() => {
        if (count !== 0) {
            setCount(prev => prev-1)
        } else {
            navigate('/');
        }
        
    }, 1000)
    return (
        <div className="container">
            <br/>
            <h1>You will return to Home page for {count} seconds</h1>
            <button onClick={() => navigate('/')} type={'button'}>Back to Home page</button>
            <br />
            <img src={NotFoundImg} alt=''></img>
        </div>
    )
}

export default NotFound;