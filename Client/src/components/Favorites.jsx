import '../hojasDeEstilos/Favorites.css'

import { connect, useDispatch } from 'react-redux';
import Card from  './Card.jsx';
import { filterCards, orderCards } from '../redux/actions.js';
import { useState } from 'react';

 const Favorites = ({ myFavorites }) => {
  const dispatch =  useDispatch();

  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux)
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  }

  return (
    <div>
      <div className='contenedor-filtros'>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      {
        myFavorites && myFavorites.map((char) => {
          return (
              <Card 
                key={char.id}
                id={char.id}
                name={char.name}
                status={char.status}
                species={char.species}
                gender={char.gender}
                origin={char.origin?.name}
                image={char.image}
              />
          )
        })
      }
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
};


export default connect(mapStateToProps, null)(Favorites);