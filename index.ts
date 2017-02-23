import * as Filter from './filters'

console.log("Running program...")

//instantiate the class
const upperFilter = new Filter.Upper();
const bolderFilter = Filter.Bolder;

process.stdin
  .pipe(upperFilter)
  .pipe(bolderFilter)
  .pipe(process.stdout);
