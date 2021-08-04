import React from 'react'
import './index.mensagemConfirmacao.css'
import DoneIcon from '@material-ui/icons/Done';

function PopUpConf(props) {
    return (props.trigger) ? (
        <>
            <div className = 'PopUpConfHTML'>
                <div className='PopUpConfBody'>
                    <div className = 'teste'><DoneIcon className = 'iconColor'></DoneIcon></div>
                    <p className = 'textConf'>{props.message}</p>
                </div>
            </div>
        </>
    ): "";
}

export default PopUpConf;