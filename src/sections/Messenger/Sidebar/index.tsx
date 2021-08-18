import { DataConnection } from 'peerjs';
import React, { useState } from 'react';
import styled from 'styled-components';
import SidebarUserView from './SidebarUserView';

const SidebarContainer = styled.div`
  grid-column: 1 / 2;
  min-width: 30rem;
  height: auto;
  background: ${({ theme }) => theme.colors.highlightGrey};
  box-shadow: 0rem 0rem 1rem 0rem inset ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    transition: 0.25s ease-in-out all;
    width: 0vw;
    min-width: unset;
    position: relative;
    &.open {
      width: 80vw;
      max-width: 30rem;
    }
  }
`;

const MobileSidebarButton = styled.button<{ currentScrollPos: number }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    transition: background 0.125s ease-in-out, border 0.125s ease-in-out, box-shadow 0.125s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    position: fixed;
    width: 5rem;
    height: 5rem;
    background: ${({ theme }) => theme.colors.highlightGrey};
    top: 0%;
    left: 0%;
    transform: translate(1rem, 1rem);
    box-shadow: 0rem 0rem 0rem 0rem black;

    &:hover {
      background: ${({ theme }) => theme.colors.highlightBlue};
      box-shadow: 0rem 0rem 0.5rem 0rem black;
      &:after {
        border-color: white;
      }
    }

    &:after {
      transition: background 0.125s ease-in-out, border 0.125s ease-in-out;
      content: ' ';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-70%, -50%) rotate(45deg);
      width: 1.5rem;
      height: 1.5rem;
      border-width: 0.25rem 0.25rem 0rem 0rem;
      border-color: black;
      border-style: solid;
    }

    &.open {
      transition: background 0.125s ease-in-out, border 0.125s ease-in-out;
      position: absolute;
      top: 0%;
      left: 100%;
      border-radius: 0rem 0.5rem 0.5rem 0rem;
      transform: rotateY(180deg) translate(100%, calc(${({ currentScrollPos }) => currentScrollPos}px + 1rem));
      background: ${({ theme }) => theme.colors.background1};
      box-shadow: 0rem 0rem 0.5rem 0rem black;
      &:hover {
        background: ${({ theme }) => theme.colors.highlightGrey};
        &:after {
          border-color: ${({ theme }) => theme.colors.black};
        }
      }
    }
  }
`;

interface ISidebarProps {
  connections: DataConnection[];
  setMobileSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
  mobileSidebarOpened?: boolean;
}

export default function Sidebar(props: ISidebarProps) {
  const { setMobileSidebarOpened, mobileSidebarOpened } = props;

  const [currentScrollPos, setCurrentScrollPos] = useState(0);

  const connections = [
    'Devin',
    'Anette',
    'Brett',
    'Carmen',
    'Devin, Brett, Carmen +3 others',
    'Chris',
    'Laura',
    'Devin',
    'Anette',
    'Brett',
    'Carmen',
    'Devin, Brett, Carmen +3 others',
    'Chris',
    'Laura',
    'Devin',
    'Anette',
    'Brett',
    'Carmen',
    'Devin, Brett, Carmen +3 others',
    'Chris',
    'Laura',
  ];

  return (
    <SidebarContainer
      className={mobileSidebarOpened ? 'open' : ''}
      onScroll={(e) => {
        setCurrentScrollPos(e.currentTarget.scrollTop);
      }}
      onAnimationStart={(e) => console.log(e)}
    >
      <MobileSidebarButton
        currentScrollPos={currentScrollPos}
        className={mobileSidebarOpened ? 'open' : ''}
        onClick={() => setMobileSidebarOpened(!mobileSidebarOpened)}
      />
      {connections.map((conn, index) => {
        return <SidebarUserView key={index} name={conn} />;
      })}
    </SidebarContainer>
  );
}
