import * as tf from '@tensorflow/tfjs';

const first = tf.tensor([1.1, 2.2, 3.3], null, 'float32');
const yep = first.asType('int32');

console.log(first);

/* Check the number of tensors in memory
 *  and the footprint size.
 *  Both of these logs should be zero.
 */
console.log(tf.memory().numTensors);
console.log(tf.memory().numBytes);

// Start at zero tensors
console.log('start', tf.memory().numTensors);
let keeper, chaser, seeker, beater;
// Now we'll create tensors inside a tidy
tf.tidy(() => {
  keeper = tf.tensor([1, 2, 3]);
  chaser = tf.tensor([1, 2, 3]);
  seeker = tf.tensor([1, 2, 3]);
  beater = tf.tensor([1, 2, 3]);
  // Now we're at four tensors in memory
  console.log('inside tidy', tf.memory().numTensors);
  // protect a tensor
  tf.keep(keeper);
  // returned tensors survive return chaser
});
// Down to two
console.log('after tidy', tf.memory().numTensors);
keeper.dispose();
chaser.dispose(); // Back to zero
console.log('end', tf.memory().numTensors);
