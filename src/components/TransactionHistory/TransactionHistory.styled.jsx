import styled from '@emotion/styled';

export const Table = styled.table`
  box-shadow: 3px 3px 30px 3px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
  transition: scale 200ms cubic-bezier(0.455, 0.03, 0.515, 0.5);
  &:hover {
    scale: 1.025;
  }
`;

export const Thead = styled.thead`
  text-transform: uppercase;
  background-color: #3ea8ff;
  color: white;
`;

export const Tr = styled.tr`
  font-weight: 500;
  :nth-of-type(even) {
    background-color: #35353544;
  }
`;

export const Th = styled.th`
  padding: 10px 60px;
  border-radius: 5px;
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
  padding: 10px 60px;
  border-radius: 5px;
  text-align: center;
  text-transform: capitalize;
`;
