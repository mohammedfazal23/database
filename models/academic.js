const mongoose = require('mongoose')
const Schema = mongoose.Schema

const academicSchema = new Schema({
    student_id: String,
    name: String,
    grades: { type: [String], default: [] },
    subjects: { type: [String], default: [] },

}, { timestamps: true })

const co_curricular_activities = new Schema({
    student_id: String,
    name: String,
    activity_type: String,
    duration: Number,
    achievements: { type: [String], default: [] },

}, { timestamps: true })



const Academic = mongoose.model('Academic', academicSchema)
module.exports = Academic

const Co_curricular_activities = mongoose.model('Co_curriculr_activities', co_curricular_activities)
module.exports = Co_curricular_activities