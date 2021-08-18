import styled from 'styled-components';
import Input from './Input';

const ChatContainer = styled.div<{ sidebarOpened?: boolean }>`
  display: grid;
  position: unset;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(6, 1fr);
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.colors.background1};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100vw;
    &.mobile-sidebar-opened {
      position: fixed;
      transform: translate(90vw, 0rem);
    }
  }
`;

interface IChatProps {
  mobileSidebarOpened?: boolean;
}

export default function Chat(props: IChatProps) {
  const { mobileSidebarOpened } = props;

  return (
    <ChatContainer sidebarOpened={mobileSidebarOpened} className={mobileSidebarOpened ? 'mobile-sidebar-opened' : ''}>
      <Input />
    </ChatContainer>
  );
}
