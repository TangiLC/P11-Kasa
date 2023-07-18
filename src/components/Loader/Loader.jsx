import React from 'react';
import './loader.css';

const Loader = () => {
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
