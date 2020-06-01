import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { FaPlayCircle } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';


const SliderVideo = () => {

    const [videoPlay, setVideoPlay] = useState(false)
    
    
    return (
        <>
        <ModalVideo channel='youtube' isOpen = {videoPlay} videoId='L61p2uyiMSo' onClose={() => setVideoPlay(false)} />
        <div className="slider-video">
            <Image src="https://i.imgur.com/00TIz7y.png" className="img-fluid"/>
            <button className="btn p-0 m-0" onClick={() => setVideoPlay(true)}>
                <FaPlayCircle className="p-0 m-0" size={60} color='#6a6971' />
            </button>
            
        </div>
        </>
    );
};

export default SliderVideo;