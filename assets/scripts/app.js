'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('../peaks/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-peak').on('submit', authEvents.onCreatePeak)
  $('#update-peak').on('submit', authEvents.onUpdatePeak)
  $('#get-one-peak').on('submit', authEvents.onGetOnePeak)
  $('#get-all-peaks').on('click', authEvents.onGetAllPeaks)
  $('#delete-one-peak').on('submit', authEvents.onDeleteOnePeak)
  $('#create-peak').hide()
  $('#update-peak').hide()
  $('#get-one-peak').hide()
  $('#get-all-peaks').hide()
  $('#delete-one-peak').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
})
