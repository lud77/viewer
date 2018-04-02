module.exports = {
    log: window.console.log,
    addEventListener: document.addEventListener.bind(document),
    addElement: (element) => document.body.appendChild(element),
    width: () => window.innerWidth,
    height: () => window.innerHeight
};
