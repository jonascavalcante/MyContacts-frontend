import { Container } from './styles';

import useHome from './useHome';

import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import InputSearch from './components/InputSearch';
import Header from './components/Header';
import ErrorStatus from './components/ErrorStatus';
import EmptyList from './components/EmptyList';
import SearchNotFound from './components/SearchNotFound';
import ContactsList from './components/ContactsList';

export default function Home() {
  const {
    isLoading,
    isDeleteModalVisible,
    contactBeingDeleted,
    isLoadingDelete,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    contacts,
    handleSearchTerm,
    hasError,
    filteredContacts,
    handleTryAgain,
    searchTerm,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  const hasContacts = (contacts.length > 0);
  const isListEmpty = !hasError && (!isLoading && !hasContacts);
  const isSearchEmpty = !hasError && (hasContacts && (filteredContacts.length < 1));

  return (
    <Container>

      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      )}

      <Header
        hasError={hasError}
        qtyOfContacts={contacts.length}
        qtyOfFilteredContacts={filteredContacts.length}
      />

      {hasError && (<ErrorStatus onTryAgain={handleTryAgain} />)}
      {isListEmpty && (<EmptyList />)}
      {isSearchEmpty && (<SearchNotFound searchTerm={searchTerm} />)}

      {hasContacts && (
        <>
          <ContactsList
            filteredContacts={filteredContacts}
            orderBy={orderBy}
            onToggleOrderBy={handleToggleOrderBy}
            onDeleteContact={handleDeleteContact}
          />

          <Modal
            danger
            visible={isDeleteModalVisible}
            title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"?`}
            isLoading={isLoadingDelete}
            confirmLabel="Deletar"
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
          >
            <p>Esta ação não poderá ser desfeita!</p>
          </Modal>
        </>
      )}

    </Container>
  );
}
