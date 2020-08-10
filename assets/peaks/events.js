'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
// un comment when store is used
// const store = require('../scripts/store')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreatePeak = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createPeak(formData)
    .then(ui.createPeakSuccess)
    .catch(ui.createPeakFailure)
}

const onUpdatePeak = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updatePeak(formData)
    .then(ui.updatePeakSuccess)
    .catch(ui.updatePeakFailure)
}

const onGetOnePeak = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.getOnePeak(formData)
    .then(ui.getOnePeakSuccess)
    .catch(ui.getOnePeakFailure)
}

const onDeleteOnePeak = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.deleteOnePeak(formData)
    .then(ui.deleteOnePeakSuccess)
    .catch(ui.deleteOnePeakFailure)
}

const onGetAllPeaks = function (event) {
  event.preventDefault()
  api.getAllPeaks(event)
    .then(ui.getAllPeaksSuccess)
    .catch(ui.getAllPeaksFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreatePeak,
  onUpdatePeak,
  onGetOnePeak,
  onGetAllPeaks,
  onDeleteOnePeak
}
