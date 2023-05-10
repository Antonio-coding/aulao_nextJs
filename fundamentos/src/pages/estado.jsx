import { useState } from "react";
import Layout from "@/components/Layout";

export default function estado() {
const [numero, setNumero] = useState(0) // React hooks

  function incrementar() {
    setNumero(numero + 1)
  }

  return (
    <Layout titulo="Componente com Estado">
      <div>{numero}</div>
      <button onClick={incrementar}>Imcrementar</button>
    </Layout>
  )
}
