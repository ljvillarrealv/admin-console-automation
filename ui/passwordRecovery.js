import {Selector} from 'testcafe'

export class PasswordRecovery {

    constructor() {

        this.input ={
            identifier: Selector('input#natId'),
            email: Selector('input').withAttribute('id','email')
        }
    

        this.button = {

            next: Selector('button#next'),
            cancel: Selector('a').withText('Cancelar')

        }

        this.successR ={

            messageSuccesRecovery: Selector ('.login-msg-title'),
            messageInvalidIdOrEmail: Selector('.alert-dismissible').withAttribute('role','alert')
        }
    }



}