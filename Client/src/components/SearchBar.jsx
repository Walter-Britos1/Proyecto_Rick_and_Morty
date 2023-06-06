import { useState } from 'react';

import '../hojasDeEstilos/SearchBar.css'

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }


   return (
      <div className='search-bar'>
      <div className='container'>
         <input className='input' 
         type='search' 
         onChange={handleChange}
         value={id}
         />
         <button className='btn'  
         onClick={() => onSearch(id)}>
            Agregar
         </button>
      </div>
      </div>
   );
}
