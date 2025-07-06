import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import useSupereroiApi from "../hooks/useSupereroiApi";

const Home= () =>{

    const navigate = useNavigate();
    const {supereroi} = useSupereroiApi();

    return(
        <div>
            <Navbar></Navbar>
            <Title>Supereroi</Title>

            <div className="supereroi-container">
            {supereroi.map((item)=>{
                console.log(item);
                return(
                    <div onClick={() =>navigate(`/supereroe/${item.id}`)} className="supereroi-card" key={item.id}>
                        <p>{item.name}</p>
                        {item.images?.md ? 
                            (<img className="supereroi-img" src={item.images.md} alt="Immagini supereroe" />)
                            :
                            (
                                <div className="supereroi-noImg">
                                    <p>Immagine non disponibile</p>
                                </div>
                            )
                        }
                        
                    </div>
                );
            })}
            </div>
        </div>
    );
}
export default Home;