import React from 'react'
import Todo from '../images/Todo-react.png'

function Portfolio() {
  return (
    <div className="portfolio-container" id="portfolio">
    <h1 className="portfolio-title">Portfolio</h1>
    <ul className="portfolio-ul">
      <li className="active">Javascript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
    <div className="container-portfolio">
      <div className="item">
        <img className="portfolio-image" src= {Todo}  alt="todo-app"></img>
        <h3>Music App</h3>
      </div>

      <div className="item">
        <img className="portfolio-image" src= {Todo}  alt="todo-app"></img>
        <h3>Music App</h3>
      </div>

      <div className="item">
        <img className="portfolio-image" src= {Todo}  alt="todo-app"></img>
        <h3>Music App</h3>
      </div>

      <div className="item">
        <img className="portfolio-image" src= {Todo}  alt="todo-app"></img>
        <h3>Music App</h3>
      </div>

      <div className="item">
        <img className="portfolio-image" src= {Todo}  alt="todo-app"></img>
        <h3>Music App</h3>
      </div>

      <div className="item">
        <img className="portfolio-image" src= {Todo}  alt="todo-app"></img>
        <h3>Music App</h3>
      </div>
    </div>
    </div>
  )
}

export default Portfolio
