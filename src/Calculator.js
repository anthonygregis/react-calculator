import React, {Component} from 'react';

class Calculator extends Component {

    state = {
        num1: 0,
        num2: 0,
        sum: 0
    }

    setNum = (e, numChanging) => {
        if (numChanging === 'num1') {
            this.setState({
                num1: parseInt(e.target.value)
            })
        } else {
            this.setState({
                num2: parseInt(e.target.value)
            })
        }
    }

    addNums = () => {
        let newSum = this.state.num1 + this.state.num2
        this.setState({
            sum: newSum
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input type="number"
                           name="num1"
                           placeholder="Enter your first number"
                           value={this.state.num1}
                           onChange={ (e) => this.setNum(e, 'num1') }
                    />
                    <span>+</span>
                    <input type="number"
                           name="num1"
                           placeholder="Enter your first number"
                           value={this.state.num2}
                           onChange={ (e) => this.setNum(e, 'num2') }
                    />
                    <button onClick={this.addNums}>=</button>
                    <h3>Results: {this.state.sum}</h3>
                </div>
            </div>
        )
    }
}

export default Calculator