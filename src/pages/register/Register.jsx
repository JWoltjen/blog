import './Register.css'

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label> Email</label>
                <input 
                    className="registerInput"
                    type="text" 
                    placeholder="enter your email"/>
                <label> Password</label>
                <input 
                    type="password" 
                    className="registerInput"
                    placeholder="enter your password..."/>
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    )
}
