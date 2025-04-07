import React from 'react';

function CV() {
        const handleClick = () => {
                const link = document.createElement('a');
                link.href = '/path/to/your/cv.pdf'; 
                link.download = 'cv.pdf'; 
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
        };
    return (
        <div>
                <button onClick={handleClick}>Download CV</button>
        </div>
    );
}

export default CV;
