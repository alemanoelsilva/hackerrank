const FALLING_GRADE = 38;

const FIVES_MULTIPLE = [
  0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

/**
 *
 * @param {array} grades
 *
 * [73, 67, 38, 33]
 * [75, 67, 40, 33]
 */
function gradingStudents([length, ...grades]) {
  return grades.map((grade) => {
    if (grade < FALLING_GRADE) {
      return grade;
    }

    const nextGrade = FIVES_MULTIPLE.find((next, indice, array) =>
      next > grade ? array[indice - 1] : false
    );

    if (nextGrade - grade < 3) {
      return nextGrade;
    }

    return grade;
  });
}

const GRADES = [4, 73, 67, 38, 33];

function processData() {
  return gradingStudents(GRADES);
}

console.log(processData());
