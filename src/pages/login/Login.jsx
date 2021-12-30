import './Login.css'

export default function Login() {
    return (
        <div className="login">
            <form className="loginForm">
                <label> Email</label>
                <input type="text" placeholder=" enter your email"/>
                <label> Password</label>
                <input type="password" placeholder="enter your password..."/>
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">Register</button>
        </div>
    )
}
