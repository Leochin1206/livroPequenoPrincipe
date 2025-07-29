import { Link } from "react-router-dom";
import logo from "../images/logo.png"

export function Header() {
    return(
        <header className="absolute flex justify-center top-0 z-50 p-3 w-full">
            <img src={logo} alt="" className="absolute left-0 w-30 h-auto"/>
            <div className="flex items-center justify-center text-white font-extralight gap-20 mt-2">
                <Link to="/" className="border-b border-transparent hover:border-white transition-all">Home</Link>
                <Link to="/autor" className="border-b border-transparent hover:border-white transition-all">Autor</Link>
                <Link to="/colega" className="border-b border-transparent hover:border-white transition-all">Colega</Link>
                <Link to="/publicoalvo" className="border-b border-transparent hover:border-white transition-all">Público Alvo</Link>
            </div>
        </header>
    );
}