'use strict'

const store = require('../scripts/store')

/* eslint-env jquery */

const config = require('../scripts/config')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    header: 'Content-Type: application/json',
    data: formData
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createPeak = function (data) {
  const name = data.name
  const description = data.description
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/peaks',
    method: 'POST',
    header: 'Content-Type: application/json',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      peak: {
        name: name,
        description: description
      }
    }
  })
}

const updatePeak = function (data) {
  // console.log('trying to get id', store.user.token)
  const description = data.description
  return $.ajax({
    url: config.apiUrl + `/peaks/${store.peak._id}`,
    method: 'PATCH',
    header: 'Content-Type: application/json',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      peak: {
        description: description
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createPeak,
  updatePeak
}
