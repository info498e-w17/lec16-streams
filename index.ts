//import * as Filter from './filters'
import pigLatinWord = require('./piglatin');

import * as stream from 'stream' //import stream classes

class PigLatinFilter extends stream.Transform {
  constructor() {
    super({objectMode:true});
  }

  _transform(chunk, encoding, callback) {
    let data = chunk.toString().trim();

    //process the data
    let words = data.split(' ');
    words = words.map(pigLatinWord);
    let transformed= words.join(' ')+'\n';

    this.push(transformed); //output the data
    callback(); //do the next thing
  }

  _flush(callback){
    callback();
  }
}

const pigFilter = new PigLatinFilter();

console.log("Running program...")
process.stdin
  .pipe(pigFilter)
  .pipe(process.stdout); 
