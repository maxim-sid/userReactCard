import React, { Component } from 'react'
import styles from './Control.module.scss'
import PropTypes from 'prop-types'
import Icon from '@mdi/react'
import {mdiSkipNext, mdiSkipPrevious, mdiPlay, mdiPause, mdiFullscreen, mdiFullscreenExit, mdiSki} from '@mdi/js'

export default class Control extends Component {
    constructor(props){
        super(props);

        this.state = {
            isFullscreen: false,
            isSlideshow: false,
            delay: 2000,
        }
        this.timeoutId = null
    }

    slideshowHandler = () => {
        this.setState({
            isSlideshow: !this.state.isSlideshow,
        })
    }

    fullscreenMode = () => {
        const {fullscreenMode} = this.props;
        const {isFullscreen} = this.state;

        this.setState({
            isFullscreen: !isFullscreen,
        });
        fullscreenMode(isFullscreen)
    }

    delayHandler = ({target: { value }}) => {
        this.setState({
            delay:value,
        })
    }

    componentDidUpdate (prevProps, prevState){

        const { delay, isSlideshow } = this.state;
        const {next} = this.props;
        this.timeoutId = null;

        clearTimeout(this.timeoutId);

        if(isSlideshow){
        this.timeoutId = setTimeout(next, delay);
        }
    }

    render() {
        const {isFullscreen, isSlideshow, delay} = this.state;
        const {next, prev} = this.props;
        return (
            <div className={styles.slideCont}>
              <div className={styles.delay}>
                  <input type='range' value={delay} min={1} max={2000} onChange={this.delayHandler}/>
                  <div>{delay}</div>
              </div>
              <div className={styles.nextPrev}>
                  <Icon onClick={prev} path={mdiSkipPrevious}/>
                  <Icon onClick={next} path={mdiSkipNext}/>
              </div>
              <div className={styles.slideshow}>
                  <Icon onClick={this.slideshowHandler} path={isSlideshow ? mdiPause : mdiPlay}/>
                  <Icon onClick={this.fullscreenMode} path={isFullscreen ? mdiFullscreenExit : mdiFullscreen}/>
              </div>
            </div>
        )
    }
}

Control.propTypes = {
    fullscreenMode: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
};