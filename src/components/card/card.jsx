import React, { Component } from 'react';
import './card.scss';
import Modal from '../modal/modal';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  clicked(card) {
    this.props.click(card)
  }
  render() {
    return (
      <div className={"card" + (!this.props.close ? ' opened' : '') + (this.props.complete ? ' matched' : '')} onClick={() => this.clicked(this.props.card)}>
        <div className="front">
          ?
        </div>
        <div className="back">
        <img src={"https://raw.githubusercontent.com/zerrn/fls-memory-module/master/public/img/" + this.props.card + ".jpg"} alt={this.props.name} />
         </div>
      </div>
    )
  }
}

export default Card;