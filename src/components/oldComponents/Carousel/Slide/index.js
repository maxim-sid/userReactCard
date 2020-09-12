import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Slide.module.scss'


export default class Slide extends Component {
    constructor(props){
        super(props);
        const image = new Image();
        image.addEventListener('load', this.loadHandler)

        this.state = {
            image,
            isLoaded: false
        }
    }

    loadHandler = () => {
        // this.ListeningStateChangedEvent({
        //     isLoaded: true,
        // })

        this.setState({isLoaded:true})
    }

    load = () => {
        const {image} = this.state
        const {currentSlide: {src}} = this.props;
        image.src = src;
    }
    
    componentDidMount (){
        this.load();
    }

    componentDidUpdate (prevProps, prevState){
        const {isLoaded} = this.state;
        const {currentSlide: {src}} = this.props;
        if(src !== prevProps.currentSlide && isLoaded){
            this.load();
        }
    }

    render() {

        const {image, isLoaded} = this.state;
        const {currentSlide, contRatio}= this.props;
        const imageRatio = image.width / image.height;
        const imageSize = { [imageRatio > contRatio ? 'width' : 'height'] : 'inherit' }

        return (
            <>
            {isLoaded && 
            (<figure className={styles.container} title={currentSlide.title}>
                <img src={currentSlide.src} alt={currentSlide.title} style={imageSize}/>
                <figcaption className={styles.caption}>
                    <h3>{currentSlide.title}</h3>
                    <p>{currentSlide.description}</p>
                </figcaption>
                </figure>)
                }
            </>
        )
    }
}

Slide.propTypes = {
    currentSlide: PropTypes.shape({
        src: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
    }).isRequired,
}