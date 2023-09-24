import './BottomHeader.css'
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css'

import searchIcon from './../../../assets/searchIcon.lottie'
import fb from "../../../assets/facebookshare.lottie";
import ig from "../../../assets/InstagramShare.lottie";

function BottomHeader() {
  return (
    <div className='ebikerepair__bottomheader-container'>
    <div className='ebikerepair__bottomheader_logo-container'>
      Parts And Repairs
    </div>
<div className='ebikerepair__bottomheader-Links'>
   <div><a href='#'>Parts</a></div>
   <div><a href='#'>Service</a></div>
   <div><a href='#'>News</a></div>
   <div><a href='#'>Events</a></div>
   </div>
     <div className='ebikerepair__bottomheader__search-container'>
   <div className='ebikerepari__bottomheader__search-icon'>
   <DotLottiePlayer
        src={searchIcon}
        autoplay
        loop
      >
      
      </DotLottiePlayer></div>
   <input type="text" placeholder='Search' />
   </div>
    
    <div className='ebikerepair__bottomheader-container-search'>
    <span className='ebikerepari__bottomheader__search-icon'>
   <DotLottiePlayer
        src={fb}
        autoplay
        loop
      >
      
      </DotLottiePlayer></span>
      <span className='ebikerepari__bottomheader__search-icon'>
   <DotLottiePlayer
        src={ig}
        autoplay
        loop
      >
      
      </DotLottiePlayer></span>
    </div>
    </div>
  )
}

export default BottomHeader
