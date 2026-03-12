:root {
    --primary: #00f2fe;
    --secondary: #4facfe;
    --bg-dark: #0a0e17;
    --card-bg: rgba(22, 30, 45, 0.9);
    --text-light: #ffffff;
    --text-gray: #a0aec0;
}

* { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-dark);
    color: var(--text-light);
    overflow-x: hidden;
}

body.loading-active { overflow: hidden; height: 100vh; }

#main-content {
    opacity: 0;
    transition: opacity 1s ease-in;
    background-image: 
        radial-gradient(circle at 80% 20%, rgba(0, 242, 254, 0.1), transparent 30%),
        radial-gradient(circle at 20% 80%, rgba(79, 172, 254, 0.08), transparent 30%),
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 100% 100%, 100% 100%, 50px 50px, 50px 50px;
    background-attachment: fixed;
}

/* --- PRELOADER --- */
#preloader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 99999; display: flex; justify-content: center; align-items: center; }
.preloader-panel { position: absolute; top: 0; width: 50.5%; height: 100%; background: var(--bg-dark); transition: transform 1.2s cubic-bezier(0.77, 0, 0.175, 1); z-index: -1; }
.left-panel { left: 0; border-right: 1px solid rgba(0, 242, 254, 0.1); }
.right-panel { right: 0; border-left: 1px solid rgba(0, 242, 254, 0.1); }
.preloader-content { text-align: center; transition: opacity 0.5s; z-index: 100000; }
.gyroscope-container { width: 100px; height: 100px; margin: 0 auto 20px; position: relative; }
.gyro-ring { position: absolute; border-radius: 50%; border: 2px solid transparent; width: 100%; height: 100%; }
.gyro-ring.outer { border-top-color: var(--primary); animation: rotate 2s linear infinite; }
.gyro-ring.inner { width: 70%; height: 70%; top: 15%; left: 15%; border-bottom-color: var(--secondary); animation: rotateRev 3s linear infinite; }
.gyro-pulse { width: 15%; height: 15%; background: var(--primary); position: absolute; top: 42.5%; left: 42.5%; border-radius: 50%; box-shadow: 0 0 15px var(--primary); animation: pulse 2s infinite; }

.logo-loader { font-size: 1.5rem; font-weight: 800; color: #fff; text-transform: uppercase; margin-bottom: 5px; }
.loader-phrase { color: var(--primary); font-size: 0.8rem; letter-spacing: 1px; }
.loader-bar-container { width: 180px; height: 2px; background: rgba(255,255,255,0.1); margin: 20px auto 0; overflow: hidden; }
.loader-bar { width: 0%; height: 100%; background: var(--primary); animation: loadBar 3s ease-in forwards; }

@keyframes rotate { to { transform: rotate(360deg); } }
@keyframes rotateRev { to { transform: rotate(-360deg); } }
@keyframes loadBar { to { width: 100%; } }
@keyframes pulse { 0%, 100% { transform: scale(0.8); opacity: 0.5; } 50% { transform: scale(1.1); opacity: 1; } }

/* CLASES TRANSICION */
.loaded .left-panel { transform: translateX(-100%); }
.loaded .right-panel { transform: translateX(100%); }
.loaded .preloader-content { opacity: 0; pointer-events: none; }
.loaded #main-content { opacity: 1; }

/* --- NAVBAR --- */
nav { display: flex; justify-content: space-between; align-items: center; padding: 20px 8%; position: fixed; width: 100%; z-index: 2000; background: rgba(10, 14, 23, 0.9); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255,255,255,0.05); }
.brand-name { font-weight: 800; color: var(--primary); text-transform: uppercase; }
.nav-links { display: flex; list-style: none; gap: 25px; }
.nav-links a { color: var(--text-gray); text-decoration: none; font-size: 0.9rem; font-weight: 500; }
.btn-nav { border: 1.5px solid var(--primary); padding: 8px 20px; border-radius: 10px; color: var(--primary) !important; font-weight: 700; }

