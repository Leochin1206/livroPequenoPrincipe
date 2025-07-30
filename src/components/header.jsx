import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import menu from "../images/menu.svg";

import bg1 from "../images/bg.png";
import bg2 from "../images/bg2.png";
import bg3 from "../images/bg3.jpg";
import bg4 from "../images/bg4.png";


export function Header() {

    const location = useLocation();
    const dropdownRef = useRef(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        setDropdownOpen(false);
    }, [location]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const backgroundMap = {
        "/": bg1,
        "/autor": bg2,
        "/publicoalvo": bg3,
        "/colega": bg4,
    };

    const currentBg = backgroundMap[location.pathname] || bg1;

    return (
        <header className="relative w-full h-[240px] overflow-hidden z-50">
            <img
                src={currentBg}
                alt="Fundo"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            <Link to="/">
                <img src={logo} alt="Logo" className="absolute left-4 top-4 w-20 h-auto z-10" />
            </Link>

            <div className="absolute right-4 top-4 z-50" ref={dropdownRef}>
                <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <img src={menu} alt="Ícone do Menu" className="w-7 h-auto cursor-pointer" />
                </button>

                {dropdownOpen && (
                    <ul className="absolute right-0 bg-white w-40 shadow-lg z-50">
                        <li><Link to="/" className="block px-4 py-2 hover:bg-gray-200">Home</Link></li>
                        <li><Link to="/autor" className="block px-4 py-2 hover:bg-gray-200">Autor</Link></li>
                        <li><Link to="/publicoalvo" className="block px-4 py-2 hover:bg-gray-200">Público Alvo</Link></li>
                        <li><Link to="/colega" className="block px-4 py-2 hover:bg-gray-200">Colega</Link></li>
                    </ul>
                )}
            </div>
        </header>
    );
}
