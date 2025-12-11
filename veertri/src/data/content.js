import { educationalVideos, courses } from "./education";
import { getContentBySubjectAndClass } from "./subjects";

export const getContentById = (id) => {
  // Check if ID is a dynamic string ID (e.g., "10-Science-0")
  if (typeof id === "string" && id.includes("-")) {
    const parts = id.split("-");
    // We expect at least 3 parts: classLevel, subject, index
    // But subject might contain dashes? No, our subjects in keys don't have dashes usually, but let's be careful.
    // Actually, the ID generation was: `${classLevel}-${subject}-${index}`
    // If subject has dashes, this split will be wrong.
    // Let's assume subject doesn't have dashes for now, or handle it.
    // The subjects we used are keys in curriculumData.
    // "Class 1-5", "Class 6-10" are groups.
    // Subjects are "Maths", "EVS", "Science", "Social Science", "Physics", etc.
    // None of them seem to have dashes. "Computer Code" has space.

    if (parts.length >= 3) {
      let classLevel;
      let subject;
      let index = parseInt(parts[parts.length - 1]);

      if (parts[0] === "Pre" && parts[1] === "school") {
        classLevel = "Pre-school";
        subject = parts.slice(2, parts.length - 1).join("-");
      } else {
        classLevel = parseInt(parts[0]);
        subject = parts.slice(1, parts.length - 1).join("-");
      }

      const items = getContentBySubjectAndClass(subject, classLevel);
      if (items && items[index]) {
        return items[index];
      }
    }
  }

  return [...educationalVideos, ...courses].find(
    (item) => item.id == id // Use loose equality to match string/number
  );
};
