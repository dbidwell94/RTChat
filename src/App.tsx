import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Messenger from './sections/Messenger';
import NotFound from './sections/NotFound';
import Peer, { DataConnection } from 'peerjs';
import io from 'socket.io-client';

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background1};
  display: flex;
  flex-direction: column;
`;

export default function App() {
  const peerObject = useRef<Peer | null>(null);

  const [pendingConnections, setPendingConnections] = useState<string[]>([]);

  const [establishedConnections, setEstablishedConnections] = useState<DataConnection[]>([]);

  useEffect(() => {
    const connection = io('ws://192.168.50.128:2021');

    connection.on('connected', (data: { userId: string }) => {
      peerObject.current = new Peer(data.userId, { debug: 3 });
    });
  }, []);

  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route path='/messenger'>
            <Messenger connections={establishedConnections} />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
}
