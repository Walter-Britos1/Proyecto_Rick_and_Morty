//Commons import
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
//Styles
import './App.css';
//Components import
import Cards from './components/Cards';
import NavBar from './components/NavBar';
import About from './components/About'
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';

const email = 'ejemplo@gmail.com';
const password = 'password12';

function App() {

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const { pathname } = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = async (id) => {
      try {
         await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         })
      } catch (error) {
         window.alert(`❌El id: ${id} no existe en la base de datos❌`)
      }
   };

   const onClose = (id) => {
      setCharacters(oldChars => oldChars.filter(c => c.id !== Number(id)))
   };

   const login = async (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
         await axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
         });
      } catch (error) {
         new Error(error.message)
      }
   }

   return (
      <div className='App'>
         {
            pathname !== '/' && <NavBar onSearch={onSearch} />
         }
         
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='//detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;
