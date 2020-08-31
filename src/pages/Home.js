import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import Weather from '../components/Weather'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Weather />
            </div>
        )
    }
}
