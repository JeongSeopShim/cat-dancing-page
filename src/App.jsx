import DancingCat from './components/DancingCat'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🐱 Dancing Cat 🐱</h1>
        <p>Click the cat to see it dance!</p>
      </header>
      <main>
        <DancingCat />
      </main>
    </div>
  )
}

export default App
