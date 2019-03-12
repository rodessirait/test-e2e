import Edit from './model/model-edited';

const edit = new Edit();

fixture `Shopee Test - Edit Gist`
    .page `https://github.com/login`

test('Edit a public Gist', async t => {
    await t
        .maximizeWindow()
        .typeText(edit.username, '****')
        .typeText(edit.password, '****')
        .click(edit.loginBtn)
        .click(edit.profileIcon)
        .wait(1000)
        .click(edit.yourGitsBtn)
        .wait(1000)
        .click(edit.editCurrentGits)
        .click(edit.editBtn)
        .pressKey('ctrl+a delete')
        .typeText(edit.gistDescription, ' Update')
        .typeText(edit.fileName, ' update')
        .wait(1000)
        .click(edit.updateBtn)
        .wait(5000)
});
