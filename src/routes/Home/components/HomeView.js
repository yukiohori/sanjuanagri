import React from 'react'
import './HomeView.scss'
import { Link } from 'react-router'
import { Button, Input } from 'semantic-ui-react'

export const HomeView = () => (
  <div className='login-screen'>
    <div className='login'>
      <h4>LOGIN</h4>
      <div className='login-form'>
        <Input className='input-style' focus placeholder='Usuario' />
        <Input className='input-style' placeholder='Contraseña' />
      </div>
      <Link to='/counter'><Button className='btn-color'>LOGIN</Button></Link>
    </div>
  </div>
)

export default HomeView
