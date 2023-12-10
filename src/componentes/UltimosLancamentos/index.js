import styled from "styled-components"
import { livros } from "./dadosUltimosLancamentos"
import { TituloContainer } from "../titulo"
import CardRecomendacao from "../cardRecomenda"
import livro2 from '../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return(
        <UltimosLancamentosContainer>
            <TituloContainer cor="#EB9B00" tamanhoFonte='36px' alinhamento='center'>Últimos Lançamentos</TituloContainer>
            <NovosLivrosContainer>
            {livros.map ( livro => (
                <img alt='imagem do livro' src={livro.src}/>
            ))}
            </NovosLivrosContainer>
            <CardRecomendacao
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="construindo uma aplicação angular"
                img={livro2}
            />
        </UltimosLancamentosContainer>
    )
}


export default UltimosLancamentos