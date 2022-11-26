import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  box-shadow: 3px 3px 30px 3px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 15px;
  transition: scale 200ms cubic-bezier(0.455, 0.03, 0.515, 0.5);
  &:hover {
    scale: 1.045;
  }
`;

export const Description = styled.div`
  text-align: center;
  padding: 15px;
`;

export const Avatar = styled.img`
  display: inline-block;
  padding: 5px;
  width: 100px;
  border: solid 1px black;
  border-radius: 50%;
`;

export const Username = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const Tag = styled.p`
  font-weight: 700;
`;

export const Location = styled.p`
  margin-top: 10px;
`;

export const Stats = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  width: 250px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(207, 206, 206);
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  &:not(:last-child) {
    border-right: solid 1px white;
  }
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
