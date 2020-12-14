import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = ({ totalItems }) => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Home
      </Link>
      <div className="right menu">
        <Link to="/cart" className="item">
          <i className="shop icon"></i>
          {totalItems}
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    totalItems: state.totalItems,
  }
}

export default connect(mapStateToProps)(Header)
