import React from 'react';
import styles from './styles/input.module.scss';

// const divstyle={
//   color:'yellow',
// }

export default class Input extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: ''
    };
    //this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    console.log(event)
    this.setState(
      {
        value: event.target.value
      }
    )
  }
  render(){
    console.log(this.props);
    return(
      <div style={{ color:'red' }} className={styles.inputWrap}>
        <p>{this.state.value}</p>
        <input onChange={event => this.handleChange(event)}></input>
      </div>
    )
  }
}
