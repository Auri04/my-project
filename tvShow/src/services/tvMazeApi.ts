import { BASE_URL } from "../constants";

const tvMazeApi= async (query: string) =>{

if(query.trim()==='')
{
    return [];
}

const res = await fetch(`${BASE_URL}/search/shows?q=${query}`);
const data: TypeSearch[]= await res.json();

if(!res.ok)
    throw new Error ('Errore nel caricamento');
return data;

}

export default tvMazeApi;