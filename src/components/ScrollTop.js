import React, { useCallback, useState } from 'react';
import './ScrollTop.scss';

const ScrollTop = () => {
    const [ScrollTop, setScrollTop] = useState(null);


    const onClickTop = useCallback(
        () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            setScrollTop();
        },
        []
    )

    return (
        <div>
            <button
                className='top_btn'
                onClick={onClickTop}
            >
                ▲
            </button>
        </div>
    );
};

export default ScrollTop;