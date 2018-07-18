/**
 * datastructures-js/set
 * @class
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */
const set = () => {
  let elements = {};
  let count = 0;

  /**
   * @returns {number}
   */
  const size = () => count;

  /**
   * @returns {boolean}
   */
  const isEmpty = () => count === 0;

  /**
   * @param {(string|number|boolean)} el
   * @returns {boolean}
   */
  const contains = el => elements[el] === true;

  /**
   * @param {(string|number|boolean)} el
   */
  const add = (el) => {
    if (!elements[el]) {
      elements[el] = true;
      count += 1;
    }
  };

  /**
   * @param {(string|number|boolean)} el
   */
  const remove = (el) => {
    if (elements[el]) {
      elements[el] = false;
      count -= 1;
    }
  };

  /**
   * @returns {array}
   */
  const toArray = () => {
    const els = [];
    Object.keys(elements).forEach((el) => {
      if (contains(el)) {
        els.push(Number.isNaN(+el) ? el : +el);
      }
    });
    return els;
  };

  /**
   * @param {object} s - set to union with
   * @returns {object} - resulting set
   */
  const union = (s) => {
    const unionSet = set();
    Object.keys(elements).forEach((el) => {
      if (contains(el)) {
        unionSet.add(el);
      }
    });
    s.toArray().forEach(unionSet.add);
    return unionSet;
  };

  /**
   * @param {object} s - set to intersect with
   * @returns {object} - resulting set
   */
  const intersect = (s) => {
    const intersectSet = set();
    Object.keys(elements).forEach((el) => {
      if (contains(el) && s.contains(el)) {
        intersectSet.add(el);
      }
    });
    return intersectSet;
  };

  /**
   * @param {object} s - set to diff from
   * @returns {object} - resulting set
   */
  const diff = (s) => {
    const diffSet = set();
    Object.keys(elements).forEach((el) => {
      if (contains(el) && !s.contains(el)) {
        diffSet.add(el);
      }
    });
    return diffSet;
  };

  /**
   * @param {object} s -  set to check if it contains the set
   * @returns {boolean}
   */
  const isSubsetOf = (s) => {
    let result = true;
    Object.keys(elements).forEach((el) => {
      if (contains(el) && !s.contains(el)) {
        result = false;
      }
    });
    return result;
  };

  /**
   * @param {object} s -  set to check if it is a child of the set
   * @returns {boolean}
   */
  const isSupersetOf = (s) => {
    let result = true;
    s.toArray().forEach((el) => {
      if (!contains(el)) {
        result = false;
      }
    });
    return result;
  };

  /**
   * clears the set
   */
  const clear = () => {
    elements = {};
    count = 0;
  };

  // set API
  return {
    size,
    isEmpty,
    contains,
    add,
    remove,
    toArray,
    union,
    intersect,
    diff,
    isSubsetOf,
    isSupersetOf,
    clear
  };
};

module.exports = set;
