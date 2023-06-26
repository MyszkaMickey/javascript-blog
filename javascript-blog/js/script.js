'use strict';

function titleClickHandler(event){
    const clickedElement = this;
    console.log('Link was clicked!');

const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');

const activeArticles = document.querySelectorAll('.posts article.active');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
  link.addEventListener('click', titleClickHandler);
}