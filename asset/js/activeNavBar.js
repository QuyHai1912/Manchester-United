var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var categoryList = $$('.category--item');

categoryList.forEach((category) => {
        
        category.addEventListener('click', function() {
        var categoryActive = $('.category--item.active');
        if (categoryActive) {
            categoryActive.classList.remove('active');
        }
        this.classList.add('active');
    });
})
