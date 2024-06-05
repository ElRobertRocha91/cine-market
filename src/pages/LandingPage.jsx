import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="bg-landing-page bg-cover bg-center h-screen flex items-center justify-center">
            <div className="border-4 border-white rounded-lg shadow-lg bg-black bg-opacity-60 p-8">
                <div className="text-center">
                    <h1 className="text-white text-5xl font-bold mb-4">Welcome a</h1>
                    <h1 className="text-white text-5xl font-bold mb-8">CINEMARKET</h1>
                    <Link to="/home"
                        className="text-white text-2xl bg-red-600 py-2 px-2 rounded-md hover:bg-red-900 transition duration-300">
                        ENTER
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;