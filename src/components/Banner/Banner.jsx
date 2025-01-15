import React from 'react';

/* Assets*/
import BannerImage from '../../assets/img/banner.jpg';

/* Style*/
import './Banner.css';

const Banner = () =>{
    return(
        <div className='Banner_content'>
            <img className='Banner_img' src={BannerImage} alt='banniere electrique bleu'></img>
        </div>
    );
}
export default Banner;