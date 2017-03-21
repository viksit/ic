import React, {Component, PropTypes} from 'react';
import styles from './App.scss';
import classNames from 'classnames';
import Messenger from '../Messenger/Messenger';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
      dialogOpen: false
    };
  }

  handleMouseEnter = () => {
    this.setState({mouseOver: true});
  }

  handleMouseOut = () => {
    this.setState({mouseOver: false});
  }

  handleClick = () => {
    this.setState({dialogOpen: !this.state.dialogOpen});
  }

  render() {
    return (
      <div>
        <div className={classNames(styles.container, this.state.mouseOver ? styles.over : false)} onMouseEnter={this.handleMouseEnter} onMouseOut={this.handleMouseOut} onClick={this.handleClick}>
          <div className={classNames(styles.openIcon, this.state.dialogOpen ? styles.dialogOpen : false)}/>
          <div className={classNames(styles.closeIcon, this.state.dialogOpen ? styles.dialogOpen : false)}/>
        </div>
        {
          this.state.dialogOpen &&
            <Messenger params={this.props.params}/>
        }
      </div>
    );
  }
}

App.propTypes = {
  params: PropTypes.string
};

App.defaultProps = {
  params: ''
};

export default App;
