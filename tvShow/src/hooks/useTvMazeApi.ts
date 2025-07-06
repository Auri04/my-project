import { useEffect, useState } from "react";
import tvMazeApi from "../services/tvMazeApi";

const useTvmazeApi= (query:string) =>{

    const [searchResult, setSearchResult] = useState<TypeSearch[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
       if(!query.trim()){
        return
        } 

        setLoading(true);
        tvMazeApi(query)
        .then((data)=>{
            setSearchResult(data);
        })
        .catch((error)=>{
            console.error('Errore ', error);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[query])

    return{
        searchResult,
        loading
    }
}

export default useTvmazeApi;