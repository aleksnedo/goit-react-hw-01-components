import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: center;
  padding: 10px;
  width: 200px;
  gap: 20px;

  box-shadow: 3px 3px 30px 3px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  transition: scale 200ms cubic-bezier(0.455, 0.03, 0.515, 0.5);
  &:hover {
    scale: 1.045;
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Name = styled.p`
  font-weight: 600;
  text-transform: uppercase;
`;
