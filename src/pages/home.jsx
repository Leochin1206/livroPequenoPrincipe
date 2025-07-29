import bg from "../images/bg.png";

export function Home() {
    return (
        <main>
            <div className="relative w-full h-screen overflow-hidden"> 
                <div className="absolute top-0 left-0 w-full h-[455px] bg-blue-800 opacity-40"></div> 
                <img src={bg} alt="" className="w-full object-cover" /> 
            </div>
        </main>
    );
}