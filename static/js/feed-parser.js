async function loadFeed(url, targetId) {
    try {
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`);
        const data = await response.json();
        
        let html = '<ul style="list-style-type: none; padding-left: 0;">';
        data.items.slice(0, 5).forEach(item => {
            html += `
                <li style="margin-bottom: 1rem; border-bottom: 1px dashed #FF00FF; padding-bottom: 0.5rem;">
                    <a href="${item.link}" 
                       style="color: #00FFFF; text-decoration: none;"
                       onmouseover="this.style.textShadow='0 0 5px #00FFFF'" 
                       onmouseout="this.style.textShadow='none'">
                        ${item.title}
                    </a>
                    <div style="font-size: 0.8rem; color: #888;">${new Date(item.pubDate).toLocaleDateString()}</div>
                </li>
            `;
        });
        html += '</ul>';
        
        document.getElementById(targetId).innerHTML = html;
    } catch (error) {
        document.getElementById(targetId).innerHTML = 
            `<div style="color: #FF00FF;">ERROR_LOADING_FEED [${error.message}]</div>`;
    }
}
