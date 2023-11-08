export default class UnknownAccount {
    constructor(public readonly uniqueId?: string, public readonly role: number = 0, public readonly username?: string, public readonly email?: string, public readonly firstname?: string, public readonly lastname?: string, public readonly phoneNumber?: string, public readonly country?: string, public readonly state?: string, public readonly city?: string, public readonly address?: string, public readonly zipCode?: string, public readonly currency?: string, public readonly language?: string, public readonly timeZone?: string) {

    }
}