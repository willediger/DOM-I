const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//grab contents of nav a link text into sorted array from siteContent
const navAContents = [];
Object.entries(siteContent.nav)
  .filter(e => e[0].includes('nav-item'))
  .sort((a, b) => a[0] - b[0])
  .forEach(e => navAContents.push(e[1]));

//all a tags in the header nav
const nav = document.querySelectorAll('header nav a');

//set text for each a tag in header nav based on nav contents
nav.forEach((e, i) => e.textContent = navAContents[i]);


//h1 tag inside cta. s/b only one h1 tag, but just to make sure we select the parent classes tree
const h1 = document.querySelector('.cta .cta-text h1');

// //create html string to split the h1 into multiple lines with br's
const h1Contents = siteContent.cta.h1.split(' ')

//creating an array of textNodes for each line of text in h1
const h1LineTextNodes = [];
h1Contents.forEach(e => h1LineTextNodes.push(document.createTextNode(e)));

//loops through h1LineTextNodes, appends the new line, and a br element after it, unless it's the last line.
for (let i = 0; i < h1LineTextNodes.length; i++) {
  h1.appendChild(h1LineTextNodes[i]);
  if (i < h1LineTextNodes.length - 1) {
    h1.appendChild(document.createElement('br'));
  }
}


//button inside call to action
const ctaButton = document.querySelector('.cta .cta-text button');

ctaButton.textContent = siteContent.cta.button;

//img inside call to action
const ctaImg = document.querySelector('#cta-img');

ctaImg.src = siteContent.cta["img-src"];


//grab all h4's that are inside .main-content & .text-content tree
const mainContentH4s = document.querySelectorAll('.main-content .text-content h4');

mainContentH4s[0].textContent = siteContent["main-content"]["features-h4"];
mainContentH4s[1].textContent = siteContent["main-content"]["about-h4"];
mainContentH4s[2].textContent = siteContent["main-content"]["services-h4"];
mainContentH4s[3].textContent = siteContent["main-content"]["product-h4"];
mainContentH4s[4].textContent = siteContent["main-content"]["vision-h4"];


//grab all p's that are inside .main-content & .text-content tree
const mainContentPs = document.querySelectorAll('.main-content .text-content p');

mainContentPs[0].textContent = siteContent["main-content"]["features-content"];
mainContentPs[1].textContent = siteContent["main-content"]["about-content"];
mainContentPs[2].textContent = siteContent["main-content"]["services-content"];
mainContentPs[3].textContent = siteContent["main-content"]["product-content"];
mainContentPs[4].textContent = siteContent["main-content"]["vision-content"];
