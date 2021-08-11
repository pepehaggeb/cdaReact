import React from 'react'
import './index.adicionarCodigo.css'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function PopUpAdd(props) {
    return (props.trigger) ? (
        <>
            <div className = 'popup'>
                <div className='popup-inner'>
                    <div className = 'headerAddPopUp'>
                        <button className='close-btn' onClick={() => props.setTrigger(false)}><HighlightOffIcon fontSize='large' className = 'styleCloseBtn'></HighlightOffIcon></button>
                        <label className = 'textAddPopUp'>Adicionar um novo código</label>
                    </div>
                    <div className = 'bodyAddPopUp'>
                        <div className = 'inputsHeaderAddPopUp'>
                            <input type="text" className="inputNomeAddPopUp" placeholder='Nome' onChange={(event) => {props.setName1(event.target.value)}} required></input>
                            <select className='statusInputAddPopUp' onChange={(event) => {props.setStatus1(event.target.value)}} required>
                                <option value='' disabled selected>Status</option>
                                <option value='1'>Ativo</option>
                                <option value='2'>Inativo</option>
                            </select>
                        </div>
                        <div className = 'inputsBodyAddPopUp'>
                            <textarea type="text" className="inputDescricaoAddPopUp" placeholder='Descrição' onChange={(event) => {props.setDescription1(event.target.value)}} required></textarea>
                        </div>
                        <div className = 'inputsBottomAddPopUp'>
                            <input type="text" className="inputMultaAddPopUp" placeholder='Valor da multa' onChange={(event) => {props.setMulta1(event.target.value)}} required></input>
                            <input type="text" className="inputTempoAddPopUp" placeholder='Tempo de prisão' onChange={(event) => {props.setTempo1(event.target.value)}} required></input>
                        </div>
                        <div className = 'buttonConfirm'>
                            <button className = 'addBtnConfirm' onClick={props.atualizar1}>CONFIRMAR CRIAÇÃO</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : "";
}

export default PopUpAdd