/* --- HERO --- */
.hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 180px 20px 100px; position: relative; }
.hero-content { max-width: 800px; position: relative; z-index: 10; }
.hero h1 { font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: 800; line-height: 1.1; margin-bottom: 25px; }
.hero h1 span { background: linear-gradient(to right, var(--primary), var(--secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.hero p { font-size: clamp(1rem, 3vw, 1.2rem); color: var(--text-gray); margin-bottom: 35px; max-width: 600px; margin: 0 auto 35px; }
.btn-primary { background: linear-gradient(45deg, var(--primary), var(--secondary)); color: #000; padding: 18px 45px; border-radius: 50px; text-decoration: none; font-weight: 800; display: inline-block; box-shadow: 0 5px 15px rgba(0, 242, 254, 0.3); }

/* --- SECCIONES --- */
.services, .pricing { padding: 100px 8%; }
.section-title { text-align: center; margin-bottom: 60px; font-size: clamp(2rem, 5vw, 3rem); font-weight: 800; }
.container { max-width: 1200px; margin: 0 auto; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }

/* --- CARDS --- */
.service-card, .pricing-card { background: var(--card-bg); padding: 50px 30px; border-radius: 25px; border: 1px solid rgba(255,255,255,0.08); text-align: center; transition: 0.4s ease; }
.service-card i { font-size: 3rem; color: var(--primary); margin-bottom: 20px; display: block; }
.pricing-card.featured { border-color: var(--primary); transform: scale(1.05); position: relative; z-index: 5; }
.badge { position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: var(--primary); color: #000; padding: 5px 20px; border-radius: 20px; font-weight: 800; font-size: 0.8rem; }

.pricing-options { display: flex; flex-direction: column; gap: 12px; margin: 20px 0; }
.option { padding: 12px; border-radius: 12px; background: rgba(255,255,255,0.04); }
.option.annual-offer { border: 1.5px solid var(--primary); background: rgba(0, 242, 254, 0.08); }
.label { font-size: 0.7rem; text-transform: uppercase; color: var(--text-gray); display: block; margin-bottom: 4px; }
.price-big { font-size: 2.2rem; font-weight: 800; color: #fff; }
.price-small { font-size: 1.3rem; font-weight: 700; color: var(--text-gray); }
.save-badge { display: inline-block; background: var(--primary); color: #000; font-weight: 800; font-size: 0.7rem; padding: 4px 10px; border-radius: 6px; margin-top: 6px; }
.separator { font-size: 0.8rem; color: var(--text-gray); font-style: italic; margin: 4px 0; }

.pricing-card ul { list-style: none; text-align: left; margin: 25px 0; padding: 0; }
.pricing-card li { font-size: 0.9rem; color: var(--text-gray); margin-bottom: 12px; display: flex; align-items: center; gap: 10px; line-height: 1.4; }
.pricing-card li i { color: var(--primary); font-size: 0.85rem; flex-shrink: 0; }

.btn-plan { display: block; padding: 15px; border: 2px solid var(--primary); color: var(--primary); text-decoration: none; border-radius: 15px; font-weight: 700; transition: 0.3s; }
.btn-plan:hover, .pro-btn { background: var(--primary); color: #000; }

.reveal { opacity: 0; transform: translateY(30px); transition: 0.8s ease-out; }
.reveal.active { opacity: 1; transform: translateY(0); }

footer { padding: 60px; text-align: center; color: var(--text-gray); border-top: 1px solid rgba(255,255,255,0.05); }

@media (max-width: 1024px) { .grid-3 { grid-template-columns: repeat(2, 1fr); } .pricing-card.featured { transform: scale(1); } }
@media (max-width: 768px) { .grid-3 { grid-template-columns: 1fr; } .nav-links { display: none; } .hero { padding-top: 150px; } }
