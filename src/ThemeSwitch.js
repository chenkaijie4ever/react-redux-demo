import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
class ThemeSwitch extends Component {

    render() {
        return (
            <div>
                <button
                    style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
                <button
                    style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
            </div>
        )
    }

    handleSwitchColor(color) {
        this.props.onSwitchColor(color)
    }

}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }
    }
}

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch