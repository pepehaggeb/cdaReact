import React from 'react'   
import './index.limparFiltros.css'
import ClearIcon from '@material-ui/icons/Clear';

function LimparFiltro(props) {
    return(props.trigger) ? (
        <>
            <div className = 'bodyLimparFiltros'>
                <button className = 'buttonLimparFiltros' onClick = {props.limpar}><ClearIcon className = 'clearIconCss'/>Limpar Filtros</button>
            </div>
        </>
    ) : "";
}

export default LimparFiltro;