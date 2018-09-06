import * as React from 'react'
import {Button, Navbar} from '@blueprintjs/core'
import {Link, navigate, mergeQuery, setQuery} from 'fuse-react'

type MyProps = {  };
type MyState = { activeItem: string };
class Header extends React.Component<MyProps, MyState> {

  constructor(props) {
    super(props);
    this.activate = this.activate.bind(this);

    this.state = {
      activeItem: 'HOME'
    }
  }

  componentDidMount() {
    let page = window.location.pathname
    if (page === '/') this.setState({activeItem: 'HOME'})
    else if (page === '/services') this.setState({activeItem: 'SERVICES'})
    else if (page === '/workshop-preregistration') this.setState({activeItem: 'WORKSHOPS'})
    else if (page === '/ressources') this.setState({activeItem: 'RESSOURCES'})
    else if (page === '/about') this.setState({activeItem: 'ABOUT'})
  }

  activate(item) {
    this.setState({activeItem: item})
  }

  render() {
    return (
      <nav className={"nav"}>
        <ul>
          <li>
            <Link className={this.state.activeItem === 'HOME' ? 'active' : ''}  onClick={this.activate.bind(this, 'HOME')} to="/">HOME</Link>
          </li>
          <li>
            <Link className={this.state.activeItem === 'SERVICES' ? 'active' : ''} onClick={this.activate.bind(this,'SERVICES')} to="/services">SERVICES</Link>
          </li>
          <li>
            <Link className={this.state.activeItem === 'WORKSHOPS' ? 'active' : ''} onClick={this.activate.bind(this, 'WORKSHOPS')} to="/workshop-preregistration">WORKSHOPS</Link>
          </li>
          <li>
            <Link className={this.state.activeItem === 'RESSOURCES' ? 'active' : ''} onClick={this.activate.bind(this, 'RESSOURCES')} to="/ressources">RESSOURCES</Link>
          </li>
          <li>
            <Link className={this.state.activeItem === 'ABOUT' ? 'active' : ''} onClick={this.activate.bind(this, 'ABOUT')} to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header