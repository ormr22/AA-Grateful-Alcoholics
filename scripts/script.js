const tabs = document.querySelectorAll('.step-tab')
const tabsContainer = document.querySelector('.tab-container')
const tabContent = document.querySelectorAll('.step-content')

const btnHowItWorks = document.querySelector('.btn-how-it-works');
const contentHowItWorks = document.querySelector('.how-it-works-content');


console.log(btnHowItWorks);

btnHowItWorks.addEventListener('click', function() {
    contentHowItWorks.classList.toggle('how-it-works-content-revealed');
})


tabsContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.step-tab')
    console.log(clicked);

    //guard-clause
    if(!clicked) return;

    // Active tab
    tabs.forEach(tab => tab.classList.remove('active-tab'))
    clicked.classList.add('active-tab')

    // Remove content area
    tabContent.forEach(function(content) {
        content.classList.remove('active-content')
    })

    // Activate current content
    const current = document.querySelector(`.content--${clicked.dataset.tab}`)
    console.log(current);
    current.classList.add('active-content')
});
