import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../assets/transparent.png';

class Navbar extends React.Component {
  state = { clicked: false };
  renderButton() {
    if (this.props.isSignedIn) {
      return (
        <a
          href={`http://localhost:${window.PORT}/logout`}
          className='button is-danger'>
          <strong>Log Out</strong>
          <span className='icon'>
            <i className='fab fa-google'></i>
          </span>
        </a>
      );
    }
    return (
      <a
        href={`http://localhost:${window.PORT}/login`}
        className='button is-danger'>
        <strong>Log in</strong>
        <span className='icon'>
          <i className='fab fa-google'></i>
        </span>
      </a>
    );
  }

  render() {
    return (
      <nav className='navbar is-dark'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img src={logo} alt='logo' width='180' />
          </Link>
          <button
            onClick={() => this.setState({ clicked: !this.state.clicked })}
            className={`navbar-burger ${this.state.clicked ? 'is-active' : ''}`}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </button>
        </div>
        <div className={`navbar-menu ${this.state.clicked ? 'is-active' : ''}`}>
          <div className='navbar-start'>
            <Link to='/challenges' className='navbar-item'>
              Challenges
            </Link>
            <Link to='/leaderboards' className='navbar-item'>
              Leaderboards
            </Link>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>{this.renderButton()}</div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Navbar);
