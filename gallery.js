function imageGallery(){
    const highlight = document.querySelector('.gallery-highlight');
    const previews = document.querySelectorAll('.image-preview img');

    previews.forEach(preview => {
        preview.addEventListener('click', function(){
            const bigSrc = this.src;
            highlight.src = bigSrc;
            previews.forEach(preview => preview.classList.remove('image-active'));
            preview.classList.add('image-active');
        })
    })
}

imageGallery();