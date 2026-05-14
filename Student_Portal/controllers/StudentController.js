import * as StudentModel from "../models/StudentModel.js";

export const getStudentProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const profile = await StudentModel.getStudentProfile(id);

    res.status(200).json({
      success: true,
      message: "Student profile retrieved through adapter layer",
      studentProfile: profile
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};