import { useEffect, useState } from "react";
import supereroeDetailsApi from "../services/supereroeDetailsApi";
import type { SupereroeType } from "./supereroeTypeApi.types";

const useSupereroeDetailsApi=(id:string) =>{

    const [supereroe, setSupereoe] = useState<SupereroeType>();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        supereroeDetailsApi(id)
        .then((data)=>{
            setSupereoe(data)
        })
        .catch((error)=>{
            console.error('Errore:', error);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[id])

    return{
        supereroe,
        loading
    }

}

export default useSupereroeDetailsApi;