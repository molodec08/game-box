import styled from "styled-components";

export default Container = styled.a`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: var(--offset);
  color: var(--color-white);
  transition: background-color 0.3s;

  &:hover {
      background-color: var(--color-light-dark);
  }
`;
