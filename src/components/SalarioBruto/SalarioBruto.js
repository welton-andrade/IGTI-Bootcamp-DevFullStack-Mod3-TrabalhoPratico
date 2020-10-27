import React, { Component } from 'react'

export default class SalarioBruto extends Component {

    handleSalarioBruto = (event) => {
        let newSalary = +event.target.value
        this.props.onSalary(newSalary);
    }

    render() {
        let { salary, steps } = this.props;
        return (
            <div>
                <span> Salário bruto </span>
                <input 
                    autoFocus
                    className="input-field col s12"
                    onChange={this.handleSalarioBruto} 
                    type="number" step={steps} min="1000" value={salary}>
                </input>
            </div>
        )
    }
}
