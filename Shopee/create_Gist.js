import Create from './model/model-created';

const create = new Create();

fixture `Shopee Test - Create Gist`
    .page `https://github.com/login`

test('Create a public Gist', async t => {
    await t
        .maximizeWindow()
        .typeText(create.username, '****')
        .typeText(create.password, '****')
        .click(create.loginBtn)
        .click(create.addNew)
        .wait(2000)
        .click(create.newGist)
        .wait(2000)
        .typeText(create.gistDescription, 'Shopee End to End Test')
        .typeText(create.fileName, 'shopee-test-e2e.md')
        .typeText(create.fieldGist, 'this snippet just for end to end test')
        .wait(1000)
        .click(create.publicGistBtn)
        .wait(5000)
});
