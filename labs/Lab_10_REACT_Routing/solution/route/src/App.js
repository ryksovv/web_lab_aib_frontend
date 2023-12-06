import './App.css';
import { Routes, Route, Link, useParams } from 'react-router-dom'

import { About } from './routes/About'


function App() {
  const users = [
    { id: 1, name: 'User 1', age: 25 },
    { id: 2, name: 'User 2', age: 30 },
    { id: 3, name: 'User 3', age: 24 }
  ];

  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<UserList users={users} />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserDetails users={users} />} />
      </Routes>
    </>
  );
}

function UserList({ users }) {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserDetails({ users }) {

  const { id } = useParams();

  const user = users.find((u) => u.id === parseInt(id, 10));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default App;
//А как, что, какой сервер нужно делать?))