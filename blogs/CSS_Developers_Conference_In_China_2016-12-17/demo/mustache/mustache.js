var root = document.documentElement;

document.addEventListener('mousemove', function(event) {
    var x = event.clientX / innerWidth,
        y = event.clientY / innerHeight;

    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
});