import React from 'react'

const Nav = () => {
    return (
        <div className="relative bg-cover bg-hero-pattern mix-blend-normal">
            {/* <!-- MENU  --> */}
            <nav className="container flex items-center justify-between py-0 mx-auto">
                <a href="#"><img src="./logo.svg" alt="logo" className="w-36" /></a>
                <div>
                    <ul className="justify-between hidden gap-24 font-bold transition duration-700 ease-in-out lg:flex">

                        <li className="flex items-center hover:scale-105 transition duration-700 ease-in-out hover:text-[#CB5050]" ><div className="mr-1 rect__nav"></div><a href="">HOME</a></li>
                        <li className="hover:scale-105 transition duration-700 ease-in-out hover:text-[#CB5050]"><a href="./about.html">ABOUT</a></li>
                        <li className="hover:scale-105 transition duration-700 ease-in-out hover:text-[#CB5050]"><a href="./services.html">SERVICES</a></li>
                        <li className="hover:scale-105 transition duration-700 ease-in-out hover:text-[#CB5050]"><a href="">CONTACT US</a></li>
                    </ul>
                </div>
                {/* <!-- MOBILE MENU-- > */}
                <div className="flex items-center mr-4 md:hidden">
                    <button className="outline-none mobile-menu__button">
                        <svg
                            className="w-8 h-8 text-[#CB5050]"
                            x-show="!showMenu"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className="absolute hidden w-full bg-white mobile-menu mt-72">
                    <ul className="">
                        <li className="active"><a href="./index.html" className="block text-sm px-2 py-4 text-white bg-[#CB5050] font-semibold">HOME</a></li>
                        <li><a href="#" className="block text-sm px-2 py-4 hover:bg-[#CB5050] transition duration-300">ABOUT</a></li>
                        <li><a href="./services.html" className="block text-sm px-2 py-4 hover:bg-[#CB5050] transition duration-300">SERVICES</a></li>
                        <li>
                            <a href="#contact" className="block text-sm px-2 py-4 hover:bg-[#CB5050] transition duration-300">CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </nav >

            {/* < !--END MENU-- > */}
        </div>
    )
}

export default Nav