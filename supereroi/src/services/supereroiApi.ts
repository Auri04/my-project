const supereroiApi= async() =>{

    const res= await fetch(`https://akabab.github.io/superhero-api/api/all.json`);
    const data: SupereroiTypeApi[]= await res.json();

    if(!res.ok)
        throw new Error ('Errore livello api');
    return data;
}

export default supereroiApi;