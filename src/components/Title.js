import React from 'react';
import './Title.scss';

const Title = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="focus"></div>
                <div className="mask">
                    <div className="text">
                        <span className='m'>M</span>
                        <span className='o1'>o</span>
                        <span className='o2'>o</span>
                        <span className='g'>g</span>
                        <span className='l'>l</span>
                        <span className='e'>e</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Title;