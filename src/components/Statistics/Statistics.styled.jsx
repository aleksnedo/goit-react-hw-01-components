import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 15px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 3px 3px 30px 3px rgba(0, 0, 0, 0.75);
  /* width: 400px; */
  margin-bottom: 15px;
  transition: scale 200ms cubic-bezier(0.455, 0.03, 0.515, 0.5);
  &:hover {
    scale: 1.045;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 80px;
  background-color: #${getRandomHexColor};
  padding: 10px;
  border-radius: 5px;
  &:not(:last-child) {
    border-right: solid 1px white;
  }
`;

export const Label = styled.span`
  text-align: center;
  font-weight: 700;
`;

export const Percent = styled.span`
  text-align: center;
  font-weight: 500;
`;

function getRandomHexColor() {
  return `${Math.floor(Math.random() * 16777215).toString(16)}`;
}
