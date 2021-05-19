import elements from './base.js'

const hideMenu = () => {
    
    const childs = elements.menu.querySelectorAll('.menu > *');
    
    for (let i= 0; i < childs.length;i++) {
        childs[i].style.animation = `slideout .${i + 2}s ease-in-out`
        childs[i].style.animationFillMode = 'forwards'
    }

    elements.sectionMenu.style.width = '15vw';
    elements.sectionMenuIcon.style.transitionDuration = '1s';
    elements.sectionMenuIcon.style.opacity = '1';

    elements.floatIcon.style.opacity = '1';
    elements.floatIcon.style.transitionDuration = '1.3s';
    elements.floatIcon.style.display = 'block';


}



const showMenu = () => {
    elements.sectionMenu.style.width = '80vw';
    elements.sectionMenuIcon.style.opacity = '0';
    
    elements.floatIcon.style.transitionDuration = '.1s';
    elements.floatIcon.style.display = 'none';

    //elements.floatIcon.style.transitionDuration = '1.5s';





    const childs = elements.menu.querySelectorAll('.menu > *');
    
    for (let i= 0; i < childs.length;i++) {
        childs[i].style.animation = `slidein .${i + 2}s ease-in-out`;
        childs[i].style.animationFillMode = 'forwards';
    }
    

}

const renderSection = (sectionsTargetName) => {
    elements.sectionTitle.innerHTML = sectionsTargetName;

    elements.section.style.animation = `slideRight .9s ease-in`;
    elements.section.style.animationFillMode = 'forwards';

}

elements.sectionsTarget.forEach( element => {
    element.addEventListener('click', e => {
        
        hideMenu()

        elements.logoImg.style.width = '18rem';
        let name = e.target.innerHTML

        renderSection(name)
    })
});


elements.sectionMenuIcon.addEventListener('click', e => {
    console.log('click')
    elements.sectionMenuIcon.style.transitionDuration = '.2s';

    showMenu();

    elements.logoImg.style.width = '20vw';

    elements.section.style.animation = `slideLeft 550ms ease-out`;
    elements.section.style.animationFillMode = 'forwards';

});

