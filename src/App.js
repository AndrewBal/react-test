import './App.css'
import Product from './Product/Product'

function App() {
  const divStyle = {
    textAlign: 'center',
  }
  return (
    <div style={divStyle} className="App">
      <h1>Hello World!</h1>
      <Product name={'John Galt'} price={999} />
      <Product name={'Незнайка на луне'} price={199}>
        <p style={{ color: 'red' }}>color</p>
      </Product>
    </div>
  )
}

export default App
