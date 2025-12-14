import "../index.css"

function About() {
    return <div id="about" className="w-full m-auto text-center flex-col about">
        <h1>Nossa história</h1>
        <div className="grid grid-cols-2">
            <li>
                <img src="/assets/about.jpg" alt="" />
            </li>
            <h2>xLanches  <p>O <span>xLanches</span> nasceu do sonho de transformar momentos simples em experiências saborosas. Tudo começou em uma pequena cozinha, onde a paixão por lanches bem preparados e ingredientes de qualidade reunia amigos e familiares ao redor da mesa. Com o tempo, o que era apenas uma ideia ganhou forma, conquistando clientes pelo sabor marcante, pelo atendimento acolhedor e pelo cuidado em cada detalhe. Hoje, o xLanches é sinônimo de qualidade, tradição e inovação, mantendo a essência de quem acredita que um bom lanche vai muito além da fome: ele cria histórias, conexões e bons momentos.</p></h2>
        </div>
    </div>
}

export default About