import React from 'react';

function CV() {
        const handleClick = () => {
                const link = document.createElement('a');
                link.href = '/path/to/your/cv.pdf'; // 실제 PDF 파일 경로
                link.download = 'cv.pdf'; // 다운로드할 파일 이름
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
