export const getProfileThroughAdapterLayer = async (studentId) => {
  const response = await fetch(`http://localhost:9000/user/profile/${studentId}`);

  const text = await response.text();
  console.log("Adapter raw response:", text);

  let data;

  try {
    data = JSON.parse(text);
  } catch (err) {
    throw new Error("Adapter did not return valid JSON");
  }

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to fetch student profile");
  }

  return data.studentProfile;
};