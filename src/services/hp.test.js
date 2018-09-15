import { totalFixedHP, hitDieAverage } from './hp';

it('hitDieAverage', () => {
  expect(hitDieAverage(5, true)).toEqual(3);
})

it('totalFixedHP', () => {
  expect(totalFixedHP(5, 6, 1, true)).toEqual(27); // Player
  expect(totalFixedHP(2, 8, 1)).toEqual(11); // Wolf
  expect(totalFixedHP(12, 10, 4)).toEqual(114); // Chimera
  expect(totalFixedHP(1, 4, 0)).toEqual(2); // Crab
});

