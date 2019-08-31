import React from 'react';

export const Card = props => (
        <div className='card-component'>
            <img alt='cats' src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`}/>
            <h2>{ props.monster.title }</h2>
        </div>
    )