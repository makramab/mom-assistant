import ChatInterface from '../components/ChatInterface';
import { useEffect, useRef, useState } from 'react';

const ChatPage = () => {
  const [initialInput, setInitialInput] = useState<string | undefined>(undefined);
  const hasSetInput = useRef(false);

  useEffect(() => {
    if (hasSetInput.current) return;
    const input = sessionStorage.getItem('chatInput');
    if (input) {
      setInitialInput(input);
      sessionStorage.removeItem('chatInput');
      hasSetInput.current = true;
      console.log('ChatPage: initialInput set from sessionStorage:', input);
    } else {
      setInitialInput('');
      hasSetInput.current = true;
      console.log('ChatPage: initialInput set to empty string');
    }
    // eslint-disable-next-line
  }, []);

  if (initialInput === undefined) {
    console.log('ChatPage: initialInput is still undefined, not rendering ChatInterface');
    return null;
  }
  console.log('ChatPage: rendering ChatInterface with initialInput:', initialInput);

  return (
    <ChatInterface initialInput={initialInput} />
  );
};

export default ChatPage; 