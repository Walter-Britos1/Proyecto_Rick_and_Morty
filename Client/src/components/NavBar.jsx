import { Link } from 'react-router-dom'

import SearchBar from '../components/SearchBar.jsx'

import '../hojasDeEstilos/NavBar.css';

export default function NavBar ({ onSearch }) {
  return (
    <div className='navbar'>
      <div className='container-link'>
        <Link className='link' to='/home'>
          Home
        </Link>
        <Link className='link' to='/about'>
          About
        </Link>
        <Link className='link' to='/favorites'>
          Favortites
        </Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};