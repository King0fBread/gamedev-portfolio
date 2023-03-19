import React from 'react';
import { useParams } from 'react-router';
import projects from '../data/projects';
const GamePage = () => {
  const {id} = useParams();
  const currentProj = projects[id]
  return(<div>
    <h1 className='project-page-title'>{currentProj.name}</h1>
    <video src={currentProj.video} width="500" height="300" controls></video>
  </div>)

}
function addLineBreaks(text){
  return text.replace("\n", "<br />")
}
export default GamePage;
