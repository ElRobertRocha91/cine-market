import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <h2 className="font-bold text-sky-900">
                Este es el componente About
            </h2>
            <Link to="/home">volver al Home</Link>
        </div>
    )
}
export default About;