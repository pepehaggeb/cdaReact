import React from 'react'
import './index.codigoPenal.css'
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DateRangeIcon from '@material-ui/icons/DateRange';

function CodigoPenal(props) {

    return (
        <>
            <div className = 'sectionCodigos'>
                <div className = 'topCodigo'>
                    <div className='nameCodigoDiv'>
                        <p className='nameCodigo'>{props.name}</p>
                        {/* <div className = 'statusCodigo' style={checkStatus ? {'backgroundColor': 'green'} : {'backgroundColor' : 'red'}}>{checkStatus ? 'Ativo' : 'Inativo'}</div> */}
                        <div className = 'statusCodigo' style={props.style}>{props.text}</div>
                        <p className = 'dateCodigo'><DateRangeIcon fontSize = 'small' className = 'iconCalendar'/>{props.created_at}</p>
                    </div>
                    <div className='descriptionCodigoDiv'>
                        <p className='descriptionCodigo'>{props.description}</p>
                    </div>
                    <div className='multaAndTime'>
                        <p className = 'multa'>Multa: <font color='#f7e2a3'>RS {props.multa}</font></p>
                        <p className = 'time'>Tempo de Prisão: <font color='#f7e2a3'>{props.tempo} Anos</font></p>
                    </div>
                </div>
                <div className = 'bottomCodigo'>
                    <div className = 'editarButton'>
                        <button className = 'excluir' onClick={props.onClick1}><EditIcon fontSize='medium' className = 'iconBtn1'/><p className='textBtn1'>Editar</p></button>
                    </div>
                    <div className = 'excluirButton'>
                        <button className = 'excluir' onClick={props.onClick2}><HighlightOffIcon fontSize='medium' className = 'iconBtn2'/><p className='textBtn2'>Excluir</p></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CodigoPenal