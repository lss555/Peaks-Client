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
}

const createPeakFailure = function () {
  $('#create-peak-message').text('something went wrong!')
}

// const updatePeakSuccess = function (response) {
//   $('#update-peak-message').text('Peak updated!')
//   store.peak = response.peak
// }
//
// const updatePeakFailure = function () {
//   $('#update-peak-message').text('Failed to update peak, try checking peak name')
// }

const getAllPeaksSuccess = function (data) {
  const peakLength = data.peaks.length
  const peakArray = data.peaks
  for (let i = 0; i < peakLength; i++) {
    console.log(peakArray[i].name)
    $('#get-all-peaks-message').text(peakArray[i].name)
  }
  // const peakLength = data.peaks.length
  // for (let i = 0; i < peakLength; i++) {
  //
  //   console.log(data.peaks[i])
  //   $('#get-all-peaks-message').text(data.peaks[i])
  // }

  // console.log(data.peaks[0]) // need to access the objects inside peaks array
  // data.peaks.forEach(function (data) {
  //   console.log(data)
  //   $('#get-all-peaks-message').text('ID = ', data)
  // })
  // $('#get-all-peaks-message').text('your ID\'s and peaks, ' + data.peaks._id)
}

const getAllPeaksFailure = function () {
  $('#get-all-peaks-message').text('Failure on all')
}

// needs getOnePeak here

const getOnePeakSuccess = function (data) {
  console.log(data)
  $('#get-one-peak-message').text('Peak found! ' + JSON.stringify('name: ' + data.peak.name + ', description: ' + data.peak.description))
}

const getOnePeakFailure = function () {
  $('#get-one-peak-message').text('find one peak failed')
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
  // updatePeakSuccess,
  // updatePeakFailure,
  getAllPeaksSuccess,
  getAllPeaksFailure,
  getOnePeakSuccess,
  getOnePeakFailure
}
