import logo from '../assets/logo.png'

function Header() {
    return (
        <header className="container body-font">
            <div className="lg:w-11/12 h-16 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <a className="flex h-full title-font font-medium items-center mb-4 md:mb-0">
                    <img src={logo} className="h-full" alt="" />
                </a>
                <nav className="md:ml-auto md:mr-auto text-white flex flex-wrap items-center gap-4 text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">Pricing</a>
                    <a className="mr-5 hover:text-gray-900">About</a>
                    <a className="mr-5 hover:text-gray-900">Tools</a>
                    <a className="mr-5 hover:text-gray-900">How It Works</a>
                    <a className="mr-5 hover:text-gray-900">Testimonials</a>
                    <a className="mr-5 hover:text-gray-900">FAQ</a>
                </nav>
                <button className="items-center bg-orange-500 text-white border-0 py-2 px-6 rounded-xl text-base focus:outline-none hover:bg-white hover:text-orange-600 mt-3 md:mt-0">
                    Calculate Solar
                </button>
            </div>
        </header>
    )
}

export default Header