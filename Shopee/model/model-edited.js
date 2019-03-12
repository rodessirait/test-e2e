import { Selector } from 'testcafe';

export default class Edit {
    constructor (){
        this.username = Selector('#login_field');
        this.password = Selector('#password');
        this.loginBtn = Selector('#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block');
        this.profileIcon = Selector('#user-links > li:nth-child(3) > details > summary > img');
        this.yourGitsBtn = Selector('#user-links > li:nth-child(3) > details > details-menu > a:nth-child(9)');
        this.gistDescription = Selector('#gists > input');
        this.fileName = Selector('#gists > div:nth-child(3) > div > div.file-header > div.input-group.gist-filename-input > input.form-control.filename.js-gist-filename.js-blob-filename');
        this.fieldGist = Selector('#gists > div.js-gist-file > div > div.commit-create.position-relative > div > div.CodeMirror-scroll > div.CodeMirror-sizer > div > div > div > div.CodeMirror-code > div > pre');
        this.publicGistBtn = Selector('#new_gist > div > div.form-actions > button:nth-child(1)');
        this.editCurrentGits = Selector('#gist-pjax-container > div.gisthead.pagehead.repohead.instapaper_ignore.readability-menu.experiment-repo-nav.mb-4 > div > div > ul > li:nth-child(1) > div > a > strong');
        this.editBtn = Selector('#gist-pjax-container > div.gisthead.pagehead.repohead.instapaper_ignore.readability-menu.experiment-repo-nav.mb-4 > div > div.mb-3.d-flex > ul > li:nth-child(1) > a');
        this.updateBtn = Selector('#edit_gist_95109819 > div > div.form-actions > button');
    }
}