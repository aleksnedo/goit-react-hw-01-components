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
import userData from '../user.json';

export const App = () => {
  return (
    <section className="section">
      <Profile user={userData} />
    </section>
  );
};
