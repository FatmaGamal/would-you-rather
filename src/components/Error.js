import React from 'react';

import './Error.css'

const Error = () => {
    return (
        <div className="error-body">
            <div className="error-msg">
                <div>404</div>
                <div>Looks like you made a typo, Please try again</div>
            </div>
        </div>
    );
}

export default Error;