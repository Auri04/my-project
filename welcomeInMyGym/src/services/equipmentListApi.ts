import { BASE_URL } from "../costants";

const equipmentListApi = async () => {
    const res = await fetch(`${BASE_URL}/api/equipment/`)
    const data: EquipmentType[] = await res.json()
    if(!res.ok)
        throw new Error ('Error')
    return data
}

export default equipmentListApi;