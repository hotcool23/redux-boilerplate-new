import React from "react";
import {Link} from 'react-router';

import './style.css';

export default class Header extends React.Component {
  render() {
    const date = new Date();
    return (
        <footer className="ui inverted vertical footer segment">
          <div className="ui text container">
            © { date.getFullYear() }, All rights reserved
          </div>
        </footer>
    );
  }
}

