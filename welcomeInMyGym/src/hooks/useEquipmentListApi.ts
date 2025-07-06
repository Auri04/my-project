import { useEffect, useState } from "react"
import equipmentListApi from "../services/equipmentListApi";

const useEquipmentListApi= () =>{
    const [equipment, setEquipment] = useState<EquipmentType[]>([]);
    const [loadingEquipment, setLoadingEquipment] = useState(true);

    useEffect(()=>{
        setLoadingEquipment(true)
        equipmentListApi()
        .then((data)=>{
            setEquipment(data);
        })
        .catch((error)=>{
            console.error('Errore caricamento', error);
        })
        .finally(()=>{
            setLoadingEquipment(false);
        })
    }, []);

    return {
        equipment,loadingEquipment
    }
}

export default useEquipmentListApi;