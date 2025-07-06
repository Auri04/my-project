import { useParams } from "react-router-dom";
import Title from "../components/Title";
import useEquipmentListApi from "../hooks/useEquipmentListApi";
import { useState } from "react";
import Navbar from "../components/Navbar";
import useBook from "../hooks/useBook";

const Book = () => {

    const {id} = useParams();
    const {equipment} = useEquipmentListApi();
    const [duration, setDuration] = useState(0);

    const equipmentBookedById= equipment.find((e)=>e.id === Number(id));

    return(
        <div>
            <Navbar></Navbar>
            <Title>Noleggia ciò che ami</Title>
            <div className="equipment-container">
                <div className="equipment-card">
                    <div className="card-header">
                        <h2>{equipmentBookedById?.name}</h2>
                        <div dangerouslySetInnerHTML={{ __html: equipmentBookedById?.icon || "" }}></div>
                    </div>
                
                <div className="card-body">
                    <p>Per quanto si vuole noleggiare l'attrezzo?</p>
                    <p>Ora corrente: {new Date().toLocaleString()}</p>
                </div>
                <div className="card-footer">
                    <button onClick={()=>setDuration(5)}>5 minuti</button>
                    <button onClick={()=>setDuration(10)}>10 minuti</button>
                    <button onClick={()=>setDuration(20)}>20 minuti</button>
                    <p>COSTO TOTALE NOLEGGIO: {Number(equipmentBookedById?.pricePerMinute)*duration}</p>
                    <button onClick={()=>{
                        if(duration>0){
                            alert("Periodo di noleggio selezionato correttamente");
                            useBook(Number(id), duration);
                        }else{
                            alert("Attenzione devi selezionare un periodo di noleggio");
                        }
                    }}> Conferma </button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Book;