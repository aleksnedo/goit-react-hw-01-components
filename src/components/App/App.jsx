import { Container } from 'components/App/App.styled';
import { Profile } from '../Profile/Pofile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../Friends/FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import user from 'user.json';
import upcomingStats from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

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
      <Statistics stats={upcomingStats} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
};
