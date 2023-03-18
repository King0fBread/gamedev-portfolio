import React from 'react';
import { useParams } from 'react-router';
import projects from '../data/projects';
const GamePage = () => {
  const {id} = useParams();
  const currentProj = projects[id]
  return(<div>
    <video></video>
  </div>)

}
export default GamePage;
