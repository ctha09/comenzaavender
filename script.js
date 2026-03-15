function navigateTo(targetId) {
    const screens = document.querySelectorAll('.screen-overlay');
    screens.forEach(screen => {
        screen.style.opacity = '0';
        setTimeout(() => {
            screen.style.display = 'none';
            screen.classList.remove('active');
        }, 500);
    });

    const target = document.getElementById(targetId);
    setTimeout(() => {
        target.style.display = (targetId === 'gallery-screen') ? 'block' : 'flex';
        setTimeout(() => {
            target.style.opacity = '1';
            target.classList.add('active');
        }, 50);
    }, 550);
}

window.onload = () => {
    const bar = document.querySelector('.loader-bar');
    const logs = ["Initializing...", "Compiling UI...", "Finalizing...", "System Ready."];
    let i = 0;
    if(bar) bar.style.width = '100%';
    const interval = setInterval(() => {
        const el = document.getElementById('loading-logs');
        if(el) el.innerText = logs[i];
        i++;
        if(i >= logs.length) clearInterval(interval);
    }, 600);
    setTimeout(() => navigateTo('home-screen'), 3500);
};

function openExternal(url) {
    const container = document.getElementById('external-frame-container');
    document.getElementById('external-iframe').src = url;
    container.style.display = 'block';
}

function closeExternal() {
    document.getElementById('external-frame-container').style.display = 'none';
    document.getElementById('external-iframe').src = "";
}
