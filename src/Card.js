import React from 'react';

const Card = (props) => {
    return (
        <div className="bg-primary m-1 text-center">
            <img src={`https://robohash.org/bot${props.id}`} alt='robos' />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;