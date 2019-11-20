import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
  challengeName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  goal: { type: String, required: true },
  userId: { type: ObjectId, ref: "User", required: true }
})

export default class ChallengeService {
  get repository() {
    return mongoose.model('challenge', _model)
  }
}