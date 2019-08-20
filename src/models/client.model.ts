
export class Client {
  constructor(
    public identification: string,
    public firstname: string,
    public lastname: string,
    public birthdate: string
  ) {}

  setIdentification(identification) {
    this.identification = identification
    return this
  }

  setFirstname(firstname) {
    this.firstname = firstname
    return this
  }

  setLastname(lastname) {
    this.lastname = lastname
    return this
  }

  setbirthdate(birthdate) {
    this.birthdate = birthdate
    return this
  }

  getIdentification(identification) {
    return this.identification
  }

  getFirstname(firstname) {
    return this.firstname
  }

  getLastname() {
    return this.lastname
  }

  getbirthdate() {
    return this.birthdate
  }
}
