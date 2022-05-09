import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../../components/Menu'

export default class Layout extends Component {
  render() {
    return (
        <>
            <Menu/>
            <div className='container' style={{ marginTop: 50 }}>
                <Outlet />
            </div>
        </>
    )
  }
}
