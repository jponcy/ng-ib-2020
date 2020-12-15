
// const/let

import { Voiture } from './vehicles';

// const v = new Voiture;
const v = new Voiture('choupette', 5);

v.nbRoues = 4;
// v.nom = 'toto'; // -> erreur car déclarée readonly
// v.nbRoues = 'toto'; // -> erreur car pas un nombre

console.log(v.nbRoues);
console.log(v.nom);

/**
 * Commentaire court.
 *
 * @remarks
 * remarque
 *
 * @returns
 */
function toto() {
  console.log('toto');
}

function max(values: number[]): number {
  let result = Number.MIN_VALUE;

  for (const value of values) {
    if (value > result) {
      result = value;
    }
  }

  return result;
}

function max2(values: number[]): number|null {
  let result = null;

  if (values.length) { // S'il y a au moins une valeur dans values
    result = values[0];

    // ++i => i += 1 => i = i + 1

    for (let i = 1; i < values.length; ++i) {
      const value = values[i];

      if (value > result) {
        result = value;
      }
    }
  }

  return result;
}

const tab = [1, 4, 5, 32, 52, 2, 5];

max(tab);
max2(tab);

(function (values: number[]): number|null {
  let result = null;

  if (values.length) { // S'il y a au moins une valeur dans values
    result = values[0];

    // ++i => i += 1 => i = i + 1

    for (let i = 1; i < values.length; ++i) {
      const value = values[i];

      if (value > result) {
        result = value;
      }
    }
  }

  return result;
})(tab);

((values: number[]) => {
  let result = null;

  if (values.length) { // S'il y a au moins une valeur dans values
    result = values[0];

    // ++i => i += 1 => i = i + 1

    for (let i = 1; i < values.length; ++i) {
      const value = values[i];

      if (value > result) {
        result = value;
      }
    }
  }

  return result;
})(tab);

const max3 = (values: number[]) => {
  let result = null;

  if (values.length) { // S'il y a au moins une valeur dans values
    result = values[0];

    // ++i => i += 1 => i = i + 1

    for (let i = 1; i < values.length; ++i) {
      const value = values[i];

      if (value > result) {
        result = value;
      }
    }
  }

  return result;
}

// ----- Arrow functions.

const pow1 = (a: number, b: number) => {
  return a ** b;
}

const pow2 = (a: number, b: number) => a ** b;

// Square.

function square(a: number) {
  return a ** 2;
}

const square1 = (a: number) => {
  return a ** 2;
}

const square2 = (a: number) => a ** 2;

const square3 = a => {
  return a ** 2;
}

const square4 = a => a ** 2;

let i = 0;

for (;;) {
  if (++i > 10) break;
  console.log(i);
}

// for (const index in tab) {
//   console.log((index + 1) + '/' + tab.length + ' => ' + tab[index]);
// }


tab.forEach(function (e) { console.log(e + '² = ' + e ** 2); })
tab.forEach(e => console.log(e + '² = ' + e ** 2));

// tab
//   .map(e => e + '² = ' + e ** 2)
//   .forEach(v => console.log(v));

// for (const e of tab) {
//   const value = e + '² = ' + e ** 2;
//   console.log(v);
// }


class MyArray {
  values: any[];

  forEach(fn) {
    for (const elt of this.values) {
      fn(elt);
    }
  }

  filter(fn) {
    const result = [];

    for (const elt of this.values) {
      if (fn(elt)) {
        result.push(elt);
      }
    }

    return result;
  }

  map(fn) {
    const result = new Array(this.values.length);

    for (const index in this.values) {
      result[index] = fn(this.values[index]);
    }
  }

  reduce(fn, defaultValue) {
    let acc;
    let startPos;

    if (defaultValue === undefined) {
      acc = defaultValue;
      startPos = 0;
    } else {
      acc = this.values[0];
      startPos = 1;
    }

    for (let i = startPos; i < this.values.length; ++i) {
      const elt = this.values[i];
      acc = fn(acc, elt);
    }

    return acc;
  }
}

tab.reduce((acc, elt/*, index, list*/) => acc + elt);
tab.reduce((acc, elt) => acc * elt);


// const list = new Array(3);

// for (let i = 0; i < 3; ++i) {
//   list[i] = tab[i];
// }

// const list = tab.slice(0, 3);

tab.reduce((acc, elt) => { return { sum: acc.sum + elt, prod: acc.prod * elt }; }, {sum: 0, prod: 1})
tab.reduce((acc, elt) => ({ sum: acc.sum + elt, prod: acc.prod * elt }), {sum: 0, prod: 1})
