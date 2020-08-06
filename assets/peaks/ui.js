const store = require('../scripts/store')

/* eslint-env jquery */

// sign up ------------------->
const signUpSuccess = function () {
  $('#sign-up-message').text('Succesfully signed up!')
  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('#sign-up-message').text('email already in use')
}

// sign in ----------------------->
const signInSuccess = function (response) {
  $('#sign-in-message').text('Signed in!')
  store.user = response.user
  $('form').trigger('reset')

  // hide and show for sign in
  $('#sign-up-message').hide()
  $('#sign-in').hide()
  $('#games-played').show()
  $('#create-game').show()
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-up').hide()
}

const signInFailure = function (data) {
  $('#sign-in-message').text('Failed to sign in')
}

const changePasswordSuccess = function (response) {
  $('#change-password-message').text('Password changed!')
  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#change-password-message').text('Failed to change password')
}

const signOutSuccess = function (data) {
  $('#sign-out-message').text('Signed out!')
  store.user = null
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#create-game').hide()
  $('.container').hide()
  $('#sign-out').hide()
  $('#games-played').hide()
  $('#message').hide()
  $('#games-played-message').hide()
  $('#change-password-message').hide()
  $('#sign-in-message').hide()
}

const signOutFailure = function (data) {
  $('#sign-out-message').text('Sorry but it looks like you\'re stuck here')
}

const createPeakSuccess = function (response) {
  $('#create-peak-message').text('Peak created')
  store.peak = response.peak
}

const createPeakFailure = function () {
  $('#create-peak-message').text('something went wrong!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createPeakSuccess,
  createPeakFailure
}
