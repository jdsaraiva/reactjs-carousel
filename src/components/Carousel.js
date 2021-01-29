import React, { useState } from "react";
import { useSwipeable} from 'react-swipeable'

// takes in images as props
const Carousel = ({ images }) => {

    const [index, setImages] = useState(0);
    const [isActive, setActive] = useState("false");

    const previousImage = () => {
        const nextIndex = index - 1;

        if (nextIndex < 0)
            setImages(images.length - 1);
        else
            setImages(nextIndex);

    };

    // Use CSS to have smooth transitions
    const itemVisible = {
        backgroundImage: `url(${images[index].orig_src})`
    };

    const nextImage = () => {

        // Item AddClass Item.hidden
        setActive(!isActive);

        if (index <= images.length) 
            setImages((index + 1) % images.length);

    };

    const gotoImage = (index) => {

        setImages(index);

    };

    // Change image according the swipe direction
    const handlers = useSwipeable({ onSwiped: (eventData) => {

            // If value is negative slide to the left slide showing the following image
            if ( eventData.deltaX < 0 )
                nextImage();
            else
                previousImage();

    } })


    return (
        images.length > 0 && (
            <div className="Wrapper">

                <div className="ImageWrapper">
                    <button className="Arrow Left Desktop" onClick={previousImage}>{"<"}</button>
                    <div className="Item" style={itemVisible} {...handlers}  />
                    <button className="Arrow Right Desktop" onClick={nextImage}>{">"}</button>
                </div>

                <div className="ThumbnailsWrapper">
                    <img className="Thumbnails" style={{"margin-right": "5%"}} onClick={() => { gotoImage(index) }} src={images[index].orig_src} alt={images[index].description} />
                    { (index + 1) < images.length ? (
                        <img className="Thumbnails" style={{"margin-right": "5%"}} onClick={() => { gotoImage(index + 1) }} src={images[index + 1].orig_src} alt={images[index + 1].description} />
                    ):("")}
                    { (index + 2) < images.length ? (
                        <img className="Thumbnails" src={images[index + 2].orig_src} onClick={() => { gotoImage(index + 2) }} alt={images[index + 2].description} />
                    ):("")}
                    </div>

            </div>
        )
    );
}

export default Carousel;
