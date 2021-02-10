import { LoginTasks } from '../tasks/login'
import { PasswordRecoveryQuestions } from '../questions/passwordRecovery'
import {PasswordRecoveryTasks } from '../tasks/passwordRecovery'
import { t } from 'testcafe'

const loginTasks = new LoginTasks
const passwordRecoveryQuestions = new PasswordRecoveryQuestions
const passwordRecoveryTasks = new PasswordRecoveryTasks


fixture `Recovery User Login`
.page `https://uat-adminconsole-bdb.novopayment.net/`

test('Go to Recovery', async () => {
    await loginTasks.recoveryAttemp()
    await passwordRecoveryQuestions.validateRecoveryPage()
})

test('Recovery attemp failed', async () => {
    await t.navigateTo('https://uat-adminconsole-bdb.novopayment.net/recuperarContrasena')
    await passwordRecoveryTasks.attempFailed('788555','noposee@posee.com')
    await passwordRecoveryQuestions.ValidateMessage('invalid')
})

test('Recovery attemp Success', async () => {
    await t.navigateTo('https://uat-adminconsole-bdb.novopayment.net/recuperarContrasena')
    await passwordRecoveryTasks.attempFailed('738955','ljvillarrealv@gmail.com')
    await passwordRecoveryQuestions.ValidateMessage('valid')
})
