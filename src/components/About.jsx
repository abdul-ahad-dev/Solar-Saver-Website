import aboutIMG from '../assets/about-img.webp'

function About() {
    return (
        <>
            <div className="about-main">
                <div className="container lg:w-11/12 mx-auto py-20 flex items-center flex-wrap">
                    <div
                        className="content md:w-1/2"
                    >
                        <h4 className="text-orange-600 font-medium text-xl pb-4">About us</h4>
                        <h3 className="font-bold text-white text-7xl">SOLAR SAVER</h3>
                        <p className="text-[#918f8d] text-xl capitalize py-7 leading-normal">
                            Solar Saver is revolutionizing the solar industry by offering the most
                            cost-effective solar solutions in America. We specialize in providing
                            transparent, instant pricing for solar installations. With an innovative
                            AI quoting engine, they ensure personalized and accurate estimates for
                            each customer.
                        </p>
                        <p className="text-orange-600 text-xl capitalize leading-normal">
                            Solar Saver also offers innovative battery solutions and flexible
                            financing options, making solar energy more accessible and affordable.
                        </p>
                    </div>
                    <div className="image-box md:w-1/2">
                        <img
                            src={aboutIMG}
                            alt="solar panels"
                            className="solar-img"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default About