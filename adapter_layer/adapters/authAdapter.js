export const create = async (profile) => {
    const transformedProfile = {
        name: profile.firstName + " " + profile.lastName,
        email: profile.email,
        birthdate: profile.dob,
        program: profile.course + " " + profile.major,
        address: profile.address,
        studentStatus: profile.status
        }
    const respons = await fetch(
        `https://ais-simulated-legacy.onrender.com/api/students`, {
            method: "POST",
            headers: {  
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transformedProfile)
        }
    );
    return await respons.json(
    )

}

export const findById = async (studentId) => {
  const cleanId = String(studentId).trim();

  console.log("Student ID received by adapter:", cleanId);

  const response = await fetch(
    `https://ais-simulated-legacy.onrender.com/api/students/${cleanId}`
  );

  const text = await response.text();
  console.log("Legacy raw response:", text);

  if (!response.ok) {
    throw new Error(`Failed to fetch student: ${response.status}`);
  }

  const data = JSON.parse(text);

  return {
    id: data._id,
    name: data.name,
    birthdate: data.birthdate,
    program: data.program,
    address: data.address,
    studentStatus: data.studentStatus
  };
};
