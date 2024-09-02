import png1 from '../assets/png1.svg'
import png2 from '../assets/png2.svg'
import png3 from '../assets/png3.svg'
import png4 from '../assets/png4.svg'
import png5 from '../assets/png5.svg'
import png6 from '../assets/png6.svg'

function Tools() {

    const cardData = [
        {
            id: 1,
            img: png1,
            title: "Real-time, accurate <br/> production estimates.",
        },
        {
            id: 2,
            img: png2,
            title: "Minimal training time for <br/> new sales representatives.",
        },
        {
            id: 3,
            img: png3,
            title: "Homeowner-focused <br/> proposal design for clarity.",
        },
        {
            id: 4,
            img: png4,
            title: "Customizable solar sales <br/> tools for each representative.",
        },
        {
            id: 5,
            img: png5,
            title: "Quick and accurate <br/> solar sales proposals.",
        },
        {
            id: 6,
            img: png6,
            title: "Smart management features for <br/> effective team coordination.",
        },
        
    ]

    return (
        <>
            <section className="body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-7xl font-bold mb-6 text-white">
                            <span className="text-orange-600">SOLAR </span>
                            SAVER TOOLS
                        </h1>
                        <p className="lg:w-2/3 text-xl mx-auto text-white leading-relaxed tracking-wide text-base">
                        There are many variations of Solar Saver tools available, but the majority have suffered alteration in some form.
                        </p>
                    </div>
                    <div className="lg:w-11/12 mx-auto flex flex-wrap justify-center gap-4 -m-4">
                        {
                            cardData.map((item) => (
                                <div key={item.id} className="p-8 bg-[#1a1714] rounded-3xl md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-full flex items-center justify-center h-20 w-20 bg-orange-600">
                                        <img alt="content" className="h-10 w-10" src={item.img} />
                                    </div>
                                    <h2 className="text-sm font-bold title-font text-white mt-5" dangerouslySetInnerHTML={{ __html: item.title }} />
                                </div>
                            ))
                        }
                        
                        
                    </div>
                </div>
            </section>

        </>
    )
}

export default Tools