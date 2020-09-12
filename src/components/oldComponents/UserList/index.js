import React, { Component } from 'react';
import ListItem from './ListItem';

//parent => child props
//child => parent callback
const UserList = (props) => {

  const{users, setUsers} = props;

  const mapUser = (user, index) => {
    const selectUser = () => {
      const newUsers = [...users];
      newUsers[index].isSelected = !newUsers[index].isSelected
      setUsers(newUsers);
    };
    return (<ListItem 
    key={ user.id } 
    user={ user }
    onSelect={ selectUser }
    isSelected={ user.isSelected }
    />
    );
  };
    return <div><ul>{users.map(mapUser)}</ul></div>;
}
export default UserList;