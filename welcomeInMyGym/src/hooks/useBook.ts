import { BASE_URL } from "../costants";

const UseBook = async (id: number, duration: number) => {

    console.log(id, duration);

    const headers= {
        "Content-Type": "application/json"
    }

    // const addEndDate= {
    //     method: "POST",
    //     headers,
    //     body: JSON.stringify({minutes}),
    // }

    const res = await fetch(`${BASE_URL}/api/equipment/${id}/book`, {
        method: "POST",
        headers,
        body: JSON.stringify({ duration }),
    });

    if (!res.ok) throw new Error('Errore nella prenotazione');

    const data = await res.text();
    console.log('Prenotazione avvenuta con successo', data);
}

export default UseBook;