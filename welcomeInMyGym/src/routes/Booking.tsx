import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import useEquipmentBookingList from "../hooks/useEquipmentBookingList";
import useEquipmentListApi from "../hooks/useEquipmentListApi";

const Booking= () =>{

    const {equipmentBooked} = useEquipmentBookingList();
    const {equipment} = useEquipmentListApi();
    const [
        equipmentBookingWithEquipmentDetails,
        setEquipmentBookingWithEquipmentDetails,
      ] = useState<(BookingsType & { equipment?: EquipmentType })[]>();

      useEffect(() => {
        if (equipment && equipmentBooked) {
          const newEquipmentBookings = equipmentBooked.map((b) => {
            const equipmentId = b.equipment_id;
            const equipmentDetails = equipment.find((eq) => eq.id === equipmentId);
            return {
              ...b,
              equipment: equipmentDetails,
            };
          });
          setEquipmentBookingWithEquipmentDetails(newEquipmentBookings);
        }
      }, [equipment, equipmentBooked]);

    return(
        <div>
      <Navbar></Navbar>
      <div className="home-container">
        <Title>Prenotazioni effettuate</Title>
        {equipmentBookingWithEquipmentDetails &&
          equipmentBookingWithEquipmentDetails.map((itemBooking) => {
            return (
              <div className="equipment-card">
                <div key={itemBooking.id} className="equipment-description">
                  <p>
                    <b>Prenotazione {itemBooking.id}</b>
                  </p>
                  <p>
                    <b>{itemBooking.equipment?.name} </b>
                  </p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: itemBooking.equipment?.icon || "",
                    }}
                  ></div>
                  <p>
                    Fine prenotazione:{" "}
                    {new Date(itemBooking.end_date).toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Booking