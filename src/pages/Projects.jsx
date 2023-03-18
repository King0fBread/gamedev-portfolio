import React from 'react';


const Projects = () => {
    return (
        <div className="container" id="projects">
            <p className="projects-top-text">
                Here are all my currently released projects (from first to latest):</p>
            <div className="centered-content-description">
                <div className="projects-grid">
                    <div className="preview" id="preview-mizkif" onClick="window.location.href = 'content.html?id=0'">
                        <img className="preview-cover-image" src="/gameCoversMizkif.png"/>
                        <br/>
                        Mizkif: Emote Madness
                    </div>
                    <div className="preview" id="preview-ancient">
                        <img className="preview-cover-image"
                             src="/gameCoversAncientEvil.png"/>
                        <br/>
                        Ancient Evil: The Guessing Game
                    </div>
                    <div className="preview" id="preview-purgatory">
                        <img className="preview-cover-image"
                             src="/gameCoversPurgatory.png"/>
                        <br/>
                        Tiny Purgatory
                    </div>
                    <div className="preview" id="preview-office">
                        <img className="preview-cover-image" src="/gameCoversOffice.png"/>
                        <br/>
                        TotallyNormalOffice
                    </div>
                    <div className="preview" id="preview-judgment">
                        <img className="preview-cover-image"
                             src="/gameCoversJudgment.png"/>
                        <br/>
                        Forgotten Judgment
                    </div>
                    <div className="preview" id="preview-smile">
                        <img className="preview-cover-image" src="/gameCoversSmile.png"/>
                        <br/>
                        They want me to smile
                    </div>
                    <div className="preview" id="preview-town">
                        <img className="preview-cover-image"
                             src="/gameCoversNewToTown.png"/>
                        <br/>
                        New to town
                    </div>
                    <div className="preview" id="preview-cold">
                        <img className="preview-cover-image" src="/gameCoversCold.png"/>
                        <br/>
                        I'm not cold
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;