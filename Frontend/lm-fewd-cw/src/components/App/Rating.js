//note that this rating doesn't connect to the backend, it only changes value and stores it using useState

import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return <label>
                <input
                 type='radio' 
                 style={{ display:'none' }} 
                 value={ratingValue} 
                 onClick={()=> setRating(ratingValue)}
                 />
                <FaStar 
                className='star' 
                size={30} 
                color={ratingValue <= (hover || rating) ? "ffc107" : "e4e5e9"} 
                onMouseEnter={() => setHover(ratingValue)} 
                onMouseLeave={() => setHover(null)}/></label>})}
                <p>You have rated this item {rating} out of 5.</p> 
       </div>
}

export default StarRating;