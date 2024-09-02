function Utilization() {
    return (
        <>
            <div className="container lg:w-11/12 mx-auto py-16 flex flex-wrap text-white">
                <div className="md:w-1/2">
                    <div
                        className="bg-yellow-700 w-11/12 text-right py-6 pr-11 mb-8"
                    >
                        <h4 className="text-2xl font-bold uppercase mb-2">System Size</h4>
                        <p className="text-sm font-semibold uppercase">9.5 - 14.13 kWh*</p>
                    </div>
                    <div
                        className="bg-yellow-700 w-8/12 text-right py-6 pr-11 mb-8"
                    >
                        <h4 className="text-2xl font-bold uppercase mb-2">Solar Panels</h4>
                        <p className="text-sm font-semibold uppercase">34 - 43*</p>
                    </div>
                    <div
                        className="bg-yellow-700 w-5/12 text-right py-6 pr-11"
                    >
                        <h4 className="text-2xl font-bold uppercase mb-2">CO2 Offset</h4>
                        <p className="text-sm font-semibold uppercase">7.65 - 9.07*</p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-7xl uppercase font-bold my-6">
                        <span className="text-orange-600">AI</span> Utilization
                    </h2>
                    <p className="text-gray-500 capitalize leading-relaxed mb-6"> 
                        Solar Saver utilizes an AI quoting engine to estimate the ideal solar
                        system size for a customers specific needs. This system calculates the
                        number of solar panels required, the potential CO2 offset, and the new,
                        likely reduced monthly power bill. <br />
                        <br /> By analyzing various factors such as roof size, local sun exposure,
                        and current electricity usage, the AI provides atailored solution.
                    </p>
                    <p className="text-orange-600 capitalize leading-relaxed">
                        This approach ensures customers get a system that maximizes energy
                        efficiency and cost savings while contributing to environmental
                        sustainability.
                    </p>
                </div>
            </div>

        </>
    )
}

export default Utilization