import React, { useState, useEffect } from "react";

const Slider = ({ images, sliderWidth, sidePanel }) => {
    const [translate, setTranslate] = useState(0);
    const [selectedSlide, setSelectedSlide] = useState(0);
    const [width, setWidth] = useState(sliderWidth);

    useEffect(() => {
        if(window.screen.width < (sliderWidth + 42)) {
            setWidth(window.screen.width - 50);
        }
    }, [sliderWidth])

    const nextSlide = () => {
        const offsetWidth = width * (images.length - 1);
        if (translate < offsetWidth) {
            setTranslate(translate + width);
            setSelectedSlide(selectedSlide + 1);
        } else {
            setTranslate(0);
            setSelectedSlide(0);
        }
    };

    const prevSlide = () => {
        const offsetWidth = width * (images.length - 1);
        if (translate > 0) {
            setTranslate(translate - width);
            setSelectedSlide(selectedSlide - 1);
        } else {
            setTranslate(offsetWidth);
            setSelectedSlide(images.length - 1);
        }
    };

    const selectSlide = (i) => {
        setSelectedSlide(i);
        setTranslate(width * i);
    };

    return (
        <div className="flex items-center select-none">
            <ul
                className={`flex flex-col justify-center w-16`}
                style={{
                    height: `${sliderWidth-30}px`,
                    display: `${
                        window.screen.width > sliderWidth + 150
                            ? "flex"
                            : "none"
                    }`,
                }}
            >
                {sidePanel && images.map((img, i) => {
                    return (
                        <img
                            onClick={(e) => selectSlide(i)}
                            alt="img"
                            className={` mt-2 pt-2 ${
                                selectedSlide === i
                                    ? "opacity-100 h-1/4"
                                    : "opacity-30 h-1/6"
                            } hover:opacity-100 cursor-pointer transition-all w-fit`}
                            key={img}
                            src={img}
                        />
                    );
                })}
            </ul>
            <div
                onClick={() => prevSlide()}
                className="text-5xl text-stone-600 -mr-20 z-10 hover:text-stone-400 h-20 w-20 flex justify-center items-center cursor-pointer"
            >
                <i className="chevron left icon"></i>
            </div>
            <div
                className={`slider max-h-[850px] overflow-hidden`}
                style={{ maxWidth: `${width}px` }}
            >
                <div
                    style={{ transform: `translateX(-${translate}px)` }}
                    className={`flex  transition-all duration-500`}
                >
                    {images.map((img) => {
                        return <img alt="img" style={{width: `${width}px`}} key={img} src={img} />;
                    })}
                </div>
            </div>
            <div
                onClick={() => nextSlide()}
                className="text-5xl text-stone-600 -ml-20 z-10 hover:text-stone-400 h-20 w-20 flex justify-center items-center cursor-pointer"
            >
                <i className="chevron right icon"></i>
            </div>
        </div>
    );
};

export default Slider;
