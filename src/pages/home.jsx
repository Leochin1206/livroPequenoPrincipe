import livro from "../images/livro.jpg"

export function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center p-3 bg-white shadow w-[75%] mt-5 z-50">
        <h1 className="font-bold text-center text-[16px] text-[#1e3a8a] mt-2">Descubra a Magia de O Pequeno Príncipe</h1>
        <p className=" font-light text-justify w-[95%] mt-2">O Pequeno Príncipe” é uma obra atemporal escrita por Antoine de Saint-Exupéry. Através da simplicidade de um menino vindo de outro planeta, somos conduzidos por uma jornada sensível e poética, onde cada encontro revela lições sobre a natureza humana. O livro mistura fantasia e filosofia de forma sutil, despertando a curiosidade e o olhar puro da infância.</p>
      </div>
      <img src={livro} alt="capa do Livro" className="h-auto w-[15%] mt-5" />
      <div className="flex flex-col items-center justify-center p-3 bg-white shadow w-[75%] mt-3 z-50">
        <p className="font-light text-justify w-[95%]">Mais do que um livro infantil, trata-se de uma fábula profunda que encanta leitores de todas as idades. Temas como amizade, amor, solidão e o verdadeiro valor das relações são explorados com delicadeza, nos lembrando de que o essencial é invisível aos olhos — e que é preciso reaprender a ver com o coração.</p>
      </div>

      <h1 className="text-[#1e3a8a] text-[30px] font-bold text-center mt-10">"Tu te tornas eternamente responsável por aquilo que cativas."</h1>

      <div className="flex items-center justify-center flex-col mt-7 w-full h-100 mb-10 relative">
        <div className="w-[25%] p-4 text-center shadow-lg bg-white absolute left-1/3 top-0 z-10">
          <p className="font-semibold text-[#1e3a8a]">“Foi o tempo que dedicaste à tua rosa que a fez tão importante.”</p>
          <p className="font-light text-[#facc15] mt-2">– Uma bela reflexão sobre afeto, cuidado e valor emocional.</p>
        </div>
        <div className="w-[25%] p-4 text-center shadow-lg bg-white absolute right-1/4 top-28 z-11">
          <p className="font-semibold text-[#1e3a8a]">“Todas as pessoas grandes foram um dia crianças — mas poucas se lembram disso.”</p>
          <p className="font-light text-[#facc15] mt-2">– Um lembrete delicado sobre crescer sem perder a essência.</p>
        </div>
        <div className="w-[22%] p-4 text-center shadow-lg bg-white absolute left-1/3 top-53 z-10">
          <p className="font-semibold text-[#1e3a8a]">“É preciso exigir de cada um o que cada um pode dar.”</p>
          <p className="font-light text-[#facc15] mt-2">– Uma frase sensível sobre empatia e respeito às diferenças.</p>
        </div>
      </div>
    </main>
  );
}
