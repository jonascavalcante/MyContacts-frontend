import { Link } from 'react-router-dom';

import {
  Card, Container, Header, InputSearchContainer, ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

// import Modal from '../../components/Modal';
// import Loader from '../../components/Loader';

export default function Home() {
  return (
    <Container>

      {/* <Modal danger /> */}
      {/* <Loader /> */}

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">

          <div className="contact-name">
            <strong>Jonas Cavalcante</strong>
            <small>Instagram</small>
          </div>

          <span>jonas@gmail.com</span>
          <span>(87) 99898-9898</span>

        </div>

        <div className="actions">
          <Link to="/edit/1">
            <img src={edit} alt="Edit" />
          </Link>

          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>

    </Container>
  );
}
