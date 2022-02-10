const Question = require("../models/questionsModel");
const InCorrectAnswer = require("../models/incorrectAnswer_Model");
const CorrectAnswer = require("../models/correctAnswer_Model");
const { createQuestion, createCorrectAnswer, createInCorrectAnswer, deleteQ, detailQuestion,
        updateQ, deleteCA, deleteICA } = require("../service/adminService");

exports.newQuestion = async (req, res) => {
    const { content } = req.body;
    try {
        const Question = await createQuestion(content);
        return res.json({ msg: "Create question Success!", Question })
    } catch (error) {
        console.log(error);
    }
}

exports.newCorrectAnswer = async (req, res) => {
    const { content, question_id } = req.body;
    try {
        const correctAnswer = await createCorrectAnswer(content, question_id);
        return res.status(200).json({ msg: "Create Correct Answer success!!", correctAnswer });
    } catch (error) {
        console.log(error);
    }
};

exports.deleteCorrectAnswer = async (req, res) => {
    const { id } = req.body;
    try {
        const result = await deleteCA(id);
        return res.status(200).json({ msg: "Delete Correct Answer success!!", result });
    } catch (error) {
        console.log(error);
    }
};

exports.newInCorrectAnswer = async (req, res) => {
    const { content, question_id } = req.body;
    try {
        const inCorrectAnswer = await createInCorrectAnswer(content, question_id);
        return res.status(200).json({ msg: "Create In Correct Answer success!!", inCorrectAnswer });
    } catch (error) {
        console.log(error);
    }
};

exports.deleteInCorrectAnswer = async (req, res) => {
    const { id } = req.body;
    try {
        const result = await deleteICA(id);
        return res.status(200).json({ msg: "Delete In Correct Answer success!!", result });
    } catch (error) {
        console.log(error);
    }
};

exports.deleteQuestion = async (req, res) => {
    const { id } = req.body;
    try {
        const result = await deleteQ(id);
        return res.status(200).json({ msg: "Delete Question success!!", result });
    } catch (error) {
        console.log(error);
    }
}

exports.getDetailQuestion = async (req, res) => {
    const { id } = data || req.params;
    try {
        const getDetailQuestion = await detailQuestion(id);
        return res.json({ getDetailQuestion });
    } catch (error) {
        console.log(error);
    }
};

exports.updateQuestion = async (req, res) => {
    const { id, content } = req.body;
    try {
        const update = await updateQ(id, content);
        return res.status(200).json({ msg: "Update Question success!!", update });
    } catch (error) {
        console.log(error);
    }
};






