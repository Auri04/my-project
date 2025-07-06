import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import useEquipmentListApi from "../hooks/useEquipmentListApi";
import Navbar from "../components/Navbar";


const Home = () =>{

const {equipment}= useEquipmentListApi();
const navigate= useNavigate();

    return(
        <div className="home-container">
            <Navbar></Navbar>
            <Title>Welcome in my gym</Title>
            <div className="equipment-container">
                {equipment.map((item)=>{
                    return (
                        <div className="equipment-card" key={item.id}>
                            <div className="card-header">
                            <h2>{item.name}</h2>
                            <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                            </div>
                            <div className="card-body">
                             <img src={item.image} alt="equipment image" />
                            </div> 
                            <div className="card-footer">
                            <p>{item.claim}</p>    
                            <p>Price per minute: {item.pricePerMinute}</p>
                            <button onClick={()=>{
                                navigate(`/${item.id}/book`);
                            }}>Noleggia</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;