const express = require('express');
const router = express.Router();

/**
 * @route   GET /auth/login
 * @desc    Login user by returning JWT token
 * @access  Public
 */
router.post('/login', (req, res, next) => {});

/**
 * @route   GET /auth/register
 * @desc    Register user
 * @access  Public
 */
router.post('/register', (req, res, next) => {});

/**
 * @route   GET /auth/logout
 * @desc    Logout user
 * @access  Private
 */
router.post('/logout', (req, res, next) => {});
