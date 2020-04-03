/**
 * @datastructures-js/set
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * @class EnhancedSet
 * @extends Set - ES6 Set REF: https://mzl.la/2QajnHr
 * implements main set operations
 */
class EnhancedSet extends Set {
  /**
   * @public
   * Union: https://en.wikipedia.org/wiki/Union_(set_theory)
   * returns a set of all elements of the set and another set
   * @param {Set} set
   * @returns {Set}
   * @throws {Error}
   */
  union(set) {
    if (!(set instanceof Set)) {
      throw new Error('.union expects an instance of Set');
    }

    const result = new EnhancedSet();
    this.forEach((element) => result.add(element));
    set.forEach((element) => result.add(element));
    return result;
  }

  /**
   * @public
   * Intersection: https://en.wikipedia.org/wiki/Intersection_(set_theory)
   * returns the common elements between the set and another set
   * @param {Set} set
   * @returns {Set}
   * @throws {Error}
   */
  intersect(set) {
    if (!(set instanceof Set)) {
      throw new Error('intersect expects an instance of Set');
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
   * @public
   * Complement: https://en.wikipedia.org/wiki/Complement_(set_theory)
   * returns the elements in the set that are not in another set
   * @param {Set} set
   * @returns {Set}
   */
  complement(set) {
    if (!(set instanceof Set)) {
      throw new Error('complement expects an instance of Set');
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
   * @public
   * Subset: https://en.wikipedia.org/wiki/Subset
   * checks if the set is a subset of another set
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
   * @public
   * Subset: https://en.wikipedia.org/wiki/Subset
   * checks if the set is a superset of another set
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
   * @public
   * Cartesian Product: https://en.wikipedia.org/wiki/Cartesian_product
   * @param {Set} set
   * @returns {Set}
   */
  product(set) {
    if (!(set instanceof Set)) {
      throw new Error('product expects an instance of Set');
    }

    const result = new EnhancedSet();
    this.forEach((e1) => {
      set.forEach((e2) => {
        result.add(`${e1},${e2}`);
      });
    });

    return result;
  }
}

module.exports = EnhancedSet;
