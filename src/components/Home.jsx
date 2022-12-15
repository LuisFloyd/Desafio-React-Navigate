import imagenPrincipal from '../assets/img/pikachu.png'
import '../assets/css/style.css'
function Home () {
    return (
        <div id='Home' className='container text-center'>
            <h1 className='tituloPrincipal'>Bienvenido maestro pokemón</h1>
            <img className='fotoPrincipal' src = {imagenPrincipal} alt="Foto principal" />
        </div>
    )    
}
export default Home;