
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const connect = function (WrappedComponent) {

    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        render() {
            return <WrappedComponent />
        }
    }

    return Connect
}