import React, { useState } from "react";

// takes in images as props
const Carousel = ({ images }) => {

    const [index, setImages] = useState(0);

    // TODO Animation, fade in
    // No instagram existe uma transição rápida para o lado e a imagem é trocada uma pela outra -
    // Mobile n tem setas

    const previousImage = () => {
        const nextIndex = index - 1;

        if (nextIndex < 0)
            setImages(images.length - 1);
        else
            setImages(nextIndex);

    };

    const nextImage = () => {

        //alert(index + 2 + " " + images.length);

        if (index <= images.length)
            setImages((index + 1) % images.length);

    };

    const gotoImage = (index) => {

        // TODO Ou seja, o indice n deva mexer apenas mudar o src do .Item ?
        setImages(index);

    };

    return (
        images.length > 0 && (
            <div className="Wrapper">

                <div className="ImageWrapper">
                    <button className="Arrow Left Desktop" onClick={previousImage}>{"<"}</button>
                    <img className="Item" src={images[index].orig_src} alt={images[index].description} />
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
