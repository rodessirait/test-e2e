import { Selector } from 'testcafe';

export default class Delete {
    constructor (){
        this.username = Selector('#login_field');
        this.password = Selector('#password');
        this.loginBtn = Selector('#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block');
        this.profileIcon = Selector('#user-links > li:nth-child(3) > details > summary > img');
        this.yourGitsBtn = Selector('#user-links > li:nth-child(3) > details > details-menu > a:nth-child(9)');
        this.editCurrentGits = Selector('#gist-pjax-container > div.gisthead.pagehead.repohead.instapaper_ignore.readability-menu.experiment-repo-nav.mb-4 > div > div > ul > li:nth-child(1) > div > a > strong');
        this.deleteGist = Selector('#gist-pjax-container > div.gisthead.pagehead.repohead.instapaper_ignore.readability-menu.experiment-repo-nav.mb-4 > div > div.mb-3.d-flex > ul > li:nth-child(2) > form > button');
    }
}