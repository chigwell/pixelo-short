import React, { useState } from 'react';

function URLHandler() {
    const [inputUrl, setInputUrl] = useState('');
    const [encodedUrl, setEncodedUrl] = useState('');

    const handleEncodeUrl = () => {
        const encoded = btoa(inputUrl);  // 'btoa' for base64 encoding
        setEncodedUrl(`${window.location.origin}/?encoded=${encoded}`);
    };

    const handleRedirect = (encodedUrl) => {
        const decodedUrl = atob(encodedUrl.split('/').pop());  // 'atob' for base64 decoding
        window.location.href = decodedUrl;
    };

    return (
        <div>
            <input
                type="text"
                value={inputUrl}
                onChange={e => setInputUrl(e.target.value)}
                placeholder="Enter URL"
            />
            <button onClick={handleEncodeUrl}>Encode URL</button>
            {encodedUrl && (
                <div>
                    <p>Encoded URL: {encodedUrl}</p>
                    <button onClick={() => handleRedirect(encodedUrl)}>Go to URL</button>
                </div>
            )}
        </div>
    );
}

export default URLHandler;
