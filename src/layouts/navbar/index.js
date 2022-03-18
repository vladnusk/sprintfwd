import './style.css'
import { navConfig } from './navbarConfig'
import {useNavigate, Outlet} from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <>
    <div className="navbar">
    <ul className="list">
   {navConfig.map(item => {
     return(
       <li className='item' key={item.title} onClick={() => navigate(item.path)}>{item.title}</li>
     )
   })}
   </ul>
    </div>
    <Outlet />
    </>
  )
}
