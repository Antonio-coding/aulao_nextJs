import Navegador from "@/components/Navegador";

export default function Inicio() {
  return (
    <div style={{
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap:"wrap",
      height: "100vh",
    }}>
      <Navegador texto="Estiloso"  destino="/estiloso" />
      <Navegador texto="Exemplos" destino="/exemplos" cor = "#9400d3"/>
      <Navegador texto="Jsx" destino="/jsx" cor="crimson"/>
      <Navegador texto="Navegação #01" destino="/navegacao/" cor="green"/>
      <Navegador texto="Navegação #02" destino="/cliente/PE-2/032121" cor="blue"/>
      <Navegador texto="Navegação #3" destino="/estado" cor="pink"/>
   
    </div>
  );
}
