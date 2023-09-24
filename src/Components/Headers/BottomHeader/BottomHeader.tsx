import './BottomHeader.css'
function BottomHeader() {
  return (
    <div className='ebikerepair__bottomheader-container'>
    <div className='ebikerepair__bottomheader_logo-container'>
      logo
    </div>
<div className='ebikerepair__bottomheader-Links'>
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
   <div>Six</div>
   </div>
   <div>
    <img src="#" alt="SearchIcon" />
   <input type="text" placeholder='Search' />
   </div>
    
    <div>
      <img src="#" alt="Heart" />
      <img src="#" alt="Bag" />
    </div>
    </div>
  )
}

export default BottomHeader
