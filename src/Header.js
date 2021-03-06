import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
class Header extends Component {

    render() {
        return (
            <h1 style={{ color: this.props.themeColor }}>This is header.</h1>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        themeColor: state.themeColor
    }
}
Header = connect(mapStateToProps, null)(Header)

export default Header