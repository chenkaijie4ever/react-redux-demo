
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const connect = function (WrappedComponent) {

    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor() {
            super()
            this.state = {}
        }

        componentWillMount() {
            const { store } = this.context
            this._updateThemeColor()
            store.subscribe(() => this._updateThemeColor())
        }
    
        _updateThemeColor() {
            const { store } = this.context
            const state = store.getState()
            this.setState({ themeColor: state.themeColor })
        }

        render() {
            return <WrappedComponent {...this.state}/>
        }
    }

    return Connect
}