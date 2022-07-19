import React from "react";
import Slider from "../HelperComponents/Slider";

const homeSliderImages = [
    "https://strandbergguitars.com/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=1620,height=1080,fit=cover/wp-content/uploads/2021/10/strandberg-boden-prog-nx-earth-green-trem-6-string-headless-guitar-7.jpg",
    "https://strandbergguitars.com/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=1920,height=740,fit=cover/wp-content/uploads/2020/06/strandberg-frontpage-bg_1.png",
    
];

const HomePage = () => {
    // тут можно без ретерн
    return (
        <div className="flex justify-center">
            <Slider images={homeSliderImages} sliderWidth={window.screen.width} />
        </div>
    );
};

export default HomePage;
