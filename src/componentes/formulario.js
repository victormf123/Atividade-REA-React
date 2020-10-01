import React, { useState, useEffect } from 'react';
import './formulario.css'

export default props => {
  const [INSS, setINSS] = useState(0);
  const [IRRF, setIRRF] = useState(0);
  const [salarioComDescontos, setSalarioComDescontos] = useState(0);
  const [salario, setSalario] = useState('');

  useEffect(() => {
    var inssSubt
    var irrfSubt
    var result
    
    if(salario <= 1045 ){
      inssSubt = salario * 0.075
    }else if (salario >= 1045.01 && salario <= 2089.60	) {
      inssSubt = salario * 0.09
    }else if (salario >= 2089.61 && salario <= 3134.40) {
      inssSubt = salario * 0.12
    }else if (salario >= 3134.41 && salario >= 6101.06) {
      inssSubt = Math.round((salario * 0.14) * 100) / 100
    }

    if(salario <= 1903.98 ){
      irrfSubt = 0
    }else if (salario >= 1903.99 && salario <= 2826.65	) {
      irrfSubt = salario * 0.075
    }else if (salario >= 2826.66 && salario <= 3751.05) {
      irrfSubt = salario * 0.15
    }else if (salario >= 3751.06 && salario <= 4664.68) {
      irrfSubt = salario * 0.225
    }else if (salario >= 4664.69){
      irrfSubt = Math.round((salario * 0.275) * 100) / 100
    }
    setINSS(inssSubt)
    setIRRF(irrfSubt)
    result = parseFloat(salario - irrfSubt - inssSubt)
    console.log('resultado: ', result)
    setSalarioComDescontos(result)
  }, [salario])
  
  return (
    <div className="body">
      <div className="column-left">
        <div className="column-group">
          <label htmlFor="INSS">INSS:</label>
          <input readOnly={true} value={INSS || 0} type='number' id="INSS"/>
        </div>
        <div className="column-group">
          <label htmlFor="IRRF">IRRF:</label>
          <input readOnly={true} value={IRRF || 0} type='number' id="IRRF"/>
        </div>
        <div className="column-group">
          <label htmlFor="SALARIO_COM_DESCONTOS">Total:</label>
          <input readOnly={true} value={salarioComDescontos || 0} type='number' id="SALARIO_COM_DESCONTOS"/>
        </div>
      </div>

      <div className="column-right">
        <label htmlFor="SALARIO">SALARIO:</label>
        <input onChange={(event) => setSalario(parseFloat(event.target.value))} value={salario} type='number' id="SALARIO"/>
      </div>

    </div>
  )
}