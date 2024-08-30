import cover from '../assets/cover.webp'

function Hero() {
    return (
        <>
            <section className="body-font">
                <div className="lg:w-11/12 mx-auto text-white flex py-24 items-center justify-center flex-col">
                    <div className="text-center">
                        <h1 className="text-6xl uppercase px-20 mb-4 font-bold ">
                            <span className="text-orange-600">Does Your Home </span>
                            Need Quality Solar Panel Installation?
                        </h1>
                        <p className="mb-8 text-lg font-light leading-relaxed">
                            Trust our experienced solar power experts to customize the perfect solution for your home.
                        </p>
                        <div className="flex justify-center">
                            <button className="items-center bg-orange-500 text-white border-0 py-2 px-6 rounded-xl text-base focus:outline-none hover:bg-white hover:text-orange-600">
                                Calculator Solar
                            </button>
                        </div>
                    </div>
                    <img
                        className=" mb-10 object-cover object-center rounded"
                        alt="hero"
                        src={cover}
                    />
                </div>
                <h3></h3>
            </section>

        </>
    )
}

export default Hero