import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import '../global.scss';

class DarkModeToggle extends Component {
  constructor(props) {
    super(props);

    if(JSON.parse(localStorage.getItem('LIGHT')) === true) {
      document.body.classList.add('light-mode');
    }

    this.state = {
      lightMode: JSON.parse(localStorage.getItem('LIGHT_MODE'))
    }

    this.handleModeChange = this.handleModeChange.bind(this);
  }

  handleModeChange() {
    if (!this.state.lightMode) {
      document.body.classList.add('light-mode');
      
    } else {
      document.body.classList.remove('light-mode');
    }

    this.setState({
      lightMode: (!this.state.lightMode)
    });
    localStorage.setItem('LIGHT_MODE', !this.state.lightMode);
  }

  render() {
    return (
      <button onClick={this.handleModeChange}><FontAwesomeIcon icon={faSun} /></button>
    );
  }
}

export default DarkModeToggle;