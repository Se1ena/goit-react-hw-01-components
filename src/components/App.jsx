import Profile from 'components/Profile/Profile';
import user from 'data/user';
import Statistics from 'components/noname/Statistics';
import data from 'data/data';
import FriendList from 'components/noname/FriendList';
import friends from 'data/friends';
import TransactionHistory from 'components/noname/TransactionHistory';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <div>
      <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
