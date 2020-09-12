import React, { Component } from 'react'
import styles from './Timer.module.css'

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            isRun: false,
            time: new Date(0,0,0,0,0,0,0)
        };
        this.timerId = null;
    }
    
    timerRun = () => {
        this.setState((state,props) => {
            const {time} = state;
            const newDate = new Date(time.getTime());
            newDate.setSeconds(newDate.getSeconds() + 1);
            return{
                time:newDate,
            };
        });
    };

    start = () => {
        this.setState({
            isRun: true,
        })
    }

    stop = () => {
        this.setState({
            isRun:false
        })
    }

    reset = () => {
        this.setState({
            isRun:false,
            time: new Date(0,0,0,0,0,0,0)
        });
    };

    clear = () => {
        if (this.timerId){
            clearTimeout(this.timerId);
            this.timerId = null;
        }
    }

    componentDidMount() {
        this.start()
    }

    componentDidUpdate() {
        const {isRun} = this.state;
        if (isRun) { this.timerId = setTimeout(this.timerRun, 1000) };
    }

    componentWillUnmount() {
        this.clear();
        console.log('component will mount');
    }

    render() {
        const {time, isRun} = this.state;
        return (
            <div className={styles.container}>
                <h1 className={styles.time_style}> {time.toLocaleTimeString('it-IT')} </h1>
                <button onClick={isRun ? this.stop : this.start}>{isRun ? 'Stop timer' : 'Start timer'}</button>
                <button onClick={this.reset}> Reset Timer </button>
            </div>
        )
    }
}
