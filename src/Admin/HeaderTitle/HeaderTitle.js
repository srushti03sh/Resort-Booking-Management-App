import React from 'react'
import "./HeaderTitle.css"

function HeaderTitle(props) {
    return (
        <>
            <div className="header-title">
                <h4>{props.header}</h4>
            </div>
        </>
    )
}

export default HeaderTitle
