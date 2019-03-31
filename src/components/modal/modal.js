import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    {this.props.children}
                    <button onClick={this.props.handleClose}>Fermer</button>
                </section>
            </div>
        );
    };
}

export default Modal;