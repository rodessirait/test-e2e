import Delete from './model/model-deleted';

const deleted = new Delete();

fixture `Shopee Test - Delete Gist`
    .page `https://github.com/login`

test('Delete a public Gist', async t => {
    await t
        .maximizeWindow()
        .typeText(deleted.username, '****')
        .typeText(deleted.password, '****')
        .click(deleted.loginBtn)
        .click(deleted.profileIcon)
        .wait(1000)
        .click(deleted.yourGitsBtn)
        .wait(1000)
        .click(deleted.editCurrentGits)
        .click(deleted.deleteGist)
                
});
