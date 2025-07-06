import type { SupereroeType } from "../hooks/supereroeTypeApi.types";

const supereroeDetailsApi= async (id:string) => {

    const res = await fetch(`https://www.superheroapi.com/api.php/b96d3dee75ad49eb94f05629ac687b60/${id}`);

    const data: SupereroeType= await res.json();

    if(!res.ok)
        throw new Error ('Errore');
    return data;
}

export default supereroeDetailsApi;