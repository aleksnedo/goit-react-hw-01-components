import { Profile } from '../Profile/Pofile';
import user from 'user.json';
import { Statistics } from '../Statistics/Statistics';
import upcomingStats from 'data.json';
import { Container } from 'components/App/App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={upcomingStats} />
    </Container>
  );
};
