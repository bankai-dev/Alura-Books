import perfil from '../imagens/perfil.svg'
import sacola from '../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 20px;
    width: 25px;
    margin-left: 40px
`

const Icones = styled.li`
    display: flex;
    align-items: center;
`

function Iconess() {
    const icones = [perfil, sacola]
    return (
        <Icones>
            {/*Função map: Itera sobre cada elemento de uma lista, e os retorna 1 por 1 */}
            {icones.map((icone) => (
                <Icone><img alt='icone' src={icone}></img></Icone>
            ))}
        </Icones>
    )
}

export default Iconess;