const { expect } = require('chai');
const setFn = require('./index');

describe('set tests', () => {
  const set1 = setFn();
  const set2 = setFn();

  describe('.add(element)', () =>
    it('should add elements to the set', () => {
      set1.add(1);
      set1.add(2);
      set1.add(3);
      set1.add(4);

      set2.add(3);
      set2.add(4);
      set2.add(5);
      set2.add(6);
    }));

  describe('.isEmpty()', () =>
    it('should not be empty after adding elements', () =>
      expect(set1.isEmpty()).to.be.equal(false)));

  describe('.contains(element)', () =>
    it('should contain the added elements', () => {
      expect(set1.contains(1)).to.be.equal(true);
      expect(set1.contains(2)).to.be.equal(true);
      expect(set1.contains(3)).to.be.equal(true);
      expect(set1.contains(4)).to.be.equal(true);
    }));

  describe('.size()', () =>
    it('should get the size of the set', () => {
      expect(set1.size()).to.be.equal(4);
    }));

  describe('.remove(element)', () =>
    it('should remove an element from the set', () => {
      set1.remove(1);
      expect(set1.size()).to.be.equal(3);
      expect(set1.contains(1)).to.be.equal(false);
    }));

  describe('.union(s)', () =>
    it('should join the set with another set', () => {
      const u = set1.union(set2);
      expect(u.size()).to.be.equal(5);
      expect(u.contains(2)).to.be.equal(true);
      expect(u.contains(3)).to.be.equal(true);
      expect(u.contains(4)).to.be.equal(true);
      expect(u.contains(5)).to.be.equal(true);
      expect(u.contains(6)).to.be.equal(true);
    }));

  describe('.intersect(s)', () =>
    it('should intersect the set with another set', () => {
      const i = set1.intersect(set2);
      expect(i.size()).to.be.equal(2);
      expect(i.contains(3)).to.be.equal(true);
      expect(i.contains(4)).to.be.equal(true);
    }));

  describe('.diff(s)', () =>
    it('should differentiate the set from another set', () => {
      const d1 = set1.diff(set2);
      const d2 = set2.diff(set1);
      expect(d1.size()).to.be.equal(1);
      expect(d1.contains(2)).to.be.equal(true);
      expect(d2.size()).to.be.equal(2);
      expect(d2.contains(5)).to.be.equal(true);
      expect(d2.contains(6)).to.be.equal(true);
    }));

  describe('.isSubsetOf(s)', () =>
    it('should check if a set is a subset of another set', () => {
      set1.remove(2);
      expect(set1.isSubsetOf(set2)).to.be.equal(true);
      expect(set2.isSubsetOf(set1)).to.be.equal(false);
    }));

  describe('.isSupersetOf(s)', () =>
    it('should check if a set is a super set of another set', () => {
      expect(set1.isSupersetOf(set2)).to.be.equal(false);
      expect(set2.isSupersetOf(set1)).to.be.equal(true);
    }));

  describe('.toArray()', () =>
    it('should convert the set to an array', () => {
      expect(set2.toArray()).to.deep.equal([3, 4, 5, 6]);
    }));

  describe('.clear()', () =>
    it('should clear the set', () => {
      set2.clear();
      expect(set2.size()).to.equal(0);
      expect(set2.isEmpty()).to.equal(true);
    }));
});
