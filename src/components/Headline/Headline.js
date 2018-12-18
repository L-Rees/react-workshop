import React, { Component } from 'react';
import './headline.css'

class Headline extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const textColor = this.props.isColor ?
        {'color': 'pink'} :
        {'color': 'gray'}
        return <section className="Headline">
            <h1 className="Headline_title" style ={textColor}>{this.props.text}</h1>
            <p className="Headline_content">This is some content</p>
            </section>
    }
}


export default Headline