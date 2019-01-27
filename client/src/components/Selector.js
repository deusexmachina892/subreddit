import React from 'react';

const SELECTOR_CONFIG = ['alternativeart', 'pics', 'gifs', 'adviceanimals', 'cats', 'images', 'photoshopbattles', 'hmmm', 'all', 'aww'];

export default function Selector(props){
    const { handleClick } = props;
    return(
        <div className='selector'>
        <h4>Click on the following Subreddits to display the related posts</h4>
          <ul>
             { SELECTOR_CONFIG.map(selector => {
                 return(
                     <li key={selector}>
                         <button id={selector} onClick={(e) => handleClick(e)}>{selector}</button>
                     </li>
                 )
             })}
          </ul>
        </div>
    )
}