import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  div {
    width: 50vw;
    height: 50vh;
    background: ${({ theme }) => theme.colors.highlightBlack};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 1.5rem;
    box-shadow: 0rem 0rem 1rem 0rem ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.textColor1};
    text-align: center;
    padding: 1rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 95vw;
    }
  }
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <div>
        <h2>Woah there!</h2>
        <p>The page you are looking for is not found. Please try again.</p>
      </div>
    </NotFoundContainer>
  );
}
