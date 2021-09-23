import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([])
    useEffect(() => {
        fetch('./cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    return (
        <div>
            <h1>Shop my cosmetics</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic._id}
                    cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;