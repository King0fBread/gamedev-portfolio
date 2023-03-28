import React from 'react';

const Contacts = () => {
    return (
        <div className="container" id="contacts">
            <div className="centered-content-description">
                My contacts:
                <p>
                    <img onClick={() => window.open("mailto:nikitaglubokov7@gmail.com")} className="contacts-icon" src="/iconMail.png"
                         />
                </p>
                <p>
                    <img onClick={() => {window.open("https://www.linkedin.com/in/nikita-glubokov-947560262/")}} className="contacts-icon" src="/iconLinkedIn.png"
                         />
                </p>
                <p>
                    <img onClick={() => {window.open("https://github.com/King0fBread")}} className="contacts-icon" src="/iconGitHub.png"
                         />
                </p>
                <p>
                    <img onClick={() => {window.open("https://kingofbread.itch.io/")}} className="contacts-icon" src="/iconItch.png"/>
                </p>
            </div>
        </div>
    );
};

export default Contacts;