import React from 'react'
import LoginOrRegisterForm from '../component/LoginOrRegisterForm'
import bg from "../assets/bg-login.jpg";

export default function Register() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "auto",
        background: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: "9.65em",
      }}
    >
    <LoginOrRegisterForm loginOrRegister={"register"} />
  </div>

  )
}
