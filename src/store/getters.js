const getters = {
  token: state => state.user.token,
  uid: state => state.user.uid,
  questions: state => state.lung.questions,
  healthState: state => state.sugarControl.healthState
}

export default getters
