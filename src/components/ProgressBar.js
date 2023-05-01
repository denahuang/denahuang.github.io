import React, { useEffect, useState } from 'react';

const ProgressBar = ({ color }) => {

    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled)
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, []);

    const containerStyle = {
        height: "10px",
        background: "#DADADA",
        zIndex: "1",
        position: "fixed",
        width: "100%",
        // border: "1px #222233 solid"
    };

    const barStyle = {
        height: "100%",
        background: `#${color}`,
        width: `${scrollTop}%`,
        transition: "none"
    };

    return (
        <div style={containerStyle}>
            <div style={barStyle}>
            </div>
        </div>
    );
};

export default ProgressBar