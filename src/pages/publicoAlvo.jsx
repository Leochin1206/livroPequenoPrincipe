export function PublicoAlvo() {

    const publico = [
        {
            id: 1,
            titulo: "👥 Público-Alvo de O Pequeno Príncipe",
            desc: "O Pequeno Príncipe é um livro único: apesar de parecer uma história infantil, ele fala diretamente ao coração de crianças, jovens e adultos. Seu público-alvo é amplo e diverso, porque a obra trata de sentimentos, valores e reflexões universais — como amizade, amor, saudade e o sentido da vida."
        },
        {
            id: 2,
            titulo: "🧒 Crianças",
            desc: "As crianças se encantam com a história simples, os personagens curiosos e os desenhos feitos pelo próprio autor. Para elas, O Pequeno Príncipe é uma aventura em planetas distantes, cheia de descobertas e ensinamentos leves."
        },
        {
            id: 3,
            titulo: "🧑‍🎓 Jovens e estudantes",
            desc: "Adolescentes e estudantes se identificam com as mensagens sobre crescimento, identidade, responsabilidade e sonhos. A obra é frequentemente usada em escolas por incentivar a leitura crítica, emocional e filosófica."
        },
        {
            id: 4,
            titulo: "👩‍🦳 Adultos",
            desc: "Os adultos encontram no livro uma profunda reflexão sobre a vida, o tempo e a importância de ver o mundo com os olhos do coração. Muitas vezes, leem o livro mais de uma vez ao longo da vida e sempre descobrem algo novo."
        },
        {
            id: 5,
            titulo: "✨ Em resumo",
            desc: "O Pequeno Príncipe é para todos, ele fala com a criança que existe dentro de cada pessoa, seja qual for sua idade. Por isso, é considerado um dos livros mais traduzidos e amados do mundo."
        },
    ];

    return (
        <main className="flex flex-wrap gap-15 items-start justify-center mb-5">
            {publico.map((publico, index) => (
                <div key={publico.id} className="flex flex-col items-center justify-center w-[33%] mt-5">
                    <h1 className="font-bold text-center text-[#1e3a8a]">{publico.titulo}</h1>
                    <p className="text-justify mt-2">{publico.desc}</p>
                </div>
            ))}
        </main>
    );
}