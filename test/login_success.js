import { LoginTasks } from './tasks/login'
import { LoginQuestions } from './questions/login'
import { MESSAGE_TYPE } from './herlpers/enums/messageType'

const loginTasks = new LoginTasks
const loginQuestions = new LoginQuestions

fixture`Smoke Test Classic testcases`
    .page`https://uat-adminconsole-bdb.novopayment.net/`


test('User nonexistent', async () => {
    await loginTasks.loginAttemp('admin', 'admin')
    await loginQuestions.validateErrorMessage(MESSAGE_TYPE.nonexistent)

})

test ('User Login_exitoso', async ()=> {
        await loginTasks.loginAttemp('master','Tebca.456')
        await loginQuestions.validateErrorMessage(MESSAGE_TYPE.userSuccess)
    })

test ('Recovery Password', async () => {
    await 

}



)