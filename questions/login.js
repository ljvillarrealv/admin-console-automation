import { t } from 'testcafe'
import { Login } from '../ui/login'
import { COPIES } from '../herlpers/enums/copies'

export class LoginQuestions extends Login {
    async validateErrorMessage(messageType) {
        switch (messageType) {
            case 'blocked':
                await t.expect(this.error.alert.innerText).eql(COPIES.userBlocked)
                break
            
            case 'suspended':
                await t.expect(this.error.alert.innerText).eql(COPIES.userSuspended)
                break

            case 'nonexistent':
                await t.expect(this.error.alert.innerText).eql(COPIES.userNonexistent)
                break

            case 'Login_exitoso':
                await t.expect(this.success.messageSucces.innerText).eql(COPIES.userLogin_exitoso)
                break

          
            default:
                console.log(`El tipo de mensaje ${messageType} no existe`)
                break
        }
        
    }
}
