import './estilo.css'
import Logo from '../logo/index'
import Opcoes from '../opcoes/index'
import Iconess from '../icones/index'

function Headerr(){
    return(
        <header className="App-header">
            <Logo/>
            <Opcoes></Opcoes>
            <Iconess></Iconess>
        </header>
    )
}

export default Headerr;