import { useState } from 'react';
import './App.css'

function App() {
  const [inp1, setInp1] = useState(null)
  const [inp2, setInp2] = useState(null)
  const [calc, setcalc] = useState(0)

  const Inp1 = (e) =>{
    setInp1(e.target.value)
  }
  const Inp2 = (e) =>{
    setInp2(e.target.value)
  }
  const add = (e) =>{
    setcalc(+inp1 + +inp2)
  }
  const minus = (e) =>{
    setcalc(+inp1 - +inp2)
  }
  const multip = (e) =>{
    setcalc(+inp1 * +inp2)
  }
  const divis = (e) =>{
    setcalc(+inp1 / +inp2)
  }
  const res = (e) =>{
    setcalc(+inp1 % +inp2)
  }
  return (
    <>
      <div className="home p-5">
        <div className="container">'
          <div className="input-group">
            <input onChange={Inp1} className='form-control rounded-4 mx-1' type="text" />
            <input onChange={Inp2} className='form-control rounded-4 mx-1' type="text" />
            <button onClick={add} className='btn btn-warning col-1 mx-1 rounded-4'>+</button>
            <button onClick={minus} className='btn btn-warning col-1 mx-1 rounded-4'>-</button>
            <button onClick={multip} className='btn btn-warning col-1 mx-1 rounded-4'>*</button>
            <button onClick={divis} className='btn btn-warning col-1 mx-1 rounded-4'>/</button>
            <button onClick={res} className='btn btn-warning col-1 mx-1 rounded-4'>%</button>
          </div>
            <h1 className='col-12 mt-3'>{calc}</h1>
        </div>
      </div>
    </>
  )
}

export default App
