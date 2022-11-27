import './Pricing.css'
import {ImFire} from 'react-icons/im'
import {SlDiamond} from 'react-icons/sl'
import {BsExclamationLg, BsCheck} from 'react-icons/bs'
import { Button } from 'react-bootstrap'
import TigaGambar from '../assets/mOCKUP TOPED 700 X 700.png'

const Pricing = () => {
    return(
        <div className='pricing-section' id='pricing'>
            <div className='pricing-title'>
                <h3 className='pricing-title-h3'>Pricing</h3>
            </div>
            <div className='pricing-card-parent'>
                <div className='pricing-hotsale'>
                    <p className='pricing-hotsale-p'>HOT SALE</p><ImFire className='pricing-hotsale-fire-icon'/>
                </div>
                <div className='pricing-card'>
                    <div className='pricing-card-diamond-icon'>
                        {/* <SlDiamond size={34}/> */}
                        <img src={TigaGambar} alt='tiga-gambar-pricing' className='pricing-tigagambar' />
                    </div>
                    
                    <div className='pricing-card-text-price-dash'>
                        <p className='pricing-card-text-price-dash-p'>NORMAL PRICE<s className='pricing-card-text-price-dash-s'> IDR.3.500.000,00</s></p>
                    </div>
                    <div className='pricing-card-title'>
                        <h3 className='pricing-card-title-h3'>EARLY BIRD IDR</h3><h3 className='pricing-card-title-h3-1899k'>1899K</h3><BsExclamationLg className='pricing-card-title-exclamation'/><BsExclamationLg className='pricing-card-title-exclamation'/><BsExclamationLg className='pricing-card-title-exclamation'/>
                    </div>

                    <div className='pricing-card-text-parent'>
                        <div className='pricing-card-text-desc'>
                            <div className='pricing-card-text-desc-bg'>
                                <BsCheck size={18} className='pricing-card-text-desc-icon'/>
                            </div>
                            <div className='pricing-card-text-desc-p-bg'>
                                <p className='pricing-card-text-desc-p'>PRICE ACTION</p>
                            </div>
                        </div>
                        <div className='pricing-card-text-desc'>
                            <div className='pricing-card-text-desc-bg'>
                                <BsCheck size={18} className='pricing-card-text-desc-icon'/>
                            </div>
                            <div className='pricing-card-text-desc-p-bg'>
                                <p className='pricing-card-text-desc-p'>SMART MONEY CONCEPT</p>
                            </div>
                        </div>
                        <div className='pricing-card-text-desc'>
                            <div className='pricing-card-text-desc-bg'>
                                <BsCheck size={18} className='pricing-card-text-desc-icon'/>
                            </div>
                            <div className='pricing-card-text-desc-p-bg'>
                                <p className='pricing-card-text-desc-p'>FUNDAMENTAL ANALYSIS</p>
                            </div>
                        </div>
                        <div className='pricing-card-text-desc'>
                            <div className='pricing-card-text-desc-bg'>
                                <BsCheck size={18} className='pricing-card-text-desc-icon'/>
                            </div>
                            <div className='pricing-card-text-desc-p-bg'>
                                <p className='pricing-card-text-desc-p'>MONEY MANAGEMENT</p>
                            </div>
                        </div>
                        <div className='pricing-card-text-desc'>
                            <div className='pricing-card-text-desc-bg'>
                                <BsCheck size={18} className='pricing-card-text-desc-icon'/>
                            </div>
                            <div className='pricing-card-text-desc-p-bg'>
                                <p className='pricing-card-text-desc-p'>LIFETIME SIGNAL</p>
                            </div>
                        </div>
                    </div>
                    <div className='pricing-button-bg'>
                        <Button href='#form' className='pricing-button'>Registration</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pricing;