export function hitDieAverage(hitDie, roundUp = false) {
  const average = (hitDie + 1) / 2;
  if (average % 1 === 0) {
    return average;
  }
  if (roundUp) {
    return Math.trunc(average) + 1;
  }
  return Math.trunc(average);
}


export function totalFixedHP(levels, hitDie, conMod, isPlayer = false) {
  if (levels < 1) {
    return 0;
  }
  let total = 0;
  for (let level = 1; level <= levels; level++) {
    if (isPlayer) {
      if (level === 1) {
        total += hitDie + conMod;
      } else {
        total += hitDieAverage(hitDie, true) + conMod;
      }
    } else {
      total += (hitDie + 1) / 2 + conMod;
    }
  }
  return Math.trunc(total);
}
