import React from 'react'
import './index.mensagemLogin.css'

const MensagemLogin = (props) => { 
    return (props.trigger) ? (
        <>
            <div className = 'popupMensagem'>
                <div className='popup-innerMensagem'>
                    <label className = 'messagePopUp'>{props.message}</label>
                </div>
            </div>
        </>
    ) : "";
}

export default MensagemLogin;