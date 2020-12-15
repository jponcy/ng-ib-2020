interface Vehicule {
  nbRoues: number;
}

// class Camion implements Vehicule {} // -> erreur car n'implemente pas nbRoues

abstract class VehiculeMotorise {
  // public/protected/private
  // [{public|protected|private|}] <nomVariable>[: {never|void|null|string|number|boolean|Array|<classe>|<enum>|<type compose>}]
  // Type compose : string|number
  /* public */ nbRoues = 4;

  consomationAuKm: number;

  constructor(public readonly nom: string) {}

  rouler() {
    console.log('Vroum!!!');
  }
}

export class Voiture extends VehiculeMotorise implements Vehicule {

  constructor(nom: string, nbRoues: number = null) {
  // constructor(nbRoues?: number) {
    // if (nbRoues != null) {
    // if (nbRoues !== null) {
    // Valeur falsy : null|false|0|''|undefined
    // Valeur truthy : toutes les valeurs non falsy
    // if (nbRoues) {
    //   this.nbRoues = nbRoues;
    // }
    // super('Vehicule avec ' + nbRoues + ' roues');
    super(nom);
    this.nbRoues = nbRoues || 4;

    this.consomationAuKm = 3;
    this.rouler();
  }
}

class Camion extends VehiculeMotorise implements Vehicule {
}

class Velo implements Vehicule {
  constructor(public nbRoues = 2) {}
}
