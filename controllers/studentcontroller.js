const Academic = require('../models/academic')

const Co_curricular_activities = require('../models/academic')

const index = (req, res, next) => {
    Academic.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'an error occured!'
            })
        })
}
const show = (req, res, next) => {
    let student_id = req.body.student_id
    academic.findById(student_id)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'an error occured'
            })
        })
}
const store = (req, res, next) => {
    let academic = new Academic({
        student_id: req.body.student_id,
        name: req.body.name,
        grades: req.body.grades,
        subjects: req.body.subjects

    })
    academic.save()
        .then(response => {
            res.json({
                message: 'students added succefully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error occured!'
            })
        })
}

const update = (req, res, next) => {
    let student_id = req.body.student_id

    let updateData = {
        student_id: req.body.student_id,
        name: req.body.name,
        grades: req.body.grades,
        subjects: req.body.subjects

    }
    academic.findByIdAndUpDate(student_id, { $set: updateData })
        .then(() => {
            res.json({
                message: 'student updated succefully'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured'
            })
        })
}

const destroy = (req, res, next) => {
    let student_id = req.body.student_id
    academic.findOneAndRemove(student_id)
        .then(() => {
            req.json({
                message: 'student deleted successfully'
            })
        })
        .catch(error => {
            req.json({
                message: 'an error occured'
            })
        })
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}