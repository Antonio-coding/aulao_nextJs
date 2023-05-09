import Layout from '../components/Layout'
import Cabecalho from '../components/Cabecalho' 

export default function Exemplo () {
    return (
        <Layout titulo="Exemplos de dividir o cabecalho usando componentes">
            <Cabecalho titulo="Next.Js é com React é massa"/>
            <Cabecalho titulo="Aprender é massa continuie"/>
        </Layout> 
       
    )
}