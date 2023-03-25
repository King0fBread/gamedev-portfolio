import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import projects from '../data/projects';
const GamePage = () => {
  const {id} = useParams();
  const [currentProj, setCurrentProj] = useState({})
  const [highlights, setHighlights] = useState([])
  const [description, setDescription] = useState([])
  useEffect( () => {
    setCurrentProj(projects[id])
    setHighlights(projects[id].highlights.split('\n'))
    setDescription(projects[id].description.split('\n'))
  }, [])
  return(<div className='project-contents'>
    <h2 className='project-page-title'>{currentProj.name}</h2>
    {description.map((el, index) => {return(
      <p className='project-page-text' key={index}>{el}</p>
    )})}
    <p></p>
    <video className='game-preview-video' src={currentProj.video} width="500" height="300" controls></video>
    <p></p>
    <img className='game-screenshot' src={currentProj.screenShot1}></img>
    <img className='game-screenshot' src={currentProj.screenShot2}></img>
    <h2 className='project-page-highlights-title'>Here are some of the interesting highlights of my development process:</h2>
    {highlights.map((el, index) => {return(
      <p className='project-page-text' key={index}>{el}</p>
    )})}
    <p className='project-page-download-link' onClick={() => {window.open(currentProj.playLink)}}>{currentProj.playText}</p>
  </div>)
}
export default GamePage;
