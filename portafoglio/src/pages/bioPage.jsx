import React from 'react';



const BioPage = () => {

    return (
        <div>
            <ul>
                {["I ","am a ","Coder"].map((bio, idx) =>{
                    return <li key={idx}>{bio}</li>
                })}
            </ul>
        </div>
        );
};

export default BioPage;