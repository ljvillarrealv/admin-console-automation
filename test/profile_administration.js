import {t} from 'testcafe'
import {ProfileAdministration} from '../ui/profile_administration'
import {ProfileAdministrationTasks} from '../tasks/profileAdministration'
import { LoginTasks } from '../tasks/login'
import {LoginQuestions} from '../questions/login'

const loginTasks = new LoginTasks
const loginQuestions = new LoginQuestions
const profileAdministration = new ProfileAdministration
const profileAdministrationTasks = new ProfileAdministrationTasks



fixture `Profile Administration`
    .page `https://uat-adminconsole-bdb.novopayment.net/`


    test ('Created User', async () => {
       await t.maximizeWindow()
        await loginTasks.loginAttemp('LVILLA02','Tebca.456')
        await profileAdministrationTasks.attempCreatedUser('Luis', 'Jose','Villa', 'Velas', '73895555',
            'lvila003', 'ljvillarrealv003@yopmail.com', '33')

    }
    
    
    
    )