import { useEffect, useState } from "react";
import supereroiApi from "../services/supereroiApi";

const useSupereroiApi= () =>{

    const [supereroi, setSupereroi] = useState<SupereroiTypeApi[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        setLoading(true);
        supereroiApi()
        .then((data)=>{
            setSupereroi(data)
        })
        .catch((error)=>{
            console.error('Errore ', error)
        })
        .finally(()=>{
            setLoading(false);
        })
    }, [])

    return{
        supereroi,
        loading
    }
}

export default useSupereroiApi;