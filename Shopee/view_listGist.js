import View from './model/model-viewed';

const view = new View();

fixture `Shopee Test - View Gist`
    .page `https://github.com/login`

test('Delete a public Gist', async t => {
    await t
        .maximizeWindow()
        .typeText(view.username, '****')
        .typeText(view.password, '****')
        .click(view.loginBtn)
        .click(view.profileIcon)
        .wait(1000)
        .click(view.yourGitsBtn)
        .wait(1000)
        .click(view.listGist)
        .wait(5000)     
});
