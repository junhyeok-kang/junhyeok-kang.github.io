document.addEventListener('DOMContentLoaded', () => {
    // 탭 기능 구현
    const tabs = document.querySelectorAll('.tab-button');
    const grids = document.querySelectorAll('.portfolio-grid');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const target = tab.getAttribute('data-tab');

            grids.forEach(grid => {
                grid.style.display = 'none';
            });

            // 선택된 탭에 따라 해당 그리드 보여주기
            if (target === 'articles') {
                document.querySelector('.portfolio-grid.articles').style.display = 'grid';
            } else if (target === 'photos') {
                document.querySelector('.portfolio-grid.photos').style.display = 'grid';
            } else if (target === 'supporters') {
                document.querySelector('.portfolio-grid.supporters').style.display = 'grid';
            } else {
                document.querySelector('.portfolio-grid.all').style.display = 'grid';
            }
        });
    });

    // 부드러운 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});