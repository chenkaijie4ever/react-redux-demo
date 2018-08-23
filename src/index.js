import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import PropTypes from 'prop-types'
import Header from './Header'
import Content from './Content'

class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

const themeReducer = function (state, action) {
    if (!state) return {
        themeColor: 'red'
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}

const store = createStore(themeReducer)

ReactDOM.render(<Index />, document.getElementById('root'));
