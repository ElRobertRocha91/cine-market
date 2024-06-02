import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1 class-name="text-sky-400">Esta es la página de inicio</h1>
            <div className="flex flex-col">
                <Link to="/about">Haz click para ver el componente About</Link>
            </div>
        </div>
    )
}

export default Home;