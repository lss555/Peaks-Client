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

const updatePeak = function (peak) {
  const description = peak.description
  return $.ajax({
    url: config.apiUrl + `/peaks/${peak.id}`,
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

const getOnePeak = function (peak) {
  return $.ajax({
    url: config.apiUrl + `/peaks/${peak.id}`,
    method: 'GET',
    header: 'Content-Type: application/json',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteOnePeak = function (peak) {
  return $.ajax({
    url: config.apiUrl + `/peaks/${peak.id}`,
    method: 'DELETE',
    header: 'Content-Type: application/json',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const getAllPeaks = function () {
  return $.ajax({
    url: config.apiUrl + '/peaks',
    method: 'GET',
    header: 'Content-Type: application/json',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createPeak,
  updatePeak,
  getOnePeak,
  getAllPeaks,
  deleteOnePeak
}
