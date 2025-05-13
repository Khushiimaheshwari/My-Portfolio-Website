import React from 'react'
import Hero_Text from './Hero_Text'
import Hero_Pic from './Hero_Pic'
import Hero_Gradient from './Hero_Gradient';

function Hero_Main() {
    return (
        <div id='KM'
         className="w-full flex sm:pt-30 lg:pt-36 md:pt-45 md:pb-25 sm:pb-15 lg:pb-15">
            <div className="flex xl:gap-40 md:flex-row sm:gap-10 sm:flex-col lg:gap-20 max-w-[1300px] mx-auto justify-between items-center relative px-4">
                <Hero_Text/>
                <Hero_Pic/>
            </div>
            <Hero_Gradient/>
        </div>
    );
};

export default Hero_Main
