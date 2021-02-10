import { t } from 'testcafe'
import { COPIES } from '../herlpers/enums/copies'
import { PasswordRecovery } from '../ui/passwordRecovery'
import { getCurrentURL } from '../herlpers/getActualUrl'
import { ROUTES } from '../herlpers/enums/routes'

export class PasswordRecoveryQuestions extends PasswordRecovery {

    async validateRecoveryPage() {
        await t.expect(getCurrentURL()).contains(ROUTES.PASSWORD_RECOVERY)
        await t.expect(this.successR.messageSuccesRecovery.innerText).eql(COPIES.screenRecovery)
    }

    async ValidateMessage(messageType) {
        await t.expect(this.successR.messageInvalidIdOrEmail.exists).ok()

        if (messageType=== 'invalid') {

            await t.expect(this.successR.messageInvalidIdOrEmail.innerText).eql(COPIES.recovery.userRecoveryIncorrect)

                 } else {

                    await t.expect(this.successR.messageInvalidIdOrEmail.innerText).eql(COPIES.recovery.userRecoveryCorrect)
            
        }
        
        
    }
}
