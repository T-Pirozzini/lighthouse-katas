const checkAir = function (samples, threshold) {
  let cleanCount = 0;
  let dirtyCount = 0;
  samples.forEach(sample => sample === 'clean' ? cleanCount++ : dirtyCount++);

  let airQuality = dirtyCount / (cleanCount + dirtyCount);  
  return airQuality <= threshold ? 'Clean' : 'Polluted';
};
  


console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))