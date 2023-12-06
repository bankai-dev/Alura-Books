import './estilo.css'
import perfil from '../imagens/perfil.svg'
import sacola from '../imagens/sacola.svg'

function Iconess() {
    const icones = [perfil, sacola]
    return (
        <ul className='icones'>
            {/*Função map: Itera sobre cada elemento de uma lista, e os retorna 1 por 1 */}
            {icones.map((icone) => (
                <li className='icone'><img alt='icone' src={icone}></img></li>
            ))}
        </ul>
    )
}

export default Iconess;