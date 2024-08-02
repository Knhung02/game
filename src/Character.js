import React from 'react';

const Character = ({ name, characters }) => {
    return (
        <div>
            <h3>{name}</h3>
            <div className="characters">
                {Array(characters).fill().map((_, i) => <div key={i} className="character"></div>)}
            </div>
        </div>
    );
};

export default Character;
