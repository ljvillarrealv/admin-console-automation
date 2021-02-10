import { ClientFunction } from 'testcafe'

export const getCurrentURL = ClientFunction( () => document.baseURI)