const express = require('express');
const passport = require('passport');
const router = express.Router();
const sequelize = require('../config/db');

/**
 * @route   POST /stats/all_stats
 * @desc    Create a new list for the user
 * @access  Private
 */
router.get(
    '/all_stats',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const result = {};
        try {
            const q1 = await sequelize.query(
                'SELECT COUNT(*) as nr_words FROM words WHERE user_id = :user_id',
                {
                    type: sequelize.QueryTypes.SELECT,
                    replacements: { user_id: Number(req.user.user_id) }
                }
            );
            result[Object.keys(q1[0])[0]] = Number(
                q1[0][Object.keys(q1[0])[0]]
            );
            const q2 = await sequelize.query(
                'SELECT SUM(times_reviewed) as nr_words_reviewed FROM words WHERE user_id = :user_id',
                {
                    type: sequelize.QueryTypes.SELECT,
                    replacements: { user_id: Number(req.user.user_id) }
                }
            );
            result[Object.keys(q2[0])[0]] = Number(
                q2[0][Object.keys(q2[0])[0]]
            );
            const q3 = await sequelize.query(
                'SELECT SUM(times_correct) as nr_words_correct FROM words WHERE user_id = :user_id',
                {
                    type: sequelize.QueryTypes.SELECT,
                    replacements: { user_id: Number(req.user.user_id) }
                }
            );
            result[Object.keys(q3[0])[0]] = Number(
                q3[0][Object.keys(q3[0])[0]]
            );
            const q4 = (result.nr_times_incorrect = await sequelize.query(
                'SELECT SUM(times_incorrect) as nr_words_incorrect FROM words WHERE user_id = :user_id',
                {
                    type: sequelize.QueryTypes.SELECT,
                    replacements: { user_id: Number(req.user.user_id) }
                }
            ));
            result[Object.keys(q4[0])[0]] = Number(
                q4[0][Object.keys(q4[0])[0]]
            );
            const q5 = await sequelize.query(
                'SELECT DISTINCT COUNT(DISTINCT language_id) as nr_languages FROM words WHERE user_id = :user_id',
                {
                    type: sequelize.QueryTypes.SELECT,
                    replacements: { user_id: Number(req.user.user_id) }
                }
            );
            result[Object.keys(q5[0])[0]] = Number(
                q5[0][Object.keys(q5[0])[0]]
            );
            const q6 = await sequelize.query(
                'SELECT COUNT(*) as nr_lists FROM lists WHERE user_id = :user_id',
                {
                    type: sequelize.QueryTypes.SELECT,
                    replacements: { user_id: Number(req.user.user_id) }
                }
            );
            result[Object.keys(q6[0])[0]] = Number(
                q6[0][Object.keys(q6[0])[0]]
            );
            result.recent_words = await sequelize.query(
                'SELECT * FROM words WHERE user_id = :user_id ORDER BY times_incorrect DESC LIMIT 10',
                {
                    type: sequelize.QueryTypes.SELECT,
                    replacements: { user_id: Number(req.user.user_id) }
                }
            );
            result.difficult_words = await sequelize.query(
                'SELECT * FROM words WHERE user_id = :user_id ORDER BY created_at DESC LIMIT 10',
                {
                    type: sequelize.QueryTypes.SELECT,
                    replacements: { user_id: Number(req.user.user_id) }
                }
            );
            return res.json(result);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
);

module.exports = router;
