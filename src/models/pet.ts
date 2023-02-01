/* eslint-disable no-unused-vars */
type HasId = {
  id: string;
};

export type ProtoPetStructure = {
  namePet: string;
  owner: string;
  breed: string;
  isAdopted: boolean;
};

export type PetStructure = HasId & ProtoPetStructure;

export class Pet implements PetStructure {
  public id: string;
  public isAdopted: boolean;
  static generateId() {
    const aNumbers = new Uint32Array(1);
    crypto.getRandomValues(aNumbers);
    return ('000000' + aNumbers[0]).slice(-6);
  }

  constructor(
    public namePet: string,
    public breed: string,
    public owner: string
  ) {
    this.id = Pet.generateId();

    this.isAdopted = false;
  }
}
