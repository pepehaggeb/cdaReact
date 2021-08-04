import React from 'react'
import './index.editarCodigo.css'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


function PopUpUpdate(props) {

    return (props.trigger) ? (
        <>
            <div className = 'popupUpdate'>
                <div className='popup-innerUpdate'>
                    {/* <div className='headerPopUpUpdate'>
                        <h1 className='titleCodigoUpdate'>Atualize o Código Penal</h1>
                    </div>
                    <div className = 'sectionInput1Update'>
                        <div className = 'divNameInputUpdate'>
                            <label className = 'textNameUpdate'>Insira o nome do código penal</label>
                            <input 
                            type = 'text' 
                            placeholder = 'Nome do Código Penal' 
                            className = 'nameInputUpdate'
                            onChange={(event) => {
                                props.setName(event.target.value)
                            }}
                            ></input>
                        </div>
                        <div className = 'divDescricaoInput'>
                            <label className = 'textDescricaoUpdate'>Insira a descrição do código penal</label>
                            <input 
                            type = 'text' 
                            placeholder = 'Coloque uma Descrição' 
                            className = 'descricaoInputUpdate'
                            onChange={(event) => {
                                props.setDescription(event.target.value)
                            }}
                            ></input>
                        </div>
                    </div>
                    <div className = 'sectionInput2Update'>
                        <div className = 'divMultaInputUpdate'>
                            <label className = 'textMultaUpdate'>Insira o valor da multa</label>
                            <input 
                            type = 'number' 
                            placeholder = 'Valor da Multa'                            
                            className = 'multaInputUpdate'
                            onChange={(event) => {
                                props.setMulta(event.target.value)
                            }}
                            ></input>
                        </div>
                        <div className = 'divTempoInputUpdate'>
                            <label className = 'textTempoUpdate'>Insira o tempo de prisão</label>
                            <input 
                            type = 'number' 
                            placeholder = 'Tempo de Prisão' 
                            className = 'tempoInput'
                            onChange={(event) => {
                                props.setTempo(event.target.value)
                            }}
                            ></input>
                        </div>
                    </div>
                        
                    <div className = 'divAddBtnUpdate'>
                        <button className = 'addBtnUpdate' onClick={props.atualizar}>Atualizar</button>
                    </div> */}
                    <div className = 'headerAttPopUp'>
                        <button className='closeAtt-btn' onClick={() => props.setTrigger(false)}><HighlightOffIcon fontSize='large' className = 'styleCloseAttBtn'></HighlightOffIcon></button>
                        <label className = 'textAttPopUp'>Adicionar um novo código</label>
                    </div>
                    <div className = 'bodyAttPopUp'>
                        <div className = 'inputsHeaderAttPopUp'>
                            <input type="text" className="inputNomeAttPopUp" placeholder='Nome' onChange={(event) => {props.setName(event.target.value)}} required></input>
                            <select className='statusInputAttPopUp' onChange={(event) => {props.setStatus(event.target.value)}} required>
                                <option value='' disabled selected>Status</option>
                                <option value='1'>Ativo</option>
                                <option value='2'>Inativo</option>
                            </select>
                        </div>
                        <div className = 'inputsBodyAttPopUp'>
                            <textarea type="text" className="inputDescricaoAttPopUp" placeholder='Descrição' onChange={(event) => {props.setDescription(event.target.value)}} required></textarea>
                        </div>
                        <div className = 'inputsBottomAddPopUp'>
                            <input type="text" className="inputMultaAttPopUp" placeholder='Valor da multa' onChange={(event) => {props.setMulta(event.target.value)}} required></input>
                            <input type="text" className="inputTempoAttPopUp" placeholder='Tempo de prisão' onChange={(event) => {props.setTempo(event.target.value)}} required></input>
                        </div>
                        <div className = 'buttonConfirmAtt'>
                            <button className = 'attBtnConfirm' onClick={props.atualizar}>CONFIRMAR EDIÇÃO</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : "";
}

export default PopUpUpdate