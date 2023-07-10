
const Hero = () => {
    return (
        <section>
            {/* < !--HERO TEXT-- > */}
            < h1 className="container pl-8 mx-auto my-16 text-6xl font-bold lg:text-8xl xl:text-9xl lg:my-32 lg:pl-0" > Think Beyond < br /> Audit < span className="text-[#CB5050]" >.</span ></h1 >
            {/* <!-- </div> -- > */}
            < div className="container grid gap-4 pb-20 mx-auto lg:grid-cols-3 xl:gap-6" >
                <div className="flex flex-col justify-around w-screen lg:w-full h-[460px] bg-[#CB5050] mix-blend-multiply p-6 xl:p-10 shadow-lg rounded-sm">
                    <div className="flex items-center">
                        <div className="ml-4 mr-12 rect"></div>
                        <h2 className="text-xl font-bold text-white xl:text-4xl">LEVEL 1 <br />B-BBEE</h2>
                    </div>
                    <p className="mt-4 text-white xl:mt-12">We are proud to say that our firm is a level 1 B-BBEE Contributor in terms of the Broad-based Black Economic Empowerment scorecard rating system and our B-BBEE Recognition Level is 135%.</p>
                    <div className="flex flex-row-reverse mt-4 font-bold text-white xl:mt-12">
                        <a href=""> FIND OUT MORE {'>'}</a>
                    </div>
                </div>
                <div className="flex flex-col justify-around w-screen lg:w-full h-[460px] bg-[#FCD583] mix-blend-multiply  p-6 xl:p-10 shadow-lg rounded-sm">
                    <div className="flex items-center ">
                        <div className="ml-4 mr-12 rect"></div>
                        <h2 className="text-xl font-bold text-white xl:text-4xl">OVER 7 <br />YEARS <br /> EXPERIENCE</h2>
                    </div>
                    <p className="mt-4 text-white xl:mt-12">With over 7 years of experience in the financial industry, we believe that we can cater for all your financial, audit and advisory needs.</p>
                    <div className="flex flex-row-reverse mt-4 font-bold text-white xl:mt-12">
                        <a href=""> FIND OUT MORE {'>'}</a>
                    </div>
                </div>
                <div className="flex flex-col justify-around w-screen lg:w-full h-[460px] bg-[#3CBCC3] mix-blend-multiply  p-6 xl:p-10shadow-lg rounded-sm">
                    <div className="flex items-center">
                        <div className="ml-4 mr-12 rect"></div>
                        <h2 className="text-xl font-bold text-white xl:text-4xl">CLIENT <br />FOCUSED</h2>
                    </div>
                    <p className="mt-4 text-white xl:mt-12">The success of our brand name is the result of a combination of hard work, creativity and highly trained professionals. Our company aims to be client focused. That means we'll go out of our way for you and help meet your goals</p>
                    <div className="flex flex-row-reverse mt-4 font-bold text-white xl:mt-12">
                        <a href=""> FIND OUT MORE {'>'}</a>
                    </div>
                </div>
            </div >

            {/* <!-- END HERO TEXT  --> */}
        </section>
    )
}

export default Hero