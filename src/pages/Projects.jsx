import React from 'react';
import { useNavigate } from 'react-router';
import projects from "../data/projects.js";


const Projects = () => {
    const navigate = useNavigate(); 
    return (
        <div className="container" id="projects">
            <div className="centered-content-description">
                <p className="projects-top-text">
                These are my currently released projects (from first to latest):
                </p>
                <div className="projects-grid">
                    {projects.map((el) => {
                        return (<div onClick={() => {navigate(`/gamePage/${el.id}`)}} key={el.id} className="preview">
                            <img className="preview-cover-image" src={`${el.imagePath}`}/>
                            <br/>
                            {el.name}
                        </div>)
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;