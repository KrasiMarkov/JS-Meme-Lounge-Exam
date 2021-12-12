import { html } from '../lib.js';
import { getMyMemes } from '../api/data.js';
import { getUserData } from '../util.js';

const myProfileTemplate = (memes, userData) => html`
<section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
                <div class="user-content">
                    <p>Username: ${userData.username}</p>
                    <p>Email: ${userData.email}</p>
                    <p>My memes count: 2</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                <!-- Display : All created memes by this user (If any) --> 
                ${memes.length == 0 ? 
                html`<p class="no-memes">No memes in database.</p>`
                : memes.map(itemCard)}
            </div>
</section>`;
 

const itemCard = (meme) => html`
 <div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${meme.title}</p>
            <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
        </div>
             
         <div id="data-buttons">
            <a class="button" href="/details/${meme._id}">Details</a>
        </div>
    </div>
</div>`;


export async function myProfilePage(ctx) {
    const memes = await getMyMemes();
    const userData = getUserData();
    ctx.render(myProfileTemplate(memes, userData))
}
