import {t} from 'testcafe'
import {ProfileAdministration} from '../ui/profile_administration'

export class ProfileAdministrationTasks extends ProfileAdministration {


    async attempCreatedUser (firstNameUser, secondNameUser,lastName, surName, nationalId,
         idNetwork, emailUserCreated, profileUserCreated) {

        await t
                .click(this.button.Administrativo)
                .click(this.button.usuarios)
                .click(this.button.CrearUsuario)
                .click(this.input.firstNameUser, firstNameUser)
                .click(this.input.secondNameUser, secondNameUser)
                .click(this.input.lastName, lastName)
                .click(this.input.surName, surName)
                .click(this.input.nationalId, nationalId)
                .click(this.input.idNetwork, idNetwork)
                .click(this.input.emailUserCreated, emailUserCreated)
                .click(this.button.statusSelection)
                .click(this.button.statusActive)
                .click(this.input.profileUserCreated, profileUserCreated)
                .click(this.button.SavedCreatedUser)

    }
}