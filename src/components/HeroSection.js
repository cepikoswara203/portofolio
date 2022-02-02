import Button from "./Button";
import Navbar from "./Navbar";

function HeroSection () {
    return (
        <div className="bg-indigo-600 h-[550px]">
            <div className="container mx-auto">
                <Navbar />
                <div className="text-center mt-16">
                    <h1 className="text-text-white font-semibold"></h1>
                    <p className="text-lg text-whitetext-opacity-60"></p>
                    <Button variant="fill-yellow">Know Me</Button>3xl  
                </div>

            </div>
        </div>
    )
}

export default HeroSection;