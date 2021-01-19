import React from 'react';
import '../../../design/css/Main.scss'


const Main = ({children }) => {

    return (
        <>
            <div className="Main">
                {children}
            </div>
        </>
    )
}

export default Main
