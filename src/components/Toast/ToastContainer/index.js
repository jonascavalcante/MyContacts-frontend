import { useState } from 'react';
import { Container } from './styles';

import ToastMessage from '../ToastMessage';

export default function ToastContainer() {
  const [messages] = useState([
    { id: Math.random(), type: 'default', text: 'Default toast' },
    { id: Math.random(), type: 'danger', text: 'danger toast' },
    { id: Math.random(), type: 'success', text: 'success toast' },
  ]);

  return (
    <Container>
      {messages.map(({ id, type, text }) => (
        <ToastMessage key={id} text={text} type={type} />
      ))}
    </Container>
  );
}
