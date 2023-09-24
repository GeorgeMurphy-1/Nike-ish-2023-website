import './hero.css'
import heroimg from './../../assets/Image.png'

function Hero() {
  return (

    <div className='ebikerepair__hero'>
    <p className="ebikerepair__hero_greeting-main"> Hello E-bike Repair</p>
    <p className="ebikerepair__hero_greeting-sub">Call US for Your At Home Bike Service</p>
    <img src={heroimg} alt="3d Ebike" className="ebikerepair__hero-img" />
    </div>
  )
}

export default Hero
