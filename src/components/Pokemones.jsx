import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Pokemones (){
    const [listaPokemones, setListaPokemones] = useState([])
    const url='https://pokeapi.co/api/v2/pokemon/'
    
    const [nombrePokemon, setNombrePokemon] = useState('Pokemones')
    const navigate = useNavigate();

    useEffect(() => {
        fetch(url).then(resp => resp.json() )
            .then(data => setListaPokemones(data.results))
    }, [])

    const verDatosPokemon = () => {
        (nombrePokemon === 'Pokemones') ? alert('Seleccione un pokemon') : navigate(`/pokemones/${nombrePokemon}`);
    };

    return (
        <div id='Home' className='container text-center justify-content-center'>
            <h1 className='tituloPrincipal'>Selecciona un pokemon!</h1>
            <div className="text-center">
            <Form.Select className="d-inline formSelect m-4" aria-label="Default select example"
                onChange={({target}) => setNombrePokemon(target.value)}
                >
                <option>Pokemones</option>
                {listaPokemones.map((dato) => (
                    <option key={dato.name} value = {dato.name}>{dato.name}</option>))}
            </Form.Select>
            </div>
            <Button variant='dark' onClick={verDatosPokemon}>Ver Detalle</Button>
        </div>
    )
} 
export default Pokemones
