import autor from "../images/autor.png";
import autorFoto1 from "../images/autorFoto1.jpg"
import autorFoto2 from "../images/autorFoto2.jpg"

export function Autor() {

    const livros = [
        {
            id: 1,
            titulo: "O Aviador - 1926",
            link: "https://m.media-amazon.com/images/I/81LKAmBV8dL._UF894,1000_QL80_.jpg"
        },
        {
            id: 2,
            titulo: "Correio do Sul - 1929",
            link: "https://m.media-amazon.com/images/I/613Pa7rAHIL._UF1000,1000_QL80_.jpg"
        },
        {
            id: 3,
            titulo: "Voo Noturno - 1931",
            link: "https://m.media-amazon.com/images/I/7143ia8jS7L._UF894,1000_QL80_.jpg"
        },
        {
            id: 4,
            titulo: "Terra dos Homens - 1939",
            link: "https://m.media-amazon.com/images/I/61RVVpYHefL._UF1000,1000_QL80_.jpg"
        },
        {
            id: 5,
            titulo: "Carta a um Refém - 1943",
            link: "https://m.media-amazon.com/images/I/81X9MHCaIFL._UF894,1000_QL80_.jpg"
        },
        {
            id: 6,
            titulo: "Cidadela - 1948",
            link: "https://m.media-amazon.com/images/I/61lA-hCINLL._UF1000,1000_QL80_.jpg"
        },
        {
            id: 7,
            titulo: "Escritos de Guerra - 1982",
            link: "https://m.media-amazon.com/images/I/715rmKusuQL.jpg"
        },
        {
            id: 8,
            titulo: "Cartas à sua mãe - 1955",
            link: "https://m.media-amazon.com/images/I/61I5elbd0mL._UF1000,1000_QL80_.jpg"
        }
    ];

    return (
        <main className="flex flex-col items-center">
            <div className="absolute flex flex-col items-center justify-center top-[22%] z-50">
                <img src={autor} alt="" className="rounded-full w-30 h-30 shadow" />
                <h1 className="font-bold text-center text-[18px] text-[#1e3a8a] mt-2">Antoine de Saint-Exupéry</h1>
            </div>

            <p className=" text-justify w-[90%] pt-30">Antoine de Saint-Exupéry foi um escritor, ilustrador e piloto francês, nascido em 29 de junho de 1900. Sua vida foi marcada pela paixão pela aviação e pela escrita, duas áreas que ele conseguiu unir de forma única em suas obras. Mais do que um simples autor, Saint-Exupéry era um verdadeiro observador da natureza humana — alguém que enxergava poesia até nas coisas mais simples, como uma flor, uma estrela ou uma amizade.</p>

            <div className="flex flex-col items-start mt-7">
                <img src={autorFoto1} alt="" className="h-auto w-[50%] ml-14" />
                <img src={autorFoto2} alt="" className="h-auto w-[50%] absolute ml-45 mt-46" />
            </div>

            <p className=" text-justify w-[90%] pt-27">Ele escreveu O Pequeno Príncipe durante o exílio nos Estados Unidos, em 1943, em meio à Segunda Guerra Mundial. Apesar de ser considerado um livro infantil, a obra carrega mensagens profundas sobre amor, solidão, perda e a importância de enxergar com o coração — uma marca do estilo sensível e filosófico de Saint-Exupéry. Saint-Exupéry desapareceu misteriosamente durante um voo de reconhecimento em 1944. Seu avião só foi encontrado décadas depois, no mar Mediterrâneo. Mesmo assim, seu legado vive por meio de suas palavras, que continuam encantando leitores de todas as idades ao redor do mundo.</p>

            <h1 className="font-bold text-center text-[18px] text-[#1e3a8a] mt-7">Alguns de Seus livros</h1>

            <div className="grid grid-cols-2 place-items-center mt-5">
                {livros.map((livro, index) => (
                    <div key={livro.id} className="flex flex-col items-center justify-center mb-5">
                        <img src={livro.link} alt="" className="w-auto h-50" />
                        <h1 className="mt-2 text-center text-[#1e3a8a] font-light">{livro.titulo}</h1>
                    </div>
                ))}
            </div>
        </main>
    );
}