import { BASE_URL } from "../costants"

const equipmentBookingList= async () =>{

    const res= await fetch(`${BASE_URL}/api/equipment-bookings`)
    const data: BookingsType[] = await res.json()
    if(!res.ok)
        throw new Error('Errore nella caricamento delle attrezzature prenotate livello API')
    return data
}

export default equipmentBookingList