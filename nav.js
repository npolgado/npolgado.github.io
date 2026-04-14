(function () {
    const filename = window.location.pathname.split('/').pop() || 'index.html';

    const links = [
        { href: 'index.html', label: 'about' },
        { href: 'notes.html', label: 'notes' },
        { href: 'papers.html', label: 'research' },
        { href: 'music.html', label: 'music' },
        { href: 'https://npolgado.github.io/Oversteer', label: 'oversteer' },
    ];

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    links.forEach(({ href, label }) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = href;
        a.textContent = label;
        if (filename === href) {
            a.className = 'active';
        }
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    document.currentScript.replaceWith(nav);
})();
