// run `node index.js` in the terminal

import * as tf from '@tensorflow/tfjs';
//const tf = require('@tensorflow/tfjs');
import * as toxicity from '@tensorflow-models/toxicity';

console.log(`Hello Node.js v${process.versions.node}!`);
console.log(tf.version.tfjs);

// minimum positive prediction confidence
// If this isn't passed, the default is 0.85
const threshold = 0.5;
// Load the model
toxicity.load(threshold).then((model) => {
  const sentences = ['You are a poopy head!', 'I like turtles', 'Shut up!'];
  // Ask the model to classify inputs
  model.classify(sentences).then((predictions) => {
    // semi-pretty-print results
    console.log(JSON.stringify(predictions, null, 2));
  });
});
