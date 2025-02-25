import { useState } from 'react'
import { TodoWrapper } from './components/TodoWrapper'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 style={{ fontSize: '3rem', textAlign: 'center' }}>📝 To-Do List ✅</h1>
      <Router>
        <Routes>
          <Route path='/' element={<TodoWrapper />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
