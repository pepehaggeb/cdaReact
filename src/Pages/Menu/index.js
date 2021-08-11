import React, { useState, useEffect } from 'react'
import './index.menu.css'
import logoCDA from '../../Images/logoCda.png'
import CodigoPenal from '../../Components/codigoPenal'
import PopUpAdd from '../../Components/adicionarCodigo'
import axios from 'axios'
import PopUpUpdate from '../../Components/editarCodigo'
import PopUpExcluir from '../../Components/excluirCodigo'
import PopUpConf from '../../Components/mensagemConfirmacao'

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
        //window.localStorage.removeItem('token')
    }, [])

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
        // axios.delete(`http://localhost:3001/codigo/remover/${id}`)
        // console.log('Clicado')
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
    const [ openAlert, setOpenAlert ] = useState(false)
    const [ messageAlert, setMessageAlert ] = useState('')

    const [ search, setSearch] = useState('')
    const [ filter, setFilter ] = useState('')
    const [ order, setOrder ] = useState('')

    
    console.log(codigosOriginal)

    let codigos = codigosOriginal
    
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
        } else if (filter === 'Tempo') {
            codigos = codigos.sort((a, b) => {
                return a.tempo - b.tempo;
            })
        }
    } else if (order !== '') {
        codigos = codigos.filter((val) => {
            if(order === 'Ativo') {
                return val.status === 1
            }
            else if(order === 'Inativo') {
                return val.status === 2
            }
        })     
    }

    // codigos.reduce((val) => {
    //     function teste() {
    //         return [].slice.call(arguments).sort(function(a,b) {
    //             return b - a;
    //         })
    //     }
    //     console.log(teste(val.multa))
    // })

    
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
                        <input type='text' placeholder='Buscar...' className='buscarInput' onChange = {(event) => {setSearch(event.target.value)}}></input>
                        <select className='filtrarInput' placeholder='Filtrar por...' onChange = {(event) => {setOrder(event.target.value)}}>
                            <option value='default' disabled selected>Filtrar por...</option>
                            <option value='Ativo'>Ativos</option>
                            <option value='Inativo'>Inativos</option>
                        </select>
                        <select className='ordenarInput' placeholder='Ordenar por...' onChange = {(event) => {setFilter(event.target.value)}}>
                            <option value='default' disabled selected>Ordenar por...</option>
                            <option value='Multa'>Valor Multa</option>
                            <option value='Prisao'>Tempo Prisão</option>
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

// [].slice.call(val.multa).splice(0, Number.MAX_VALUE, codigosSortByMultaPrice)

export default Menu;