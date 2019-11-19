import express from 'express'
import { Authorize } from '../middleware/authorize.js'
import ChallengeService from '../services/ChallengeService.js'

let _challengeService = new ChallengeService().repository

export default class ChallengeController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await _challengeService.find({ userId: req.session.uid })
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let data = await _challengeService.findById(req.params.id)
      if (!data) {
        throw new Error("Invalid Id")
      }
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.userId = req.session.uid
      let data = await _challengeService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let data = await _challengeService.findOneAndUpdate({ _id: req.params.id, }, req.body, { new: true })
      if (data) {
        return res.send(data)
      }
      throw new Error("Invalid Id")
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await _challengeService.findByIdAndRemove({ _id: req.params.id })
      res.send("Deleted Challenge")
    } catch (error) {
      next(error)
    }
  }
}