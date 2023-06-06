import Card from './Card';
import '../hojasDeEstilos/Cards.css'

export default function Cards({ characters, onClose }) {
   return (
      <div className='cards-container'>
         {
            characters.map((character) => {
               return (
                  <Card 
                  id={character.id}
                  key={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  image={character.image}
                  onClose={onClose}
                  />
               )
            })
         }
      </div>
   )
}
