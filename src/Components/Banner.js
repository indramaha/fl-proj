import BannerIMG from '../assets/BANNER new.png'
import './Banner.css'

const Banner = () => {
    return(
        <div>
            <img src={BannerIMG} alt='FL-banner' className='banner-img'/>
        </div>
    )
}

export default Banner;