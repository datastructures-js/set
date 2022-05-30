/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 *
 * @class
 * @extends Set - ES6 global Set https://mzl.la/2QajnHr
 */
class EnhancedSet extends Set {
  /**
   * Returns a set of all elements of the set and another set
   * @public
   * @param {Set} set
   * @returns {EnhancedSet}
   */
  union(set) {
    if (!(set instanceof Set)) {
      throw new Error('.union expects a Set');
    }

    const result = new EnhancedSet();
    this.forEach((element) => result.add(element));
    set.forEach((element) => result.add(element));
    return result;
  }

  /**
   * Returns the common elements between the set and another set
   * @public
   * @param {Set} set
   * @returns {EnhancedSet}
   */
  intersect(set) {
    if (!(set instanceof Set)) {
      throw new Error('.intersect expects a Set');
    }

    const result = new EnhancedSet();
    this.forEach((element) => {
      if (set.has(element)) {
        result.add(element);
      }
    });

    return result;
  }

  /**
   * Returns the elements in the set that are not in another set
   * @public
   * @param {Set} set
   * @returns {EnhancedSet}
   */
  complement(set) {
    if (!(set instanceof Set)) {
      throw new Error('.complement expects a Set');
    }

    const result = new EnhancedSet();
    this.forEach((element) => {
      if (!set.has(element)) {
        result.add(element);
      }
    });

    return result;
  }

  /**
   * Returns the elements in the set that are not in another set
   * @public
   * @param {Set} set
   * @returns {EnhancedSet}
   */
  diff(set) {
    return this.complement(set);
  }

  /**
   * Checks if the set is a subset of another set
   * @public
   * @param {Set} set
   * @returns {boolean}
   */
  isSubsetOf(set) {
    if (!(set instanceof Set)) return false;

    let count = 0;
    this.forEach((element) => {
      if (set.has(element)) {
        count += 1;
      }
    });

    return count === this.size;
  }

  /**
   * Checks if the set is a superset of another set
   * @public
   * @param {Set} set
   * @returns {boolean}
   */
  isSupersetOf(set) {
    if (!(set instanceof Set)) return false;

    let count = 0;
    set.forEach((element) => {
      if (this.has(element)) {
        count += 1;
      }
    });

    return count === set.size;
  }

  /**
   * Applies a cartesian product with another set
   * @public
   * @param {Set} set
   * @param {string} [separator]
   * @returns {EnhancedSet}
   */
  product(set, seprator = '') {
    if (!(set instanceof Set)) {
      throw new Error('.product expects a Set');
    }

    const result = new EnhancedSet();
    this.forEach((e1) => {
      set.forEach((e2) => {
        result.add(`${e1}${seprator}${e2}`);
      });
    });

    return result;
  }

  /**
   * Applies cartesian product with the set itself
   * @public
   * @param {number} m
   * @param {string} [separator]
   * @returns {EnhancedSet}
   */
  power(m, seprator = '') {
    if (Number.isNaN(+m) || +m < 0) {
      throw new Error('.power expects a positive number');
    }

    if (+m === 0) return new EnhancedSet();

    let result = this.clone();
    for (let i = 0; i < +m - 1; i += 1) {
      result = result.product(this, seprator);
    }

    return result;
  }

  /**
   * Finds m permutations of the set
   * @public
   * @param {number} m
   * @param {string} [separator]
   * @returns {EnhancedSet}
   */
  permutations(m, separator = '') {
    if (Number.isNaN(+m) || +m < 0) {
      throw new Error('.permutations expects a positive number');
    }

    if (m > this.size) {
      throw new Error('.permutations expects a number less or euqal set size');
    }

    const result = new EnhancedSet();

    const generatePermutation = (currentSet, i = 0, prefix = '') => {
      if (i === m && prefix.length > 0) {
        result.add(prefix);
        return;
      }

      currentSet.forEach((el) => {
        const nextSet = currentSet.clone();
        nextSet.delete(el);
        const acc = prefix.length ? `${prefix}${separator}${el}` : `${el}`;
        generatePermutation(nextSet, i + 1, acc);
      });
    };

    generatePermutation(this.clone());
    return result;
  }

  /**
   * Checks if two sets are equal
   * @public
   * @param {Set} set
   * @returns {boolean}
   */
  equals(set) {
    if (!(set instanceof Set)) {
      throw new Error('.equals expects a Set');
    }

    return this.isSubsetOf(set) && this.size === set.size;
  }

  /**
   * Filters the set elements using a callback
   * @public
   * @param {function} cb
   * @returns {EnhancedSet}
   */
  filter(cb) {
    if (typeof cb !== 'function') {
      throw new Error('.filter expects a callback');
    }

    const result = new EnhancedSet();
    this.forEach((element) => {
      if (cb(element)) {
        result.add(element);
      }
    });

    return result;
  }

  /**
   * Converst the set into an array
   * @public
   * @returns {array}
   */
  toArray() {
    return Array.from(this);
  }

  /**
   * Clones the set
   * @public
   * @returns {EnhancedSet}
   */
  clone() {
    return new EnhancedSet(this.toArray());
  }
}

exports.EnhancedSet = EnhancedSet;
