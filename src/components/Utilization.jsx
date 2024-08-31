function Utilization() {
    return (
        <>
            <div className="container lg:w-11/12 mx-auto flex flex-wrap text-white">
                <div className="md:w-1/2">
                    <div
                        className="bg-yellow-700 w-11/12 text-right py-6 pr-11"
                    >
                        <h4>System Size</h4>
                        <p>9.5 - 14.13 kWh*</p>
                    </div>
                    <div
                        className="box2 box"
                    >
                        <h4>Solar Panels</h4>
                        <p>34 - 43*</p>
                    </div>
                    <div
                        className="box3 box"
                    >
                        <h4>CO2 Offset</h4>
                        <p>7.65 - 9.07*</p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h2>
                        <span>AI</span> Utilization
                    </h2>
                    <p>
                        Solar Saver utilizes an AI quoting engine to estimate the ideal solar
                        system size for a customer's specific needs. This system calculates the
                        number of solar panels required, the potential CO2 offset, and the new,
                        likely reduced monthly power bill. <br />
                        <br /> By analyzing various factors such as roof size, local sun exposure,
                        and current electricity usage, the AI provides atailored solution.
                    </p>
                    <p>
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