import Logo from '../logo/index'
import Opcoes from '../opcoes/index'
import Iconess from '../icones/index'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    display: flex;
    background-color: #fff;
    justify-content: center;
`


function Headerr(){
    return(
        <HeaderContainer>
            <Logo/>
            <Opcoes></Opcoes>
            <Iconess></Iconess>
        </HeaderContainer>
    )
}

export default Headerr;