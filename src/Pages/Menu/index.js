import React, { useState, useEffect } from 'react'
import './index.menu.css'
import logoCDA from '../../Images/logoCda.png'
import CodigoPenal from '../../Components/codigoPenal'
import PopUpAdd from '../../Components/adicionarCodigo'
import axios from 'axios'
import PopUpUpdate from '../../Components/editarCodigo'
import PopUpExcluir from '../../Components/excluirCodigo'
import PopUpConf from '../../Components/mensagemConfirmacao'
import LimparFiltros from '../../Components/limparFiltros'

function Menu() {

    const [ nameUser, setNameUser ] = useState('')

    const AuthUser = () => {
        const token = window.localStorage.getItem('token')
        const nameUser1 = window.localStorage.getItem('name')
        if(token) {
            setNameUser(nameUser1)
            return
        } else {
            window.location.href = '/login'
        }
    }
    
    useEffect(() => {
        AuthUser()
        setTimeout(() => {
            window.localStorage.removeItem('token')
        }, 180000);
    }, [])

    //180000 document.getElementById("toReset").value = "default";


    const [ codigosOriginal, setCodigosOriginal ] = useState([])
    const [ id, setId ] = useState('')
    const [ nome, setNome ] = useState('')
    const [ descricao, setDescricao ] = useState('')
    const [ valor, setValor ] = useState(0)
    const [ tprisao, setTprisao ] = useState(0)
    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ multa, setMulta ] = useState('')
    const [ tempo, setTempo ] = useState('')
    const [ stat, setStat ] = useState(1)
    const [ _id, set_Id ] = useState(0)
    const [ name1, setName1 ] = useState('')
    const [ description1, setDescription1 ] = useState('')
    const [ multa1, setMulta1 ] = useState('')
    const [ tempo1, setTempo1 ] = useState('')
    const [ stat1, setStat1 ] = useState('')

    useEffect(() => {
        axios.get("https://nodecdaprova.herokuapp.com/codigo/receber").then((response) => {
            console.log(response.data)
            setCodigosOriginal(response.data)
        })
    }, [])

    const saveDeleteCodigo = (id) => {
        set_Id(id)
        setButtonPopup2(true)
    }

    const adicionarCodigo = () => {
        axios.post("https://nodecdaprova.herokuapp.com/codigo/adicionar", 
        {
            name: name1,
            description: description1,
            multa: multa1,
            tempo: tempo1,
            status: stat1,
        }).then((response) => {
            console.log(response.data.message)
            setButtonPopup(false)
            setOpenAlert(true)
            setMessageAlert(response.data.message)
            setTimeout(() => {
                setOpenAlert(false)
            }, 4000);
        })
    }

    const updateCodigo = () => {
        axios.put("https://nodecdaprova.herokuapp.com/codigo/atualizar", {
            id: id,
            name: name,
            description: description,
            multa: multa,
            tempo: tempo,
            status: stat,
        }).then((response) => {
            setButtonPopup1(false)
            setOpenAlert(true)
            setMessageAlert(response.data.message)
            setTimeout(() => {
                setOpenAlert(false)
            }, 4000);
        })
        
    }

    const closePopUpCancelar = () => {
        setButtonPopup2(false)
    }

    const deleteCodigo = (id) => {
        axios.delete(`https://nodecdaprova.herokuapp.com/codigo/remover/${id}`)
        console.log('Clicado')
        setButtonPopup2(false)
        setOpenAlert(true)
        setMessageAlert('Código removido com sucesso')
        setTimeout(() => {
            setOpenAlert(false)
        }, 4000);
    }

    const updateInfos = (id, nome, descricao, valor, tprisao) => {
        setId(id)
        setNome(nome)
        setDescricao(descricao)
        setValor(valor)
        setTprisao(tprisao)
        setButtonPopup1(true)
    }

    const [ buttonPopup, setButtonPopup ] = useState(false);
    const [ buttonPopup1, setButtonPopup1 ] = useState(false);
    const [ buttonPopup2, setButtonPopup2 ] = useState(false);
    const [ clearFiltersModal, setClearFiltersModal ] = useState(false);
    const [ openAlert, setOpenAlert ] = useState(false)
    const [ messageAlert, setMessageAlert ] = useState('')

    const [ search, setSearch] = useState('')
    const [ filter, setFilter ] = useState('')
    const [ order, setOrder ] = useState('')
    
    function Open() {
        if(search !== '' ||filter !== '' || order !== '') {
            setClearFiltersModal(true)
        }
        else {
            setClearFiltersModal(false)
        }
    }

    // search !== '' || filter !== '' || filter === 'default' || order !== '' || order === 'default'

    setTimeout(() => {
        Open()
        console.log('teste')
    }, 500);

    async function limparFiltrosF() {
        document.getElementById("toReset1").value = "default";
        setFilter("")
        document.getElementById("toReset").value = "default";
        setOrder("")
        document.getElementById("toResetBuscar").value = "";
        setSearch("")
        await Open()
    }

    let codigos = codigosOriginal

    console.log(codigos)
    
    if (search !== '') {
        codigos = codigos.filter((val) => {
            return val.name.toLowerCase().includes(search.toLowerCase())
        }       
        )
    }else if ( filter !== '') {
        if (filter === 'Multa') {
            codigos = codigos.sort((a, b) => {
                return a.multa - b.multa;
            })
        } else if (filter === 'Prisao') {
            codigos = codigos.sort((a, b) => {
                return a.tempo - b.tempo;
            })
        } else if (filter === 'Multa1') {
            codigos = codigos.sort((a, b) => {
                return b.multa - a.multa;
            })
        } else if (filter === 'Prisao1') {
            codigos = codigos.sort((a, b) => {
                return b.tempo - a.tempo;
            })
        }
    } else if (order !== '') {
        codigos = codigos.filter((val) => {
            if(order === 'Ativo') {
                return val.status === 1
            }
            else if(order === 'Inativo') {
                return val.status === 0
            }
        })     
    }
    
    return(
        <>
            <section className = 'sectionMenu'>
                <div className = 'bodyHeader'>
                    <img src={logoCDA} className='logoCda1' alt='logoCda'></img>
                    <p className = 'textIntroMenu'>Tenha um ótimo dia oficial <font color='#eba847'>{nameUser}</font></p>
                </div>
                <div className = 'bodyMenu'>
                    <div className = 'headerMenuBody'>
                        <p className = 'textCodMenu'>Listagem de códigos penais</p>
                        <LimparFiltros 
                        trigger={clearFiltersModal}
                        limpar = {limparFiltrosF}
                        />
                        <button className='codBtn' onClick = {() => setButtonPopup(true)} >+ Adicionar novo código</button>
                        <PopUpAdd 
                        trigger={buttonPopup} 
                        setTrigger={setButtonPopup}
                        setName1={setName1}
                        setDescription1={setDescription1}
                        setMulta1={setMulta1}
                        setTempo1={setTempo1}
                        setStatus1={setStat1}
                        atualizar1={adicionarCodigo}
                        />
                        <PopUpUpdate 
                        trigger={buttonPopup1} 
                        setTrigger={setButtonPopup1} 
                        nameAntigo={nome} 
                        descricaoAntigo={descricao} 
                        valorAntigo={valor} 
                        tempoAntigo={tprisao}
                        setName={setName}
                        setDescription={setDescription}
                        setMulta={setMulta}
                        setTempo={setTempo}
                        setStatus={setStat}
                        atualizar={updateCodigo}
                        />
                        <PopUpExcluir 
                        trigger={buttonPopup2} 
                        setTrigger={setButtonPopup2}
                        onClickCancelar={closePopUpCancelar}
                        onClickRemover={() => deleteCodigo(_id)}
                        />
                        
                    </div>
                    <div className = 'filterBody'>
                        <input type='text' placeholder='Buscar...' className='buscarInput' id = 'toResetBuscar' onChange = {(event) => {setSearch(event.target.value)}}></input>
                        <select className='filtrarInput' id = 'toReset' placeholder='Filtrar por...' onChange = {(event) => {setOrder(event.target.value)}}>
                            <option value='default' disabled selected>Filtrar por...</option>
                            <option value='Ativo'>Ativos</option>
                            <option value='Inativo'>Inativos</option>
                        </select>
                        <select className='ordenarInput' id = 'toReset1' placeholder='Ordenar por...' onChange = {(event) => {setFilter(event.target.value)}}>
                            <option value='default' disabled selected>Ordenar por...</option>
                            <option value='Multa'>Valor Multa (Menor - Maior)</option>
                            <option value='Multa1'>Valor Multa (Maior - Menor)</option>
                            <option value='Prisao'>Tempo Prisão (Menor - Maior)</option>
                            <option value='Prisao1'>Tempo Prisão (Maior - Menor)</option>

                        </select>
                        {/* <input type='list' placeholder='Ordenar por...' className='ordenarInput'></input> */}
                    </div>
                    <div className = 'codigosBody'>
                        {
                            codigos.map((val) => {
                                return(
                                    <CodigoPenal 
                                    name={val.name} 
                                    description={val.description} 
                                    multa={val.multa} 
                                    tempo={val.tempo} 
                                    status={val.status}
                                    style={val.status ? {'backgroundColor': 'green'} : {'backgroundColor' : 'red'}}
                                    text={val.status ? 'Ativo' : 'Inativo'}
                                    created_at={val.created_at}
                                    onClick2 = {() => saveDeleteCodigo(val._id)} 
                                    onClick1 = {() => updateInfos(val._id, val.name, val.description, val.multa, val.tempo)}
                                    ></CodigoPenal>
                                )  
                            })
                        }
                    </div>
                    <PopUpConf
                        trigger={openAlert}
                        message={messageAlert}
                    />
                </div>
            </section>
        </>
    )
}

export default Menu;