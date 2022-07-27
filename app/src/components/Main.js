const Main = (props) => {
    return(
        <>
            <main className="main">
                <p>Hola Mundo. Este sitio fue creado por: <span id="nombre">{props.nombre}</span></p>
            </main>
        </>
    )
}
export default Main;