import { Selector } from 'testcafe'

export class Login {
    constructor() {
        this.input = { 
            username: Selector('input[name="username"]'),
            password: Selector('body > div.wrapp > div > div > div.formulario.shadow.p-3.mb-1.bg-white.rounded > form > div:nth-child(2) > div > input')
        }
        this.button = {
            login: Selector('input.btn'), 
            recovery_login: Selector('b').withText('contraseña')
        }
                   
        this.error = {
            alert: Selector('div').withAttribute('role', 'alert')
        }
        this.success ={
            messageSucces: Selector('li').withAttribute('aria-current','page'),
           
        
        }
    }
} 