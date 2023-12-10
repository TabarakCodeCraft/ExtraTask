"use client";
import LoginForm from "./components/loginForm/LoginForm";
import Space from "./components/space/space";
import styles from "./page.module.css"
const Login = () => {
    return (
        <div className={styles.body}>
            <Space height={"20px"}/>
            <h1 className={styles.h1}> Wellcome to my LoginPage :)</h1>
            <LoginForm />
        </div>
    );
}
export default Login;