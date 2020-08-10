'use strict'
// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}} -->

const limit = (str, length) => {
  if (str.length <= length) {
    return str
  } else {
    return str.substring(0, length) + '...'
  }
}

module.exports = limit

// <!-- const limit = (str, length) => {
//   if (str.length <= length) {
//     return str
//   } else {
//     return str.substring(0, length) + '...'
//   }
// }
//
// module.exports = limit -->
