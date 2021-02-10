import {t} from 'testcafe'
import {PasswordRecovery} from '../ui/passwordRecovery'



export class PasswordRecoveryTasks extends PasswordRecovery {

    async attempFailed (identifier,email) {

        await t
            .typeText(this.input.identifier, identifier)
            .typeText(this.input.email, email)
            .click(this.button.next)


    }

}
