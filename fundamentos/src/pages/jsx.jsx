import Layout from "../components/Layout"

export default function Jsx() {
  const a = 48;
  const b = 2;
  console.log(a * b);
  const obj = { nome: "joão", idade: 30 };
  const titulo = <h1>Jsx é um conceito Cetral</h1>;

  function subtitulo() {
    return <h2> {"muito legal mesmo".toUpperCase()} </h2>;
  }
  return (
    <Layout titulo=" Entendo o JSX na pratica ">
      <div>
        {titulo}
        {subtitulo()}
        {a * b}
        <p>{JSON.stringify({ nome: "joão", idade: 30 })}</p>
        <div>{Math.random()}</div>
      </div>
    </Layout>
  );
}
