const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');
const locs = document.querySelectorAll('.mapcontainer');
const tooltip = document.querySelector('.tooltip')

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

locs.forEach(loc => {
    loc.addEventListener('mousemove', function(e) {
        tooltip.innerText = this.dataset.title;
        tooltip.style.top = (e.y + 20) + 'px';
        tooltip.style.left = (e.x + 20) + 'px';
    })

    loc.addEventListener('mouseenter', function() {
        tooltip.style.display = 'block'
    })
    loc.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none'
    })
    loc.addEventListener('click', function() {
        window.location.href = this.dataset.link
    })
});

const element = document.querySelector('path');
element.classList.add('locs');