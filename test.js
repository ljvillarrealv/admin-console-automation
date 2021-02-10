import { LoginTasks } from './tasks/login'
import {Selector} from 'testcafe'
import { LoginQuestions } from './questions/login'
import { MESSAGE_TYPE } from './herlpers/enums/messageType'
import { PasswordRecoveryTask } from '../testcafe-luis/tasks/passwordRecovery'
import { PasswordRecoveryQuestions } from '../testcafe-luis/questions/passwordRecovery'
import { t } from 'testcafe'

const loginTasks = new LoginTasks
const loginQuestions = new LoginQuestions
const passwordRecoveryTask = new PasswordRecoveryTask
const passwordRecoveryQuestions = new PasswordRecoveryQuestions


fixture`Classic login testcases`
    .page`https://uat-adminconsole-bdb.novopayment.net/`


test('User nonexistent', async () => {
    await loginTasks.loginAttemp('admin', 'admin')
    await loginQuestions.validateErrorMessage(MESSAGE_TYPE.nonexistent)

})

test ('User Login_exitoso', async ()=> {
        await loginTasks.loginAttemp('lvilla','Wjmvo3')
        await loginQuestions.validateErrorMessage(MESSAGE_TYPE.userSuccess)
   
    })

test.only ('Go to Recovery', async () => {
    await loginTasks.recoveryAttemp()
    await passwordRecoveryQuestions.validateErrorMessage(MESSAGE_TYPE.screenRecovery)
    }
)

   