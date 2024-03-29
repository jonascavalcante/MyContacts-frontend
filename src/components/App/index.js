import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Container } from './styles';

import GlobalStyle from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import ToastContainer from '../Toast/ToastContainer';

import Header from '../Header';
import Routes from '../../Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <ToastContainer />

        <Container>
          <Header />
          <Routes />
        </Container>

      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
