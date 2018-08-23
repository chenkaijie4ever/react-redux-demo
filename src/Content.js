import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import { connect } from './react-redux'
class Content extends Component {

    render() {
        return (
            <div>
                <p style={{ color: this.props.themeColor }}>This is content.</p>
                <ThemeSwitch />
            </div>
        )
    }
}

Content = connect(Content)

export default Content