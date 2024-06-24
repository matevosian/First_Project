import { React, useState } from 'react';
import './MiniStar.css';
import miniStar from '../../assets/icon/miniStar.svg';

export default function MiniStar () {
    const [stars, setStars] = useState([false, false, false, false, false]);

    const handleStarClick = (index) => {
        const newStars = [...stars];
        if (newStars[index]) {
            for (let i = index; i < stars.length; i++) {
                newStars[i] = false;
            }
        } else {
            for (let i = 0; i <= index; i++) {
                newStars[i] = true;
            }
        }
        setStars(newStars);
    };

    return (
        <div className='stars'>
            {stars.map((isActive, index) => (
                <img 
                    key={index}
                    src={miniStar} 
                    onClick={() => handleStarClick(index)} 
                    className={`miniStar${isActive ? 'Active' : 'Passive'}`} 
                    alt='star' 
                />
            ))}
        </div>
    );
}