import React from 'react'
import c1i from '../../image/c1.jpg'
import c2i from '../../image/c3.jpg'



function Special() {
  return (
    <>
      <div className='top'>
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className='cards'>
      <div class="card">
  <img src={c1i} alt="Description de l'image" class="card-image"/>
  <div class="card-content">
    <h2 class="card-title">Greed salad</h2>
    <p class="card-text">The famous greek salad of<br/> crispy lettuce , pepper, olive<br/> and our chicago style feta<br/> chese , garnished with<br/> crunshed garlic and resemary<br/> croutons.</p>
  </div>
</div>

<div class="card">
  <img src={c2i} alt="Description de l'image" class="card-image"/>
  <div class="card-content">
    <h2 class="card-title">Bruchta</h2>
    <p class="card-text">Our brucheta is made from<br/> grilled bread that has been<br/> smeared whith gralic and<br/> seasoned whith salt and olive<br/> oil.</p>
  </div>
</div>

<div class="card">
  <img src={c1i} alt="Description de l'image" class="card-image"/>
  <div class="card-content">
    <h2 class="card-title">Lemon desert</h2>
    <p class="card-text">This comes stright from<br/> grandma's recipe book , every <br/>last ingredient has been<br/> sourced and is as authentic<br/> as can be imagined</p>
  </div>
</div>
      </div>
    </>
  )
}

export default Special
