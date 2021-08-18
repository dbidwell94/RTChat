import { DataConnection } from 'peerjs';
import styled from 'styled-components';

interface ISidebarUserViewProps {
  name: string;
}

const UserViewContainer = styled.div`
  transition: 0.125s ease-in-out all;
  width: 80%;
  min-width: 20rem;
  min-height: 5rem;
  background: ${({ theme }) => theme.colors.highlightBlue};
  margin: 1rem 0rem 0rem 0rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0rem 0rem 0rem 0rem black;
  cursor: pointer;
  overflow: hidden;
  &:first-child {
    margin: 2rem 0rem 0rem 0rem;
  }

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.textColor1};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.highlightGreen};
    box-shadow: 0rem 0rem 0.5rem 0rem black;
  }
`;

export default function SidebarUserView(props: ISidebarUserViewProps) {
  return (
    <UserViewContainer>
      <p>{props.name}</p>
    </UserViewContainer>
  );
}
