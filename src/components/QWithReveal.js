import React from 'react';

class QWithReveal extends React.Component {
    state = {showAnswer: false}
    quandaClass = Number(this.props.rowType) % 2 ? "quandaBlock-odd" : "quandaBlock-even";
    
    
    handleClick = () => {
        this.setState({showAnswer:!this.state.showAnswer})
    }
    RevealButton = <button className="revealBtn" onClick={this.handleClick}>Show answer</button>
    Answer = <h2 className="aBlock" onClick={this.handleClick} >{this.props.a}</h2>; 

    render() {
        return (
            <div className={this.quandaClass}>
                <h2 className="qBlock">{this.props.q}</h2>
                {this.state.showAnswer ? this.Answer : this.RevealButton}
            </div>
        )
    }
}

export default QWithReveal;