import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>headings</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero neque explicabo quia sed tenetur odit aliquam. Culpa dolore rerum dolor, necessitatibus officia hic dolorem! Unde tenetur labore exercitationem porro molestias!
        </p>
      </div>
    </>
  )
}

export default App
