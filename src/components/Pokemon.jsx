import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Pokemon (){
    const {name} = useParams();//viene como parámetro desde Pokemones
    const [datosPokemon, setDatosPokemon] = useState({})
    const [caracteristicas, setCaracteristicas] = useState([])
    //cada vez que llegue un name se debe mostrar la url corr, por esto es que se usa un useEffect para name
    useEffect( () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`
        //la siguiente es otra forma de usar fetch
        fetch(url)
            .then(resp => resp.json() )
            .then(data => {                
                setDatosPokemon({   rutafoto: data.sprites.other.dream_world.front_default, 
                                    tipo: data.types[0].type.name})
                setCaracteristicas(data.stats)
            })
    }, [name]
    )
    return (
        <div className='container p-5 ' >
            <div className="border d-flex justify-content-center datosPokemon">
                <img className="ms-auto" src= {datosPokemon.rutafoto} alt="foto del pokemon" />
                <div className="mx-auto">
                    <h3 className="mt-4">{name}</h3>
                    <ul>
                        {caracteristicas.map((dato) => (<li key={dato.stat.name}>{dato.stat.name} : {dato.base_stat}</li>))}
                    </ul>
                    <h4>{datosPokemon.tipo}</h4>
                </div>
            </div>
        </div>
    )
}
export default Pokemon
