document.addEventListener(DOMContentLoaded, function() {
    const images = document.querySelectorAll(.grid img);

    images.forEach(img = {
        img.addEventListener(click, () = {
            const modal = document.createElement(div);
            modal.classList.add(modal);
            modal.innerHTML = `img src=${img.src} class=modal-image`;
            document.body.appendChild(modal);

            modal.addEventListener(click, () = {
                modal.remove();
            });
        });
    });
});
