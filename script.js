function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('ativo');
    
    // verificar se existe
    if (tabMenu.length && tabContent.length){
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo');
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        })
    }
}

initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';

    // verificar se existe
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
        
        function activeAccordion(){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }
        
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}

initAccordion();

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;
    
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    
        // forma alternativa
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth'
        // });
    
    }
    
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

initScrollSuave();

function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll');
    // verifica se sections existe
    if (sections.length) {
        // pega 60% da altura da tela
        const windowMetade = window.innerHeight * 0.6;
        
        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                if (sectionTop < 0) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            });
        }
        // anima pelo menos uma vez para a primeira sessão do site já começar animando
        animaScroll();
        
        window.addEventListener('scroll', animaScroll)
    }
}

initAnimacaoScroll();