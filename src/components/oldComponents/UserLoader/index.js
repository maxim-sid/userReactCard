import React, {Component} from 'react'
import {getUsers} from '../../../api'

export default class UserLoader extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
            currentPage: 1,
            isFetching: true,
            error: null
        }
    }

    loadUsers = () => {
        const {currentPage} = this.state;
        getUsers({
            page: currentPage,
            result: 10,
        })
        .then(data => {
            this.setState({
                users: data.result,
                isFetching:false,
            })
        })
        .catch(error=> {
            this.setState({
                error,
                isFetching: false,
            })
        })
    }

    componentDidMount() { 
        this.loadUsers();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.currentPage !== this.state.currentPage){
            this.loadUsers();
        }
    }

    prev = () => {
        const {currentPage} = this.state;
        if(currentPage > 1){
            this.setState({
                currentPage: currentPage - 1,
            });
        }
    }

    next = () => {
        const{currentPage} = this.state;
        if(currentPage > 1){
            this.setState({
                currentPage: currentPage + 1,
            })
        }
    }
    
    render() {
        const {users, error, isFetching, currentPage} = this.state
        if(error) return <div>Smthng went wrong</div>
        if(isFetching) return <div>...PREPARING MY LASER...</div>
        return(
            <>
                <h1>{currentPage}</h1>
                <button onClick={this.prev}>PREV</button>
                <button onClick={this.next}>NEXT</button>
                <ul>
                    <li>
                        <h2>USER LIST:</h2>
                    </li>
                    {users.map(u => (
                        <li key={`${u.email}`}>
                        <br />
                        {JSON.stringify(u,null, '\t')}
                        <br />
                        </li>
                    ))}
                </ul>
            </>
        ) 
    }
}