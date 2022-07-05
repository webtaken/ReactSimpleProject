import React, { useState } from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      let newId = Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
      return [...prevUsersList, { id: newId, name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
