import React, {Component, PropTypes} from 'react';
import styles from './Messenger.scss';
import Textarea from 'react-textarea-autosize';
import classNames from 'classnames';

const messageFromSupport = 'Message from support';

class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      messages: []
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.text.length) {
      this.setState({text: '', messages:
      [
        ...this.state.messages,
        {support: false, text: this.state.text},
        {support: true, text: messageFromSupport}
      ]
      });
    }
  }

  handleTextChange = event => {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.profile}>
          Intercom
          <div>External params: {this.props.params}</div>
        </div>
        <div className={styles.messages}>
          {
            this.state.messages.map((message, num) => <div className={classNames(styles.message, message.support ? styles.fromSupport : styles.fromUser)} key={`${num * 2}`}>{message.text}</div>)
          }
        </div>
        <div className={styles.composer}>
          <form onSubmit={this.handleFormSubmit}>
            <Textarea style={{maxHeight: 50}} placeholder="Send a message..." value={this.state.text} onChange={this.handleTextChange}/>
            <button className={styles.button} type="submit">Send message</button>
          </form>
        </div>
      </div>
    );
  }
}

Messenger.propTypes = {
  params: PropTypes.string
};

Messenger.defaultProps = {
  params: ''
};

export default Messenger;
