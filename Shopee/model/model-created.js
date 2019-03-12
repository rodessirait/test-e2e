import { Selector } from 'testcafe';

export default class Create {
    constructor (){
        this.username = Selector('#login_field');
        this.password = Selector('#password');
        this.loginBtn = Selector('#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block');
        this.addNew = Selector('#user-links > li:nth-child(2) > details > summary > svg');
        this.newGist = Selector('#user-links > li:nth-child(2) > details > details-menu > a:nth-child(3)');
        this.gistDescription = Selector('#gists > input');
        this.fileName = Selector('#gists > div:nth-child(3) > div > div.file-header > div.input-group.gist-filename-input > input.form-control.filename.js-gist-filename.js-blob-filename');
        this.fieldGist = Selector('#gists > div.js-gist-file > div > div.commit-create.position-relative > div > div.CodeMirror-scroll > div.CodeMirror-sizer > div > div > div > div.CodeMirror-code > div > pre');
        this.publicGistBtn = Selector('#new_gist > div > div.form-actions > button:nth-child(1)');
    }
}