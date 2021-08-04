import React from 'react'
import './index.excluirCodigo.css'

function PopUpExcluir(props) { 
    return (props.trigger) ? (
        <>
            <div className = 'popupDelete'>
                <div className='popup-innerDelete'>
                    <div className = 'headerDelPopUp'>
                        <div className='organizerDel'>
                            <p className='textDel'>Você tem certeza de que deseja remover esse item <font color='#eba847'>(essa ação é irreversível)</font></p>
                        </div>
                        <div className='organizerDel1'>
                            <div>
                                <button className = 'cancelButton' onClick = {props.onClickCancelar}>CANCELAR</button>
                                <button className = 'removeButton' onClick = {props.onClickRemover}>REMOVER</button>
                            </div>
                        </div>
                        {/* <button className='closeAtt-btn' onClick={() => props.setTrigger(false)}><HighlightOffIcon fontSize='large' className = 'styleCloseAttBtn'></HighlightOffIcon></button> */}
                    </div>
                </div>
            </div>
        </>
    ) : "";
}

export default PopUpExcluir;