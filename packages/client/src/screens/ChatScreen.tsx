import React from 'react';

interface ChatScreenProps {}

export const ChatScreen: React.FC<ChatScreenProps> = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      Chat screens
    </div>
  );
};
