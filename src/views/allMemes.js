import { getAll } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';



const allMemesTemplate = (memes) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
        <div id="memes">
            ${memes.length == 0 
            ? html`<p class="no-memes">No memes in database.</p>`
            : memes.map(itemCard)}    
		</div>
</section>`;


const itemCard = (meme) => html`
 <div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">Debugging</p>
            <img class="meme-image" alt="meme-img" src=${meme.imgUrl}>
        </div>
        <div id="data-buttons">
            <a class="button" href="#">Details</a>
        </div>
    </div>
</div>`;

export async function allMemesPage(ctx) {
    const memes = await getAll();
    const userData = getUserData();
    isLogged = userData != null;
    ctx.render(allMemesTemplate(memes));
}
