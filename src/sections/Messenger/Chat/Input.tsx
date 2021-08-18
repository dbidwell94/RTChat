import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-row: 10 / 11;
  grid-column: 2 / 6;
  textarea {
    padding: 1rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.highlightGrey};
    border: thin solid ${({ theme }) => theme.colors.highlightBlue};
    width: 80%;
    height: 5rem;
    resize: none;
    border-radius: 0.5rem;
    &:active,
    &:focus {
      outline: none;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.5rem 1rem;
    grid-column: 1 / 7;
  }
`;

export default function Input() {
  return (
    <InputContainer>
      <textarea />
    </InputContainer>
  );
}
