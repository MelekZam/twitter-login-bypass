const targetNode = document.getElementById('react-root');
const config = { attributes: true, childList: true, subtree: true };
const callback = () => {
    let popup = document.querySelector('[role="dialog"]')
    if (popup){
        popup.remove()
        document.querySelector('html').style.overflow = 'scroll'
    }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);