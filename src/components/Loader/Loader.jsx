import React from 'react';
import './loader.css';

const Loader = () => {                              //css styled spinner, 4 rotating divs of different speed
    return (
        <div className="container">
            <div className="loader-spin">
                <div className="load-spin">
                    <div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
