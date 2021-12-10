import { logout } from './api/data.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { allMemesPage } from './views/allMemes.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';



const root = document.querySelector("#main-content");
document.querySelector("#logoutBtn").addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/allMemes', allMemesPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);



updateUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/');
}

function updateUserNav() {
    const userData = getUserData();
    if (userData) {
        document.querySelector("#loginBtn").style.display = 'none';
        document.querySelector("#registerBtn").style.display = 'none';
        document.querySelector("#createBtn").style.display = 'inline-block';
        document.querySelector("#logoutBtn").style.display = 'inline-block';

    } else {
        document.querySelector("#loginBtn").style.display = 'inline-block';
        document.querySelector("#registerBtn").style.display = 'inline-block';
        document.querySelector("#createBtn").style.display = 'none';
        document.querySelector("#logoutBtn").style.display = 'none';
    }
}

