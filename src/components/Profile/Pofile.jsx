import PropTypes from 'prop-types';

import {
  ProfileContainer,
  Description,
  Avatar,
  Username,
  Tag,
  Location,
  Stats,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propoTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
