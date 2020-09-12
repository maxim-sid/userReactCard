import React, { Component } from 'react';
// import Carousel from './components/Carousel'
// import UserLoader from './components/UserLoader'
// import {slides, slidesCollection} from './components/Carousel/config'
import NewUserCard from './components/NewUserCard';
import userLoader from './components/asyncUserLoad';
// import Greeting from './components/Greeting';
// import UserList from './components/UserList';
// import SelectedUsers from './components/SearchSelected/index'
// import Timer from './components/Timer/index'
// import Greeting from './components/Greeting';
// import FormLogin from './components/FormLogin';

/*
const dbData = [
  {
    id: 1,
    fName: 'firstname1',
    lName: 'lastname1',
  },
  {
    id: 2,
    fName: 'firstname2',
    lName: 'lastname2',
  },
  {
    id: 3,
    fName: 'firstname3',
    lName: 'lastname3',
  },
  {
    id: 4,
    fName: 'firstname4',
    lName: 'lastname4',
  },
  {
    id: 5,
    fName: 'firstname5',
    lName: 'lastname5',
  },
]

class App extends React.Component{
  constructor(props){
    super(props);


    this.state = {users: dbData.map(u =>  ({...u, isSelected: false}))};
  }
  
  setUsers = newUsers => {
    this.setState({
      users:newUsers
    });
  };

  render(){
    const { users } = this.state

    return(
    <>
    <Ti
    <UserList users = {users} setUsers = {this.setUsers}/>
    <SelectedUsers users={users}/>
    </>
    )
  };
};

export default App;
*/
function App() {
  return <userLoader />
}

export default App
