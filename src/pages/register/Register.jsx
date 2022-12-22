import './Register.scss'
import {Link} from 'react-router-dom'
const Ragister = () => {
  return (
    <div className='register'>
        <div className='card'>
            <div className='left'>
                <h1>Lama Social</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facere, officiis rerum tempore ullam quibusdam. Consequatur cum fugiat sunt minima nam fuga similique maxime distinctio doloribus. Iusto accusamus distinctio labore?</p>
                <span> Have you an account?</span>
                <Link to="/login">
                <button>Login</button>
                </Link>
            </div>
            <div className='right'>
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="User Name"/>
                    <input type="text" placeholder="User Name"/>
                    
                    <button>Register</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Ragister