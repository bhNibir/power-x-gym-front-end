import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'


const SliderVideo = () => {

    const [videoPlay, setVideoPlay] = useState(false)
    
    
    return (
        <div>
            <ModalVideo channel='youtube' isOpen = {videoPlay} videoId='L61p2uyiMSo' onClose={() => setVideoPlay(false)} />
            <button className="btn btn-testcolor" onClick={() => setVideoPlay(true)}>
            <svg className="bi bi-alert-triangle text-success" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
            </button>
            
        </div>
    );
};

export default SliderVideo;