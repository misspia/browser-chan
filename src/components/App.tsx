import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const App: React.FC = () => {
  return (
    <Container>
      it's browser chan UwU
    </Container>
  );
}
