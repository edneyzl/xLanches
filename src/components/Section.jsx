import "../index.css"

function Section() {
    return (
        <section id="inicio" className="w-full h-175 fundo flex columns-2">
            <div className="flex-col items-center align-cente m-auto">
                <h1 className="titulo">O melhor <span>LANCHE</span> da região.</h1>

                <p className="subtitulo">Venha experimentar os melhores lanches da cidade, feitos com ingredientes frescos e muito sabor!</p>

                <button className="botao">Ver Cardápio</button>
                <button className="botao-outline">Chama no Whats</button>

            </div> 

            <div className="w-150 h-140 m-auto mr-4">
                <img className="logo-section"src="/assets/section.png" alt="" srcset="" />
            </div>


        </section>
    )
}

export default Section