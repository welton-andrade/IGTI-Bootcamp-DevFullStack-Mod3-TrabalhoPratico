import React, { Component } from 'react'

export default class BaseINSS extends Component {

    componentDidMount() {
        console.log("*[0]*", this.props.salary);
    }

    componentDidUpdate() {
        
    }

    updateValue = (sal) => {
        sal = parseFloat(sal);
        let baseInss = this.calcINSS(sal);
        console.log("\n");
        return baseInss
    }

    calcINSS(sal) {
        let faixas = [
            {min: null,    max: 1045.00, percent: 0.075},
            {min: 1045.00, max: 2089.60, percent: 0.09},
            {min: 2089.60, max: 3134.40, percent: 0.12},
            {min: 3134.40, max: 6101.06, percent: 0.14},
            {min: 6101.06, max: null,    percent: null}
        ];
        
        let acc = 0;

        for(let i=0; i<faixas.length; i++) {
            let{min, max, percent}= faixas[i];

            if(min === null) {
                if(sal<=max) {
                    acc += this.formatValue(sal*percent);
                    break;
                } else {
                    acc += this.formatValue(max*percent);
                }
            }
            
            if(min !== null && max !== null) {
                if(sal > min && sal <= max) {
                    //console.log(max + " " + min);
                    acc += this.formatValue((sal - min) * percent);
                    break;
                } else {
                    //console.log(max + " " + min);
                    let temp = this.formatValue((max - min) * percent);
                    acc += temp
                }
            }

            if(max === null) {
                if(sal > min) {
                    acc = 713.10;
                    break;
                }
            }

        }
        console.log("Acumulador: " + acc);
        return acc;
    }

    formatValue(val) {
        return parseFloat(val.toFixed(2));
    }

    render() {
        let {salary} = this.props;
        return (
            <div>
                <label>Base INSS</label>
                <input disabled value={this.updateValue(salary)}></input>
            </div>
        )
    }
}
