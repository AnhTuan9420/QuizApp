const express = require ("express");
const admin = require ("../controllers/adminController");
const router = express.Router();

router.post('/newQuestion', admin.newQuestion);
router.post('/correctAnswer', admin.newCorrectAnswer);
router.post('/inCorrectAnswer', admin.newInCorrectAnswer);
router.delete('/deleteQuestion', admin.deleteQuestion);
router.get('/getDetailQuestion', admin.getDetailQuestion);

module.exports = router;