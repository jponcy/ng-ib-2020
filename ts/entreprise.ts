class Employe {
  prenom: string;
  nom: string;
  dateDeNaissance: Date;
  entreprise: Entreprise;

  sePresenter() {
    return 'Bonjour je me nomme ' + this.prenom + ' ' + this.nom;
  }
}

class Entreprise {
  nom: string;
  siret: string;
}

const e = new Employe();
e.prenom = 'Henry';
e.nom = 'Thierry';
e.dateDeNaissance = new Date();

console.log(e.sePresenter());

// CREATE TABLE employe (
//   id serial PRIMARY KEY,
//   prenom VARCHAR,
//   nom VARCHAR,
//   dateDeNaissance TIMESTAMP,
//   entreprise_id INT FOREIGN KEY entreprise(id)
// )
