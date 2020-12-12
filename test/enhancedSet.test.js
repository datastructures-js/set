const { expect } = require('chai');
const EnhancedSet = require('../src/enhancedSet');

describe('EnhancedSet unit tests', () => {
  const set1 = new EnhancedSet([1, 2, 3, 4]);
  const set2 = new EnhancedSet([3, 4, 5, 6]);

  describe('.union(set)', () => {
    it('union two sets', () => {
      const union = set1.union(set2);
      expect(union).to.be.instanceof(EnhancedSet);
      expect(union.size).to.be.equal(6);
      expect(union.has(1)).to.be.equal(true);
      expect(union.has(2)).to.be.equal(true);
      expect(union.has(3)).to.be.equal(true);
      expect(union.has(4)).to.be.equal(true);
      expect(union.has(5)).to.be.equal(true);
      expect(union.has(6)).to.be.equal(true);
    });

    it('throws an error if param is not a set', () => {
      expect((() => set1.union('test'))).to.throws(Error)
        .and.to.have.property('message', '.union expects a Set');
    });
  });

  describe('.intersect(set)', () => {
    it('intersects two sets', () => {
      const intersect = set1.intersect(set2);
      expect(intersect).to.be.instanceof(EnhancedSet);
      expect(intersect.size).to.be.equal(2);
      expect(intersect.has(3)).to.be.equal(true);
      expect(intersect.has(4)).to.be.equal(true);
    });

    it('throws an error if param is not a set', () => {
      expect((() => set1.intersect('test'))).to.throws(Error).and.to
        .have.property('message', '.intersect expects a Set');
    });
  });

  describe('.complement(set)', () => {
    it('complements a set', () => {
      const set1Complement = set2.complement(set1);
      const set2Complement = set1.complement(set2);

      expect(set2Complement).to.be.instanceof(EnhancedSet);
      expect(set2Complement.size).to.be.equal(2);
      expect(set2Complement.has(1)).to.be.equal(true);
      expect(set2Complement.has(2)).to.be.equal(true);

      expect(set1Complement).to.be.instanceof(EnhancedSet);
      expect(set1Complement.size).to.be.equal(2);
      expect(set1Complement.has(5)).to.be.equal(true);
      expect(set1Complement.has(6)).to.be.equal(true);
    });

    it('throws an error if param is not a set', () => {
      expect((() => set1.complement('test'))).to.throws(Error).and.to
        .have.property('message', '.complement expects a Set');
    });
  });

  describe('.isSubsetOf(set)', () => {
    it('checks if the set is a subset of another set', () => {
      expect(set1.isSubsetOf(set2)).to.be.equal(false);
      expect(set2.isSubsetOf(set1)).to.be.equal(false);
      expect((new EnhancedSet([2, 3])).isSubsetOf(set1)).to.be.equal(true);
    });

    it('returns false if param is not a set', () => {
      expect(set1.isSubsetOf('test')).to.be.equal(false);
    });
  });

  describe('.isSupersetOf(set)', () => {
    it('checks if the set is a super set of another set', () => {
      expect(set1.isSupersetOf(set2)).to.be.equal(false);
      expect(set2.isSupersetOf(set1)).to.be.equal(false);
      expect((new EnhancedSet([1, 2, 3, 4, 5, 6, 7])).isSupersetOf(set1))
        .to.be.equal(true);
    });

    it('returns false if param is not a set', () => {
      expect(set1.isSupersetOf('test')).to.be.equal(false);
    });
  });

  describe('.toArray()', () => {
    it('converts the set into an array', () => {
      expect(set1.toArray()).to.deep.equal([1, 2, 3, 4]);
    });
  });

  describe('.product(set)', () => {
    it('applies cortesian product on two sets with default seprator', () => {
      const product = set1.product(set2);
      expect(product.size).to.equal(16);
      expect(product.has('13')).to.equal(true);
      expect(product.has('14')).to.equal(true);
      expect(product.has('15')).to.equal(true);
      expect(product.has('16')).to.equal(true);
      expect(product.has('23')).to.equal(true);
      expect(product.has('24')).to.equal(true);
      expect(product.has('25')).to.equal(true);
      expect(product.has('26')).to.equal(true);
      expect(product.has('33')).to.equal(true);
      expect(product.has('34')).to.equal(true);
      expect(product.has('35')).to.equal(true);
      expect(product.has('36')).to.equal(true);
      expect(product.has('43')).to.equal(true);
      expect(product.has('44')).to.equal(true);
      expect(product.has('45')).to.equal(true);
      expect(product.has('46')).to.equal(true);
    });

    it('applies cortesian product on two sets with custom seprator', () => {
      const product = set1.product(set2, ':');
      expect(product.size).to.equal(16);
      expect(product.has('1:3')).to.equal(true);
      expect(product.has('1:4')).to.equal(true);
      expect(product.has('1:5')).to.equal(true);
      expect(product.has('1:6')).to.equal(true);
      expect(product.has('2:3')).to.equal(true);
      expect(product.has('2:4')).to.equal(true);
      expect(product.has('2:5')).to.equal(true);
      expect(product.has('2:6')).to.equal(true);
      expect(product.has('3:3')).to.equal(true);
      expect(product.has('3:4')).to.equal(true);
      expect(product.has('3:5')).to.equal(true);
      expect(product.has('3:6')).to.equal(true);
      expect(product.has('4:3')).to.equal(true);
      expect(product.has('4:4')).to.equal(true);
      expect(product.has('4:5')).to.equal(true);
      expect(product.has('4:6')).to.equal(true);
    });

    it('throws an error if param is not a set', () => {
      expect((() => set1.product('test'))).to.throws(Error).and.to
        .have.property('message', '.product expects a Set');
    });
  });

  describe('.power(n)', () => {
    it('returns empty set when n is 0', () => {
      expect(set1.power(0).size).to.equal(0);
    });

    it('applies cartesian product on the set itself n times', () => {
      const s = new EnhancedSet(['0', '1']);
      expect(s.power(3).toArray()).to.deep.equal([
        '000',
        '001',
        '010',
        '011',
        '100',
        '101',
        '110',
        '111'
      ]);
    });
  });

  describe('.equals()', () => {
    it('checks if two sets are equal', () => {
      expect(set1.equals(new Set([2, 4, 1, 3]))).to.equal(true);
      expect(set1.equals(new Set([4, 1, 3]))).to.equal(false);
    });

    it('throws an error if param is not a set', () => {
      expect((() => set1.equals('test'))).to.throws(Error).and.to
        .have.property('message', '.equals expects a Set');
    });
  });

  describe('.filter(cb)', () => {
    it('filters the set using a callback', () => {
      const filteredSet = set1.filter((el) => el > 2);
      expect(filteredSet.equals(new Set([3, 4]))).to.equal(true);
    });

    it('throws an error if param is not a set', () => {
      expect((() => set1.filter('test'))).to.throws(Error).and.to
        .have.property('message', '.filter expects a callback');
    });
  });

  describe('.clone()', () => {
    it('clones the set', () => {
      const set = new EnhancedSet(['A', 'B', 'C']);
      const clone = set.clone();
      expect(clone).to.be.instanceof(EnhancedSet);
      expect(clone.equals(set)).to.equal(true);
    });
  });
});
