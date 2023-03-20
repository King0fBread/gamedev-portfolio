import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import projects from '../data/projects';
const GamePage = () => {
  const {id} = useParams();
  const [currentProj, setCurrentProj] = useState({})
  const [highlights, setHighlights] = useState([])
  useEffect( () => {
    setCurrentProj(projects[id])
    setHighlights(projects[id].highlights.split('\n'))
  }, [])
  return(<div>
    <h2 className='project-page-text'>{currentProj.name}</h2>
    <p className='project-page-text'>{currentProj.description}</p>
    <video src={currentProj.video} width="500" height="300" controls></video>
    {highlights.map((el, index) => {return(
      <p className='project-page-text' key={index}>{el}</p>
    )})}
  </div>)
}
export default GamePage;
