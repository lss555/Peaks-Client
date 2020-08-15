const store = require('../scripts/store')

const peaksPageTemplate = require('../scripts/templates/helpers/peak-list.handlebars')

/* eslint-env jquery */

// sign up ------------------->
const signUpSuccess = function () {
  $('#sign-up-message').text('Succesfully signed up!').show()
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#sign-up-message').text('email already in use').show()
  $('form').trigger('reset')
}

// sign in ----------------------->
const signInSuccess = function (response) {
  $('#sign-in-message').text('Signed in!').show()
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
  $('#create-peak').show()
  $('#update-peak').show()
  $('#get-one-peak').show()
  $('#get-all-peaks').show()
  $('#delete-one-peak').show()
  $('#findYourPeaks').hide()
  $('.handlebarContainer').show()
  $('#update-peak-message').show()
  $('#get-one-peak-message').show()
  $('#delete-one-peak-message').show()
  $('#create-peak-message').show()
}

const signInFailure = function (data) {
  $('#sign-in-message').text('Failed to sign in').show()
  $('form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#change-password-message').text('Password changed!').show()
  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#change-password-message').text('Failed to change password').show()
}

const signOutSuccess = function (data) {
  $('#sign-out-message').text('Signed out!').show()
  store.user = null
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#create-game').hide()
  $('#sign-out').hide()
  $('#change-password-message').hide()
  $('#sign-in-message').hide()
  $('#get-all-peaks-header').hide()
  $('#create-peak').hide()
  $('#update-peak').hide()
  $('#get-one-peak').hide()
  $('#get-all-peaks').hide()
  $('#delete-one-peak').hide()
  $('#findYourPeaks').show()
  $('#create-peak-message').hide().empty()
  $('.peaks-list-container').hide()
  $('#update-peak-message').hide().empty()
  $('#get-one-peak-message').hide().empty()
  $('#delete-one-peak-message').hide().empty()
  $('.handlebarContainer').empty()
}

const signOutFailure = function (data) {
  $('#sign-out-message').text('Sorry but it looks like you\'re stuck here')
}

const createPeakSuccess = function (response) {
  $('#create-peak-message').text('Peak created').show()
  store.peak = response.peak
  $('form').trigger('reset')
  $('#change-password-message').hide()
  $('#sign-in-message').hide()
}

const createPeakFailure = function () {
  $('#create-peak-message').text('something went wrong!').show()
  $('form').trigger('reset')
}

const updatePeakSuccess = function (response) {
  $('#update-peak-message').text('Peak updated!').show()
  $('form').trigger('reset')
  $('#change-password-message').hide()
  $('#sign-in-message').hide()
}

const updatePeakFailure = function () {
  $('#update-peak-message').text('Failed to update peak, try checking peak name')
  $('form').trigger('reset')
}

const getAllPeaksSuccess = function (data) {
  $('#get-all-peaks').ready(function () {
    // handle bars
    const peaksPageHtml = peaksPageTemplate({ peaks: data.peaks })
    $('.handlebarContainer').html(peaksPageHtml)
  // ending handlebars
  })
  $('#get-all-peaks-header').show()
  $('#change-password-message').hide()
  $('#sign-in-message').hide()
  $('form').trigger('reset')
}

const getAllPeaksFailure = function () {
  $('#get-all-peaks-message').text('Failure on all')
  $('form').trigger('reset')
}

const getOnePeakSuccess = function (data) {
  $('#get-one-peak-message').text('Peak found! ' + JSON.stringify('name: ' + data.peak.name + ', description: ' + data.peak.description))
  $('form').trigger('reset')
  $('#change-password-message').hide()
  $('#sign-in-message').hide()
}

const getOnePeakFailure = function () {
  $('#get-one-peak-message').text('find one peak failed')
  $('form').trigger('reset')
}

const deleteOnePeakSuccess = function () {
  $('#delete-one-peak-message').text('Successfully deleted')
  $('form').trigger('reset')
  $('#change-password-message').hide()
  $('#sign-in-message').hide()
}

const deleteOnePeakFailure = function () {
  $('#delete-one-peak-message').text('failed to delete')
  $('form').trigger('reset')
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
  createPeakFailure,
  updatePeakSuccess,
  updatePeakFailure,
  getAllPeaksSuccess,
  getAllPeaksFailure,
  getOnePeakSuccess,
  getOnePeakFailure,
  deleteOnePeakSuccess,
  deleteOnePeakFailure
}
