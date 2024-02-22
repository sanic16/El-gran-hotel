import CommonHeader from "@/components/CommonHeader/CommonHeader"
import { rooms } from "./data"
import { FaAngleDoubleRight } from "react-icons/fa"
import './rooms.css'

const Rooms = () => {
  return (
    <div className="rooms" id="rooms">
        <CommonHeader title="Dormitorios Disponibles" />

        <div className="rooms-cards-wrapper">
            {
              rooms.map(room => (
                <div key={room.id} className="room-card">
                  <img src={room.image} className="room-img" />
                  <div className="room-card-content">
                    <h4 className="room-card-heading">{room.title}</h4>
                    <p className="room-card-paragraph">{room.description}</p>
                    <p className="room-price">Q {room.price}</p>
                    <button className="room-card-btn">  
                      Reservar ahora <FaAngleDoubleRight />
                    </button>
                  </div>
                </div>
              ))
            }
        </div>
        
        <div className="rooms-btn-wrapper">
            <button className="rooms-btn">
              Ver dormitorios  
            </button>
        </div>

    </div>
  )
}

export default Rooms