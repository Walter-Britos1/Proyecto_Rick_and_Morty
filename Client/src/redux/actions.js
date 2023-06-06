import axios from 'axios';

export const addFav = (character) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) => {
         await axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
               type: 'ADD_FAV',
               payload: data,
            });
         });
      };
   // eslint-disable-next-line no-unreachable
   } catch (error) {
      new Error(error.message)
   }
 };

export const removeFav = (id) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return async (dispatch) => {
         await axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
   };
   } catch (error) {
      new Error (error.message)
   }
 };

export const filterCards = (gender) => {
    return {
        type: 'FILTER_CARDS',
        payload: gender
    }
}; 

export const orderCards = (order) => {
    return {
        type: 'ORDER_CARDS',
        payload: order
    }
};