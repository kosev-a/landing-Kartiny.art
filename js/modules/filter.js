const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        portfolioBlock = document.querySelectorAll('.portfolio-block'),
        no = document.querySelector('.portfolio-no');

    function bindActionToBtn(markType) {
        const btn = menu.querySelector('.' + markType);
        btn.addEventListener('click', () => {
            portfolioBlock.forEach(mark => {
                mark.style.display = 'none';
                mark.classList.remove('animated', 'fadeIn');
            });

            no.style.display = 'none';
            no.classList.remove('animated', 'fadeIn');

            let sumPicture = 0;
            portfolioBlock.forEach(mark => {
                if (mark.classList.contains(markType)) {
                    mark.style.display = 'block';
                    mark.classList.add('animated', 'fadeIn');

                    sumPicture++;
                }
            });

            // console.log(sumPicture);
            if (sumPicture === 0) {
                no.style.display = 'block';
                no.classList.add('animated', 'fadeIn');
            }
        });

    }

    bindActionToBtn('all');
    bindActionToBtn('lovers');
    bindActionToBtn('chef');
    bindActionToBtn('girl');
    bindActionToBtn('guy');
    bindActionToBtn('grandmother');
    bindActionToBtn('granddad');

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName === 'LI') {
            items.forEach(btn => {
                btn.classList.remove('active');
            });
            target.classList.add('active');
        }
    });




};

export default filter;