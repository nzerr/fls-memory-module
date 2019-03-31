import React, { Component } from 'react';
import Card from '../card/card';
import './board.css';
import '../card/card.scss';
// import Modal from '../modal/modal';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards:
                [
                    'Boson de Higgs',
                    'Bottom Quark',
                    'Charm Quark',
                    'Electron-neutrino',
                    'Electron',
                    'Gluon',
                    'Muon',
                    'Neutron',
                    'Photon',
                    'Proton',
                    'Strange Quark',
                    'Top Quark',
                    'Up Quark',
                ],

            //['angular2', 'vue', 'react', 'grunt', 'phantomjs', 'ember', 'babel', 'ionic', 'gulp', 'meteor', 'yeoman', 'yarn', 'nodejs', 'bower', 'browserify'],
            cardsList: [],
            flippedCards: [],
            foundCards: 0,
            turns: 0,
            totalCardsNumber: 0,
            win: false

        }

        let cards = this.state.cards

        cards = this.shuffle(cards.concat(cards));

        let cardsList = [];
        cards.map((name, index) => {
            cardsList.push({
                index,
                name,
                close: true,
                complete: false,
                fail: false
            })
        })

        this.state.cards = cards;
        this.state.cardsList = cardsList;
        this.state.totalCardsNumber = cards.length / 2;
        this.state.win = false
    }

    render() {

        return (
            <div className="playground">
                {
                    this.state.cardsList.map((card, index) => {
                        return <Card
                            key={card.index}
                            card={card.name}
                            click={() => { this.handleClick(card.name, index) }}
                            close={card.close}
                            complete={card.complete} />

                    })
                }


            </div>);
    }

    handleClick(name, index) {
        if (this.state.flippedCards.length < 2) {
            let flippedCard = {
                name,
                index
            }

            let cardsList = this.state.cardsList
            let flippedCards = this.state.flippedCards

            cardsList[index].close = false
            flippedCards.push(flippedCard)
            this.setState({
                flippedCards: flippedCards,
                cardsList: cardsList
            })
        }

        if (this.state.flippedCards.length === 2) {
            setTimeout(() => {
                this.check()
            }, 750)
        }
    }

    check() {
        let cardsList = this.state.cardsList;
        let flippedCard1 = this.state.flippedCards[0];
        let flippedCard2 = this.state.flippedCards[1];
        let cardsFound = this.state.foundCards;

        if (flippedCard1 && flippedCard2) {

            if ((flippedCard1.name === flippedCard2.name) && (flippedCard1.index !== flippedCard2.index)) {
                cardsList[flippedCard1.index].complete = true
                cardsList[flippedCard2.index].complete = true
                cardsFound++;

            } else {
                cardsList[flippedCard1.index].close = true
                cardsList[flippedCard2.index].close = true
            }
            this.setState({
                cardsList: cardsList,
                flippedCards: [],
                foundCards: cardsFound,
                turns: this.state.turns + 1
            });
            this.checkWin();
        }
    }

    checkWin() {
        if (this.state.foundCards === this.state.totalCardsNumber) {
            this.setState({
                win: true
            });

            alert("Win!");

        }
    }

    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

}

export default Board;