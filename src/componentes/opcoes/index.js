import './estilo.css'

function Opcoes() {
    const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
    return (
        <ul className="opcoes">
            {/*Função map: Itera sobre cada elemento de uma lista, e os retorna 1 por 1 */}
            {textoOpcoes.map((opcao) => (
                <li className="opcao"><p>{opcao}</p></li>
            ))}
        </ul>
    )
}

export default Opcoes;