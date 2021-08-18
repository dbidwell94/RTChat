import { DataConnection } from 'peerjs';
import React, { useState } from 'react';
import styled from 'styled-components';
import Chat from './Chat';
import Sidebar from './Sidebar';

const MessengerContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
  }
`;

interface IMessengerProps {
  connections: DataConnection[];
}

export default function Messenger(props: IMessengerProps) {
  const { connections } = props;

  const [mobileSidebarOpened, setMobileSidebarOpened] = useState(false);

  return (
    <MessengerContainer>
      <Sidebar
        connections={connections}
        setMobileSidebarOpened={setMobileSidebarOpened}
        mobileSidebarOpened={mobileSidebarOpened}
      />
      <Chat mobileSidebarOpened={mobileSidebarOpened} />
    </MessengerContainer>
  );
}
