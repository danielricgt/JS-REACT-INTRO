import { getHeroeById } from "./bases/08-imp-exp";

// // one promise is created with one argument that is the callback function, this callback receives two arguments, resolve and reject
// const promesa = new Promise((resolve, reject) => {

// setTimeout(() => {
// const heroe = getHeroeById(2);
// // console.log(heroe)
// // resolve(heroe);
// reject('no se pudo encontrar el héroe');
// }, 2000);

// });

// // in the then method is also a callback function that receives the result of the promise
// promesa.then((heroe)=>{
//     console.log(heroe.nombre);
// }).catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      // console.log(heroe)
      if (heroe) {
        resolve(heroe);
      } else {
        reject("no se pudo encontrar el héroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(2)
  .then((console.log))
  .catch(console.warn);
