import React from 'react'
import Resto from '../../image/restauranfood.jpg'

function Little() {
  return (
    <>
    <div className='resto'>
         <div >
    <h1 className='titre'>Little Lemon</h1>
    <h3>Chicago</h3>
    <p>ware a family owned<br/> Mediterranean restaurant,<br/> focused on traditional<br/> recipes served with a modern<br/> twist</p>
    <button>Reserve a Table</button>
    </div>
    <div>
    <img src={Resto} alt='Resto' id='i1'/>
    </div>
    </div>
   
    </>
  )
}

export default Little
