import './Login.scss'
import {Link, Navigate} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../Context/authContext'
const Login = () => {
    const {login} = useContext(AuthContext)

    const loginhandler = () =>{
        login()
        
    }
  return (
    <div className='login'>
        <div className='card'>
            <div className='left'>
                <h1>Hellow World</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facere, officiis rerum tempore ullam quibusdam. Consequatur cum fugiat sunt minima nam fuga similique maxime distinctio doloribus. Iusto accusamus distinctio labore?</p>
                <span>Don't you     have an account?</span>
                <Link to="/register">
                <button>Register</button>
                </Link>
            </div>
            <div className='right'>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="User Name"/>
                    <input type="password" placeholder="Password"/>
                    
                    <button onClick={loginhandler}>Login</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Login