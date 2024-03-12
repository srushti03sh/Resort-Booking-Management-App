import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";
import "./PButton.css"

function PButton() {

    useEffect(() => {
        const handleScroll = () => {
            const pos = window.scrollY;
            const calcHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const newScrollValue = Math.round((pos * 100) / calcHeight);
            setScrollValue(newScrollValue);
            if (pos > 100) {
                document.getElementById('progress').style.display = 'grid';
            } else {
                document.getElementById('progress').style.display = 'none';
            }
        };
        const scrollToTop = () => {
            document.documentElement.scrollTop = 0;
        };
        window.addEventListener('scroll', handleScroll);
        document.getElementById('progress').addEventListener('click', scrollToTop);
        // Cleanup the event listeners when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.getElementById('progress').removeEventListener('click', scrollToTop);
        };
    }, []);
    const [scrollValue, setScrollValue] = useState(0)

    return (
        <>

            <div
                id="progress"
                className="scroll-top scroll-to-target"
                data-target="html"
                style={{
                    background: `conic-gradient(#aa8453 ${scrollValue}%, #222 ${scrollValue}%)`,
                    display: 'none', // Initially hide the button
                }}
            >
                <div id="progress-value">
                    <MdKeyboardArrowUp />
                </div>
            </div>
        </>
    )
}

export default PButton
