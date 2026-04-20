import pool from '../db.js';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const createUser = async (userProfile, email, password) => {

    if (!email) {
        throw new Error('Invalid email');
    }

    if (!validator.isEmail(email)) {
        throw new Error('Invalid email format');
    }

    const [user] = await pool.query(
        'SELECT * FROM usert WHERE email = ?', 
        [email]
    );

    if (user.length === 1) {
        throw new Error('Email already exists');
    }

    if (!password) {
        throw new Error('Invalid password');
    }

    if (!validator.isStrongPassword(password)) {
        throw new Error('Weak password');
    }

    const salt = bcrypt.genSaltSync(10);
    const newPassword = bcrypt.hashSync(password, salt);

    // external API (required by teacher)
    const response = await fetch(
        'http://localhost:9000/auth/new',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userProfile)
        }
    );


    if (!response.ok) {
        throw new Error('External API failed');
    }

    const apiResult = await response.json();

    // insert to DB
    const [newUser] = await pool.query(
        'INSERT INTO usert (email, password) VALUES (?, ?)', 
        [email, newPassword]
    );

    return {
        id: newUser.insertId,
        external: apiResult
    };
};