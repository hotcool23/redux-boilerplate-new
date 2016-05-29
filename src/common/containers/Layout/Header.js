import React, {Component, PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';

export default class Header extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool
  }

  render() {
    let links = [
      {
        to: '/trends',
        title: 'Github trends'
      },
      {
        to: '/about',
        title: 'About'
      },
      {
        to: '/404',
        title: 'Non-exists page'
      }
    ];

    if (this.props.loggedIn) {
      links.push({
        to: '/profile',
        title: 'Profile'
      });
      links.push({
        to: '/logout',
        title: 'Logout'
      });
    } else {
      links.push({
        to: '/login',
        title: 'Login'
      });
    }

    return (
      <div className="ui text container">
        <h1 className="ui dividing header">
          Redux universal boilerplate
        </h1>
        <div className="ui secondary pointing menu">
          <IndexLink
            className="item"
            to="/"
            activeClassName="active">
            Homepage
          </IndexLink>
          {
            links.map(function(link, i) {
              return (
                <Link
                  to={link.to}
                  key={i}
                  className="item"
                  activeClassName="active">
                  {link.title}
                </Link>
              );
            })
          }
        </div>
      </div>
    );
  }
}
