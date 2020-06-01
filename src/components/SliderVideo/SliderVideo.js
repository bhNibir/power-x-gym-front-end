import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { AiTwotonePlayCircle } from 'react-icons/ai';
import Image from 'react-bootstrap/Image';


const SliderVideo = () => {

    const [videoPlay, setVideoPlay] = useState(false)
    
    
    return (
        <>
        <ModalVideo channel='youtube' isOpen = {videoPlay} videoId='9Egw6XyMMZA' onClose={() => setVideoPlay(false)} />
        <div className="slider-video m-2 ml-3 p-3">
            <Image src="https://i.imgur.com/00TIz7y.png" className="img-fluid"/>
            <button className="btn btn-primary p-0 m-0" onClick={() => setVideoPlay(true)}>
                <AiTwotonePlayCircle className="p-0 m-0" size={50}  />
            </button>
            
        </div>
        </>
    );
};

export default SliderVideo;