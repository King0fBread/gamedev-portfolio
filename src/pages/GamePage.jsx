import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import projects from '../data/projects';
const GamePage = () => {
  const {id} = useParams();
  const [currentProj, setCurrentProj] = useState({})
  const [highlights, setHighlights] = useState([])
  useEffect( () => {
    setCurrentProj(projects[id])
    setHighlights(currentProj.highlights)
  }, [])
  return(<div>
    <h1 className='project-page-title'>{currentProj.name}</h1>
    <video src={currentProj.video} width="500" height="300" controls></video>
    {highlights.map((el, index) => {return(
      <p key={index}>{el}</p>
    )})}
  </div>)
}
export default GamePage;
