import React, { useState } from 'react'
import "./index.login.css"
import logoCDA from '../../Images/logoCda.png'
import MensagemLogin from '../../Components/mensagemLogin';
import axios from 'axios'

function Login() {

    const [ user, setUser ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ popUpMessage, setPopUpMessage] = useState(false)

    const LoginWithInformations = () => {
        axios.post("https://nodecdaprova.herokuapp.com/api/login", 
        {
            user: user,
            password: password,
        }).then((response) => {
            console.log(response.data)
            if(response.data.token) { //Usuario autenticado
                window.localStorage.setItem('name', response.data.name)
                window.localStorage.setItem('token', response.data.token)
                console.log(response.data.name)
                window.location.href = '/menu'
            } else { //Usuario não autenticadao, e já tratado pelo BACK
                setMessage(response.data.message)
                setPopUpMessage(true)
                setTimeout(() => {
                    setPopUpMessage(false)
                }, 4000);
            }
        })
    }

    return(
        <>
            <section className = 'sectionLogin'>
                <div className='bodyLogin'>
                    <div className='infoLogin'>
                        <img src={logoCDA} className='logoCda' alt='logoCda'></img>
                        <p className = 'text1'>SEJA BEM-VINDO(A) OFICIAL</p>
                        <p className = 'text2'>FAÇA SEU LOGIN</p>
                        <div className='inputs'>
                            <input 
                            type="text" 
                            className="user" 
                            placeholder="Usuário"
                            onChange={(event) => {
                                setUser(event.target.value)
                            }}
                            ></input>
                            <input 
                            type="password" 
                            className="password" 
                            placeholder="Senha"
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}
                            ></input>
                            <button className="button" onClick={LoginWithInformations}>ENTRAR</button>
                        </div>
                        <MensagemLogin
                        trigger={popUpMessage}
                        message={message}
                        />
                    </div>
                </div>
                <div className = 'bodyLogin1' />
            </section>
            
        </>
    )
}

export default Login;