import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
  startDate: { type: Date, required: true },
  endDate: { tpye: Date, required: true },
  goal: { type: String, required: true },
  userId: { type: ObjectId, ref: "User", required: true }
})

export default class ChallengeService {
  get repository() {
    return mongoose.model('challenge', _model)
  }
}