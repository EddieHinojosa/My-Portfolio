import { useState } from 'react'
import './App.css'


function App() {

return (
  <div className="App">
    <header className="App-header">
      <h1>My Portfolio</h1>
      <p>Welcome to my portfolio</p>
    </header>
    <main>
      <section>
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>Link</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  </div>
)
}
  

export default App
