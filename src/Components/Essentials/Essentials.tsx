import "./essentials.css"
import image1 from "./../../assets/es1.png"
import image2 from "./../../assets/es2.png"
import image3 from "./../../assets/es3.png"

function Essentials() {
  return (
    <div className="ebikerepair__essential__container">
      <div className="ebikerepair__essential__container_img-container"><img src={image1} alt="" /><span>Mens</span></div>
      <div className="ebikerepair__essential__container_img-container"><img src={image2} alt="" /><span>Women</span></div>
      <div className="ebikerepair__essential__container_img-container"><img src={image3} alt="" /><span>Kids</span></div>
    </div>
  )
}
export default Essentials
