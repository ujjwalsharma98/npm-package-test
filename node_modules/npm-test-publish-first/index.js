function providecss(options) {
    let images = document.querySelectorAll('.providecss');

    if (options.shadow_type === 'hard') {
        options.shadow_type = '0 px'
    } else {
        options.shadow_type = '15 px'
    }

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.2)`

        if (options.padding) {
            image.style.padding = '1em'
        }
    });
}

module.exports.providecss = providecss;