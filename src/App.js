import BaseINSS from './components/BaseINSS/BaseINSS';
import BaseIRPF from './components/BaseIRPF/BaseIRPF';
import DescontoINSS from './components/DescontoINSS/DescontoINSS';
import DescontoIRPF from './components/DescontoIRPF/DescontoIRPF';
//import SalarioBruto from './components/SalarioBruto/SalarioBruto';
import SalarioLiquido from './components/SalarioLiquido/SalarioLiquido';
import React, { Component } from 'react'
import SalarioBruto from './components/SalarioBruto/SalarioBruto';

export default class App extends Component {

  constructor() {
    super();
    this.state = { 
      fullSalary: 1000,
      steps: 100,
      inss: 0
    }
  }

  handleSalarioBruto = (newSalary) => {
    this.setState({fullSalary: newSalary});
  }

  render() {

    let {fullSalary, steps} = this.state;

    return (
      <div className="App">
  
        <h4>React Salário</h4>
        <SalarioBruto salary={fullSalary} steps={steps} onSalary={this.handleSalarioBruto} />

        <BaseINSS salary={fullSalary}/>
  
      </div>
    )
  }
}
