import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import '../hojasDeEstilos/Detail.css'


export default function Detail () {
  const { id } = useParams()

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

  return (
    <section className='pantalla-divida'>
      <div className='izquierda'>
        <ul>
          <li>{character.name}</li>
          <li>{character.status}</li>
          <li>{character.species}</li>
          <li>{character.gender}</li>
          <li>{character.origin?.name}</li>
        </ul>
      </div>
      <div className='derecha'>
        <img className='img-detail' src={character.image} alt='' />
      </div>
    </section>

  )
}
