import "./TopHeader.css";
import logo from "./../../../assets/ebike-repair-logo.svg";

function TopHeader() {
  return (
    <div className="ebikerepair__topheader-container">

        <img src={logo} alt="" />
      

      <a href="#" className="ebikerepair__topheader-skip">Skip to main content</a>

      <div className="ebikerepair__topheader-Links">
        <a href="#" className="ebikerepair__topheader-Links-findStore">Find a Store</a>
        <span class="horizontalBar">|</span>

        <a href="#" className="margin_header_links">Help</a>
        <span class="horizontalBar">|</span>

        <a href="#" className="margin_header_links">Join Us</a>
        <span class="horizontalBar">|</span>

        <a href="#" className="margin_header_links">Sign In</a>
      </div>
      
    </div>
  );
}

export default TopHeader;
