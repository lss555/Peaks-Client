const store = require('../scripts/store')

// const peaksTemplate = require('../scripts/templates/helpers/peak-list.handlebars')

// const Handlebars = require('../../node_modules/handlebars/dist')

const Handlebars = require('handlebars')

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
  $('#create-peak').show()
  $('#update-peak').show()
  $('#get-one-peak').show()
  $('#get-all-peaks').show()
  $('#delete-one-peak').show()
  $('#findYourPeaks').hide()
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
  $('#message').hide()
  $('#change-password-message').hide()
  $('#sign-in-message').hide()
  $('#get-all-peaks-header').hide()
  $('#create-peak').hide()
  $('#update-peak').hide()
  $('#get-one-peak').hide()
  $('#get-all-peaks').hide()
  $('#delete-one-peak').hide()
  $('#findYourPeaks').show()
  $('#create-peak-message').hide()
  $('.peaks-list-container').hide()
  $('#update-peak-message').hide()
  $('#get-one-peak-message').hide()
  $('#delete-one-peak-message').hide()
}

const signOutFailure = function (data) {
  $('#sign-out-message').text('Sorry but it looks like you\'re stuck here')
}

const createPeakSuccess = function (response) {
  $('#create-peak-message').text('Peak created')
  store.peak = response.peak
  $('form').trigger('reset')
  $('#change-password-message').hide()
  $('#sign-in-message').hide()
}

const createPeakFailure = function () {
  $('#create-peak-message').text('something went wrong!')
}

const updatePeakSuccess = function (response) {
  $('#update-peak-message').text('Peak updated!')
  $('form').trigger('reset')
  $('#change-password-message').hide()
  $('#sign-in-message').hide()
}

const updatePeakFailure = function () {
  $('#update-peak-message').text('Failed to update peak, try checking peak name')
}

//  get all peaks needs handlebars
const getAllPeaksSuccess = function (data) {
  // const peaksPageHtml = peaksPageTemplate({ peaks: data.peaks })
  // $('#peaks-template').html()
  // $('.handlebarContainer').append(peaksPageHtml)
  $('#get-all-peaks').ready(function () {
    // handle bars
    const peaksTemplate = $('#peaks-template').html()
    const compiledPeaksTemplate = Handlebars.compile(peaksTemplate)
    $('.peaks-list-container').html(compiledPeaksTemplate(data))
  // ending handlebars
  })
  $('#get-all-peaks-header').show()
  $('#change-password-message').hide()
  $('#sign-in-message').hide()
}

// .text('Peak, ' + JSON.stringify(peakArray[i].name) + ' ID: ' + JSON.stringify(peakArray[i]._id))

const getAllPeaksFailure = function () {
  $('#get-all-peaks-message').text('Failure on all')
}
//
// for loop for printing all peaks 27x time each
// for (let i = 0; i < peakLength; i++) {
//   console.log(peakArray[i].name)
//   // $('ul').append()
//   $('ul').append(peakArray.map(t => $('<li>').text(peakArray[i].name + ' ' + peakArray[i]._id)))
// }

// needs getOnePeak here

const getOnePeakSuccess = function (data) {
  $('#get-one-peak-message').text('Peak found! ' + JSON.stringify('name: ' + data.peak.name + ', description: ' + data.peak.description))
  $('form').trigger('reset')
  $('#change-password-message').hide()
  $('#sign-in-message').hide()
}

const getOnePeakFailure = function () {
  $('#get-one-peak-message').text('find one peak failed')
}

const deleteOnePeakSuccess = function () {
  $('#delete-one-peak-message').text('Successfully deleted')
  $('form').trigger('reset')
  $('#change-password-message').hide()
  $('#sign-in-message').hide()
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
