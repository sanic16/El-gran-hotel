import double_room from '@/../public/assets/images/rooms/double-room.jpg'
import single_room from '@/../public/assets/images/rooms/single-room.jpg'
import vip from '@/../public/assets/images/rooms/vip.jpg'
import lux from '@/../public/assets/images/rooms/lux.jpg'
   

const rooms = [
    { id:1, image: single_room.src, title: 'Dormitorio Simple', description: 'Dormitorio Simple', price: 800, },
    { id:2, image: double_room.src, title: 'Dormitorio Doble', description: 'Dormitorio Doble', price: 1000, },
    { id:3, image: vip.src, title: 'Dormitorio VIP', description: 'Dormitorio VIP', price: 1500, },
    { id:4, image: lux.src, title: 'Dormitorio Lux', description: 'Dormitorio Lux', price: 2000, },

]

export { rooms }