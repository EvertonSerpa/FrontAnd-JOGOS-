import './Navbar.css';
import logo from './logo.png';
import { FaHeart, FaRegQuestionCircle, FaRegUser, FaUserPlus, FaGamepad } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className='navbar'>
      <a className='navbar__logo' href='/'>
        <img className='navbar__image' src={logo} alt='Nintendo Shop'></img>
      </a>
      <div className='navbar__links'>
        <ul className='navbar__links__list'>
          <li>
            <a className='items' href='https://pt-americas-support.nintendo.com/'>
              <FaRegQuestionCircle />
              <span className='text'>Suporte</span>
            </a>
          </li>
          <li>
            <a className='items' href='/wishlist'>
              <FaHeart />
              <span className='text'>Lista de Desejos</span>
            </a>
          </li>
          <li>
            <a className='items' href='/login'>
              <FaRegUser />
              <span className='text'>Login</span>
            </a>
          </li>
          <li>
            <a className='items' href='/register'>
              <FaUserPlus />
              <span className='text'>Criar</span>
            </a>
          </li>
          <li>
            <a className='items' href='/profile'>
              <FaGamepad />
              <span className='text'>Perfil</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}