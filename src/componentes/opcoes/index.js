import styled from 'styled-components'

const Opcao = styled.li`
    min-width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    font-size: 16px;

`

const OpcoesUl = styled.ul`
    display: flex;
`

function Opcoes() {
    const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
    return (
        <OpcoesUl>
            {/*Função map: Itera sobre cada elemento de uma lista, e os retorna 1 por 1 */}
            {textoOpcoes.map((opcao) => (
                <Opcao><p>{opcao}</p></Opcao>
            ))}
        </OpcoesUl>
    )
}

export default Opcoes;