import homePNG from '../assets/home-png.svg'

function Pricing() {
    return (
        <>
            <section className="body-font">
                <div className="lg:w-11/12 mx-auto text-white">
                    <h1 className="text-4xl mb-8 text-center font-medium">
                        TRANSPARENT PRICING
                    </h1>
                    <div className="w-full mx-auto flex flex-wrap justify-center gap-6 px-4">

                        <div className="lg:w-[30%] md:w-[48%] px-6 py-8 bg-[#1a1714] rounded-2xl">
                            <div className="bg-orange-600 w-20 h-20 mb-5 flex items-center justify-center rounded-full">
                                <img
                                    className="w-10 h-10"
                                    src={homePNG} />
                            </div>
                            <a href="#">
                                <h5 className="my-3 py-2 text-3xl font-bold ">
                                    <span className="text-orange-600">STANDARD </span>
                                    PLAN
                                </h5>
                            </a>
                            <p className="mb-3 text-xl font-normal text-white">
                                Efficient and affordable solar solutions for every Household. Perfect for Residential use.
                            </p>
                            <h5 className="text-lg font-bold mt-6">
                                $1.50 / watt
                            </h5>
                            <button className="items-center mt-5 bg-orange-500 text-white border-0 py-2 px-6 rounded-xl text-base focus:outline-none hover:bg-white hover:text-orange-600">
                                Calculator Solar
                            </button>
                        </div>

                        <div className="lg:w-[30%] md:w-[48%] px-6 py-8 bg-[#1a1714] rounded-2xl">
                            <div className="bg-orange-600 w-20 h-20 mb-5 flex items-center justify-center rounded-full">
                                <img
                                    className="w-10 h-10"
                                    src={homePNG} />
                            </div>
                            <a href="#">
                                <h5 className="my-3 py-2 text-3xl font-bold ">
                                    <span className="text-orange-600">PREMIUM </span>
                                    PLAN
                                </h5>
                            </a>
                            <p className="mb-3 text-xl font-normal text-white">
                                Advanced solar technology designed for maximum energy savings. Ideal for larger Homes and Estates.                            </p>
                            <h5 className="text-lg font-bold mt-6">
                                $1.75 / watt
                            </h5>
                            <button className="items-center mt-5 bg-orange-500 text-white border-0 py-2 px-6 rounded-xl text-base focus:outline-none hover:bg-white hover:text-orange-600">
                                Calculator Solar
                            </button>
                        </div>

                        <div className="lg:w-[30%] md:w-[48%] px-6 py-8 bg-[#1a1714] rounded-2xl">
                            <div className="bg-orange-600 w-20 h-20 mb-5 flex items-center justify-center rounded-full">
                                <img
                                    className="w-10 h-10"
                                    src={homePNG} />
                            </div>
                            <a href="#">
                                <h5 className="my-3 py-2 text-3xl font-bold ">
                                    <span className="text-orange-600">COMMERCIAL </span>
                                    PLAN
                                </h5>
                            </a>
                            <p className="mb-3 text-xl font-normal text-white">
                                High-capacity solar systems tailored for Businesses and Enterprises. Reliable and Robust solutions.                            </p>
                            <h5 className="text-lg font-bold mt-6">
                                $2.00 / watt
                            </h5>
                            <button className="items-center mt-5 bg-orange-500 text-white border-0 py-2 px-6 rounded-xl text-base focus:outline-none hover:bg-white hover:text-orange-600">
                                Calculator Solar
                            </button>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing