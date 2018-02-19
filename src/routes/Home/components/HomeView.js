import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { Link } from 'react-router'

export const HomeView = () => (
  <div>
    <h4>Welcome! San Juan</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
    <Link to='/counter'>Counter</Link>
  </div>
)

export default HomeView
