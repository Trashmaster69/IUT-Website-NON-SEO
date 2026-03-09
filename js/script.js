document.addEventListener('DOMContentLoaded', () => {
    // Get current path for clean URLs
    let path = window.location.pathname;
    let page = path.split("/").pop();
    
    // Default to 'home' if empty (like when visiting the root /)
    if (!page || page === "" || page === "index.html") {
        page = "home";
    }

    // Mapping rules based on the clean URLs
    const navMapping = {
        "home": "nav-home",
        "about": "nav-about",
        "academics": "nav-academics",
        "admission": "nav-admission",
        "campus": "nav-campus",
        // Fallbacks for direct .html access
        "about.html": "nav-about",
        "academics.html": "nav-academics",
        "admission.html": "nav-admission",
        "campus.html": "nav-campus"
    };

    const activeId = navMapping[page];
    if (activeId) {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        
        // Add active class to the current page's nav item
        const activeNav = document.getElementById(activeId);
        if (activeNav) {
            activeNav.classList.add("active");
        }
    }
});
