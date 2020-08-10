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
  // console.log(store.peak) // undefined

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
  console.log(response.peak)
  store.peak = response.peak
  $('form').trigger('reset')
}

const createPeakFailure = function () {
  $('#create-peak-message').text('something went wrong!')
}

const updatePeakSuccess = function (response) {
  $('#update-peak-message').text('Peak updated!')
}

const updatePeakFailure = function () {
  $('#update-peak-message').text('Failed to update peak, try checking peak name')
}

//  gets all peaks but only prints last peak, needs handlebars
const getAllPeaksSuccess = function (data) {
  const peakLength = data.peaks.length
  const peakArray = data.peaks
  for (let i = 0; i < peakLength; i++) {
    console.log(peakArray[i].name)
    $('#get-all-peaks-message').text('Peak, ' + JSON.stringify(peakArray[i].name) + ' ID: ' + JSON.stringify(peakArray[i]._id))
  }
}

const getAllPeaksFailure = function () {
  $('#get-all-peaks-message').text('Failure on all')
}

// needs getOnePeak here

const getOnePeakSuccess = function (data) {
  $('#get-one-peak-message').text('Peak found! ' + JSON.stringify('name: ' + data.peak.name + ', description: ' + data.peak.description))
}

const getOnePeakFailure = function () {
  $('#get-one-peak-message').text('find one peak failed')
}

const deleteOnePeakSuccess = function () {
  $('#delete-one-peak-message').text('Successfully deleted')
}

const deleteOnePeakFailure = function () {
  $('#delete-one-peak-message').text('failed to delete')
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
