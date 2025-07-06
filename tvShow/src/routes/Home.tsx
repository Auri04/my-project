import { useState } from "react";
import Title from "../components/Title";
import useTvmazeApi from "../hooks/useTvMazeApi";

const Home = () =>{

    const[show, setShow] = useState("");
    const[query, setQuery] = useState("");

    const{searchResult, loading}= useTvmazeApi(query);
    console.log(searchResult);

    const sendQuery = ()=>{
        setQuery(show);
    }

    return(
        <div>
            <Title>Benvenuto in TvShow</Title>
            <div className="conteiner-inputAndButton">
            <div className="conteiner-inputSearchbar">
                <input
                className="inputSearchbar"
                type="text" 
                name="searchBar"
                placeholder="Cerca uno show"
                value={show}
                onChange={(s)=>setShow(s.target.value)}
                />
            </div>
            <button className="class-button" onClick={sendQuery}>Cerca</button>
            </div>
                <div className="listOfShow">
                {
                    searchResult.map((item: TypeSearch)=>{
                        return(
                            <div className="show" key={item.show.id}>
                                <div className="showTitle">
                                    <p>{item.show.name}</p>
                                </div>
                                <div className="showImg">
                                    {item.show.image?.medium ?
                                    (
                                      <img src={item.show.image.medium} alt="Show Poster" />  
                                    ): (
                                        <div className="noImageElement">
                                            <p>NO POSTER</p>
                                        </div>
                                        )
                                    }
                                </div>
                            </div>
                        );
                    })
                }
                </div>
            </div>
    );
}

export default Home;