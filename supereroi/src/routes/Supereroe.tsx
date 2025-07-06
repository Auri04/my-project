import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import useSupereroeDetailsApi from "../hooks/useSupereroeDetailsApi";

const Supereroe = () =>{

    const {id} = useParams();

    if(!id) return <p>Id non valido</p>
    
    const {supereroe, loading} = useSupereroeDetailsApi(id);

    if(loading) return <p>Caricamento dati...</p>

    return(
        <div>
            <Navbar></Navbar>
            <Title>{supereroe?.name}</Title>
            <div className="biography">
                <div className="supereroeImg">
                <img src={supereroe?.image.url} alt="Supereroe foto" />
                </div>
                <div className="supereroeDati">
                    <p>Gender: {supereroe?.appearance.gender}</p>
                    <p>Eye color: {supereroe?.appearance.eyeColor}</p>
                    <p>Hair color: {supereroe?.appearance.hairColor}</p>
                    <p>Height: {supereroe?.appearance.height}</p>
                    <p>Weight: {supereroe?.appearance.weight}</p>
                </div>
            </div>
        </div>
    );
}

export default Supereroe;