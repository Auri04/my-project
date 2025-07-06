import { useEffect, useState } from "react";
import equipmentBookingList from "../services/equipmentBookingList";

const useEquipmentBookingList= () =>{

    const [equipmentBooked, setEquipmentBooked] = useState<BookingsType[]>([]);
    const [loadingEquipmentBooked, setLoadingEquipmentBooked] = useState(true);

    useEffect(()=>{
        setLoadingEquipmentBooked(true);
        equipmentBookingList()
        .then((data)=>{
            setEquipmentBooked(data);
        })
        .catch((error)=>{
            console.error('Errore nel caricamento dell attrezzatura prenotata', error);
        })
        .finally(()=>{
            setLoadingEquipmentBooked(false);
        })
    }, [])

    return{
        equipmentBooked, loadingEquipmentBooked
    }

}

export default useEquipmentBookingList;