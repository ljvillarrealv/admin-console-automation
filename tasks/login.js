import { t } from 'testcafe'
import { Login } from '../ui/login'

export class LoginTasks extends Login {

    async loginAttemp(username, password) {
        await t
            .typeText(this.input.username, username)
            .typeText(this.input.password, password)
            .click(this.button.login)
    }

    async recoveryAttemp() {

        await t.click(this.button.recovery_login)


    }
}