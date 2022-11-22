// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import { Profile } from './Profile/Pofile';
import user from '../user.json';
import { Statistics } from './Statistics/Statistics';
import upcomingStats from '../data.json';

export const App = () => {
  return (
    <div className="sections-wrapper">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={upcomingStats} />
    </div>
  );
};
