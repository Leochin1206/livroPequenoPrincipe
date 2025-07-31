import { useState, useEffect } from "react";
import img1 from "../images/colega/1.png";
import img2 from "../images/colega/2.png";
import img3 from "../images/colega/3.png";
import img4 from "../images/colega/4.png";
import img5 from "../images/colega/5.png";
import img6 from "../images/colega/6.png";
import img7 from "../images/colega/7.png";
import img8 from "../images/colega/8.png";
import img9 from "../images/colega/9.png";
import img10 from "../images/colega/10.png";
import img11 from "../images/colega/11.png";
import img12 from "../images/colega/12.png";

export function Colega() {

    const images = [
        {
            id: 1,
            img: img1
        },
        {
            id: 2,
            img: img2
        },
        {
            id: 3,
            img: img3
        },
        {
            id: 4,
            img: img4
        },
        {
            id: 5,
            img: img5
        },
        {
            id: 6,
            img: img6
        },
        {
            id: 7,
            img: img7
        },
        {
            id: 8,
            img: img8
        },
        {
            id: 9,
            img: img9
        },
        {
            id: 10,
            img: img10
        },
        {
            id: 11,
            img: img11
        },
        {
            id: 12,
            img: img12
        },
    ];

    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => { setStartIndex((prevIndex) => (prevIndex + 9) % images.length); }, 1000);

        return () => clearInterval(interval);
    }, [images.length]);

    const displayedImages = [
        ...images,
        ...images,
    ].slice(startIndex, startIndex + 9);

    return (
        <main className="flex flex-col items-center justify-center">

            <h1 className="mt-10 font-bold text-4xl text-[#1e3a8a]">Aninha do Grau</h1>

            <div className="flex items-center justify-center mt-5">
                <div className="p-4 shadow w-[20%] flex flex-col gap-5 text-center">
                    <p>Numa noite estrelada, Aninha do Grau estava empinando sua moto na subida do morro da Estrela Cadente quando, do nada, um clarão cortou o céu. PÁ! Do meio da poeira e do cheiro de gasolina, apareceu... um menino loiro, de cachecol voando, segurando uma flor num pote.</p>
                    <p>— "Oi, eu sou o Pequeno Príncipe."</p>
                    <p>Aninha olhou, freou no grau (porque ela freia no grau, claro), e respondeu:</p>
                    <p>— "Suave, príncipe. Mas tu é de onde? De alguma quebrada intergaláctica?"</p>
                    <p>O Pequeno Príncipe explicou que vinha de um asteroide chamado B-612, onde ele cuidava de uma rosa cheia de opinião e brigava com baobás. Aninha, achando que baobá era nome de motoclube rival, já ficou em alerta. Mas aí rolou uma conexão. Ele falava de ver com o coração, ela falava de sentir o grau na alma. Ele queria entender os adultos, ela queria que os adultos entendessem que empinar é arte.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 p-4 w-[50%]">
                    {displayedImages.map((img) => (
                        <div key={img.id}>
                            <img src={img.img} alt={`Imagem ${img.id}`} className="w-55 h-55" />
                        </div>
                    ))}
                </div>

                <div className="p-4 shadow w-[20%] flex flex-col gap-5 text-center">
                    <p>Então Aninha resolveu ensinar o menino a empinar. Colocou o Príncipe na garupa e disse:</p>
                    <p>— "Segura firme no guidão da vida, meu chapa."</p>
                    <p>E lá foram os dois, cortando vento pelas ruas e pelas galáxias. Passaram por planetas esquisitos: um onde o rei mandava sem súditos, outro onde um bêbado bebia pra esquecer que bebia, e um cheio de placas de “proibido grau”.</p>
                    <p>Cada parada, Aninha largava uma frase de sabedoria:</p>
                    <p>— "O essencial é invisível aos olhos… mas o grau, meu parceiro, é visível demais!"</p>
                    <p>Depois de muitas aventuras, o Pequeno Príncipe entendeu que, às vezes, a gente não precisa procurar sentido nas estrelas — só precisa de gasolina, equilíbrio e alguém que empine com o coração.</p>
                    <p>E assim nasceu o livro proibido nas escolas:</p>
                    <p>"O Pequeno Príncipe e a Garota do Grau"</p>
                    <p> — agora adaptado em filme com direção de Vin Diesel e narração do Mítico Jovem.</p>
                </div>
            </div >
        </main >
    );
}