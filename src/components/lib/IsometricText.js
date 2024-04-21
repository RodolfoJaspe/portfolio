import React, { useEffect, useRef } from 'react';
import './IsometricText.css'; // Make sure the CSS path is correct

const IsometricText = ({ text, mainColor, sideColor, fontSize }) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            let shadow = '';
            for (let i = 0; i < 10; i++) {
                shadow += `${shadow ? ',' : ''}${-i * 1}px ${i * 1}px 0 ${sideColor}`;
            }
            textRef.current.style.textShadow = shadow;
        }
    }, [sideColor, text]); // also re-run when text changes

    // Splitting text into letters and wrapping each in a span with animation
    const letters = text.split('').map((char, index) => (
        <span key={index} className="hop">{char}</span>
    ));

    return (
        <div 
            ref={textRef}
            style={{
                fontFamily: "GoodTimes",
                position: "relative",
                color: mainColor,
                fontWeight: "700",
                fontSize: fontSize,
                lineHeight: "0.9em",
                letterSpacing: "5px",
                textAlign: "left",
                transform: "rotate(-15deg) skew(10deg)",
                marginBottom: "10vw",
            }}>
            {letters}
        </div>
    );
};

export default IsometricText;
