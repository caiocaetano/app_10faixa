import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomeCard extends Component {
  render() {
    return (
        <div className="card">
            <div className="card-header">
                Campeonato
            </div>
            <div className="card-body">
                <h5 className="card-title">Adicionar novo Campeonato</h5>
                <Link className="btn btn-primary" to={'/campeonato'}>Click Aqui</Link>
            </div>
        </div>
    )
  }
}
