import "./featured.css"
import runner from "./../../assets/runner.png"
function Featured() {
  return (
    <div className="ebikerepair__featured-container">
      <h3>Featured</h3>
      <img src={runner} alt="Featured" className="ebikerepair__featured-image" />
      <h1 className="ebikerepair__featured_text-main">STEP INTO WHAT FEELS GOOD</h1>
      <p className="ebikerepair__featured_text-body">Cause everyone should know the feeling of running in that perfect pair.</p>
      <div className="ebikerepair__featured_container-button">
        <a href="#" className="ebikerepair__featured_container-button-btn">Find A Store</a>
      </div>
    </div>
  )
}

export default Featured
