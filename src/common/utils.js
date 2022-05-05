/**
 * This function will slice the array based on page size and current page
 * @param {array} array original array to be sliced
 * @param {number} currentPage
 * @param {number} pageSize
 * @returns
 */
function paginate(array, currentPage, pageSize) {
  let startIndex = currentPage * pageSize;
  let endIndex = startIndex + pageSize;
  return array.slice(startIndex, endIndex);
}

/**
 *
 * @param {array} array Array to be sorted on
 * @param {string} sortBy property to be sorted by
 * @param {string} type datatype
 * @param {number} sortOrder ascending or descending (1 or ascending )
 * @returns
 */

function sorting(array, sortBy, type, sortOrder) {
  if (type === "number") return numbersSort(array, sortBy, sortOrder);
  if (type === "string") return stringsSort(array, sortBy, sortOrder);
  return array;
}

function numbersSort(array, sortBy, sortOrder) {
  return array.sort((a, b) => {
    a = a[sortBy];
    b = b[sortBy];
    return sortOrder === 1 ? a - b : b - a;
  });
}

function stringsSort(array, sortBy, sortOrder) {
  return array.sort((a, b) => {
    a = a[sortBy].toUpperCase();
    b = b[sortBy].toUpperCase();

    if (a > b) return sortOrder == 1 ? 1 : -1;
    if (a < b) return sortOrder == 1 ? -1 : 1;
    return 0;
  });
}

export { paginate, sorting };
