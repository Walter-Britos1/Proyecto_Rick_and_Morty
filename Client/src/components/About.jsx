import '../hojasDeEstilos/About.css'

export default function Abaut () {
  return (
      <div className='abaut-contenedor'>
        <img className='img' src='https://www.xtrafondos.com/wallpapers/rick-y-morty-escapando-de-portal-9235.jpg' alt='' />
        <div className='about-adicional-info'>
          <div className='card-info'>
            <h1>App creada por Walter Britos</h1>
            <h1>Estudiante de la carrera Full Stack Developer en 
              <a href='https://authentication.soyhenry.com/login/'> Soy Henrry</a>
            </h1>
          </div>
        </div>
      </div>  
  )
}