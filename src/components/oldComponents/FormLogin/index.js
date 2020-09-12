import React, { Component } from 'react'
import styles from './FromLogin.module.css'

export default class FormLogin extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            userEmail: '',
            userPassword: ''
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            userEmail: event.target.value
        });
    }

    handlePasswordChange = (event) => {
        this.setState({
            userPassword: event.target.value
        });
    }

    /*
    handleCommonChange = ({target: {name, value}}) => {
        this.setState({ [name]: value })
    }*/

    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        const {userEmail, userPassword} = this.state;
        return (
            <>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <input placeholder={'Email'} type="email" name="userEmail" value={userEmail} onChange={this.handleEmailChange}/>
                    <input placeholder={'Password'} type="password" name="userPassword" value={userPassword} onChange={this.handlePasswordChange}/>
                    <button type="submit" > Submit </button>
                </form>
            </>
        )
    }
}
