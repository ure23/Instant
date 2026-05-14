import * as AuthAdapter from "../adapters/authAdapter.js";

export const registerStudent = async (studentProfile) => {
    if (studentProfile.firstname === '') {
        throw new Error('First name is required');
    }
    return await AuthAdapter.create(studentProfile);
};

export const getStudentProfile = async (studentId) => {
    if (!studentId) {
        throw new Error('Student ID is required');
    }

    return await AuthAdapter.findById(studentId);
};