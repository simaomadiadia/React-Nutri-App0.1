
import { useState, useEffect } from "react"
import "./style.css"
//propriedades
//https://sujeitoprogramador.com/rn-api/?api=posts
function App() {
  const [nutri, setNutri] = useState([]);
  useEffect(() => {
    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      fetch(url)
        .then((result) => result.json())
        .then((json) => {
          setNutri(json)
          //console.log(json)
        })
    }
    loadApi();
  }, []);
  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return (
          <>
            <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa}></img>
            <p className="subtititulo">
              {item.subtitulo}
            </p>
            <a className="botao">Acessar</a>
            </article>

          </>
        )
      })}

    </div>
  );
}

export default App;
