import {Selector} from 'testcafe'

export class ProfileAdministration {

    constructor (){

        this.button ={

            Administrativo: Selector('li#Administrativo'),
            usuarios: Selector('a[href*="/administrativo/usuarios/"]'),
            CrearUsuario: Selector('#consultForm > div:nth-child(2) > div:nth-child(3) > a > button'),
            statusSelection: Selector('#userStatus'),
            statusActive: Selector('#userStatus').withAttribute('value','402881436e66c492016e66c63770001a'),
            statusInactive: Selector('#userStatus').withAttribute('value','402881436e66c492016e66c636d10019'),
            SavedCreatedUser: Selector('#createdUser')
        }
        
        this.input = {

            firstNameUser : Selector('#firstName'),
            secondNameUser: Selector ('#middleName'),
            lastName: Selector ('#lastName'),
            surName: Selector ('#surName'),
            nationalId: Selector ('#nationalId'),
            idNetwork: Selector('#id'),
            emailUserCreated: Selector('#email'),
            
            profileUserCreated: Selector ('role')




        }
    }



}
