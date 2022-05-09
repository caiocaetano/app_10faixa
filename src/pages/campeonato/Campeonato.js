import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { WithRouter } from '../../components/WithRouter'

export class Campeonato extends Component {
  constructor(props)
  {
      super(props)

      //inicializando state para o form
      const state = {
        nomeCampo : '',
        dataHora : new Date(),
        limiteJogadores : 1,
        loading : false
      }

      this.state = state
  }

  //função para submeter os dados para a api via post
  submit = (e) =>{
    e.preventDefault()

    const state = this.state

    //coletando dados do form
    const payload = {
      nome_campo : state.nomeCampo,
      data_hora : state.dataHora,
      limite_jogadores : state.limiteJogadores
    }

    //objeto com informações da requisição
    const requestOptions = {
      method : 'post',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(payload)
    }

    //url da api e endpoint
    const url = 'http://localhost:3000/campeonato'

    //ativando loading
    this.setState({
      loading : true
    })

    fetch(url, requestOptions)
    .then(data => {
      if(data.ok)
      {
        alert('Registro salvo com sucesso!')

        this.props.navigate('/home')
      }
      else{
        alert(`Erro ao salvar: ${data.statusText}`)
      }
    })
    //caso ocorra algum erro
    .catch((error) => {
      alert(`Erro ao salvar: ${error}`)
    })
    .finally(() => {
      //desativando loading
      this.setState({
        loading : false
      })
    })
  }

  render() {
    return (
      <>
        <div className='row'>
          <div className='col-lg-4'>
            <h3>Adicionar novo campeonato</h3>
          </div>
        </div>
        <hr />
        <form onSubmit={this.submit}>
          <div className='row'>
            <div className='col-lg-4'>
              <label htmlFor="nomeCampo" className="form-label">Tipo do campo</label>
              <select onChange={(event) => this.setState({
                nomeCampo : event.target.value
              })} className="form-control">
                <option value={""}>Selecione</option>
                <option value={"Society"}>Society</option>
                <option value={"Campo"}>Campo</option>
                <option value={"Futsal"}>Futsal</option>
              </select>
            </div>
            <div className='col-lg-2'>
              <label htmlFor="dataHora" className="form-label">Data e hora do jogo</label>
              <input required type="datetime-local" className="form-control" id="dataHora" defaultValue={this.state.dataHora} onChange={(event) => this.setState({
                dataHora : event.target.value
              })} />
            </div>
            <div className='col-lg-2'>
              <label htmlFor="limiteJogadores" className="form-label">Limite Jogadores</label>
              <input required type="number" className="form-control" id="limiteJogadores" min={1} defaultValue={this.state.limiteJogadores} onChange={(event) => this.setState({
                limiteJogadores : event.target.value
              })}/>
            </div>
          </div>
          <br/>
          <div className='row'>
            {
              this.state.loading ?
              <>
                <p>Inserindo dados...</p>
              </>
              :
              <>
                <div className='col-1'>
                  <button type="submit" className="btn btn-primary">Salvar</button>
                </div>
                <div className='col-1'>
                  <Link to={'/home'} type="button" className="btn btn-info">Voltar</Link>
                </div>
              </>
            }
            
          </div>
        </form>
      </>
    )
  }
}

export default WithRouter(Campeonato)