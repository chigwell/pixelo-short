import React, { useState } from 'react';

function URLHandler() {
    const [inputUrl, setInputUrl] = useState('');
    const [encodedUrl, setEncodedUrl] = useState('');

    const handleEncodeUrl = () => {
        const encoded = btoa(inputUrl);
        setEncodedUrl(`${window.location.origin}/redirect/${encoded}`);
    };

    const handleRedirect = (encodedUrl) => {
        const decodedUrl = atob(encodedUrl.split('/').pop());
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
                    <a href={encodedUrl} target="_blank" rel="noreferrer">{encodedUrl}</a>
                    <button onClick={() => handleRedirect(encodedUrl)}>Go to URL</button>
                </div>
            )}
        </div>
    );
}

export default URLHandler;
