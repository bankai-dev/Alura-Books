import Headerr from './componentes/header/index.js'
import styled from 'styled-components'
import Pesquisa from './componentes/pesquisa/index.js';
import UltimosLancamentos from './componentes/UltimosLancamentos/index.js';

// eslint-disable-next-line no-lone-blocks
{/*Para utilizar a crase, é necessário precionar ALT + 096 */ }
const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%,#326589 100%);

    li {
      list-style: none;
    }
`

function App() {
  return (
    <AppContainer>
      <Headerr />
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;
