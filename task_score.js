let pointsIntroduction;
let pointsGit;
let pointsJs;
let averageScore;
let fullStudentName;

pointsIntroduction = 150;
pointsGit = 425;
pointsJs = 621;
fullStudentName = "Petrov Ivan Olegovich";
averageScore = Math.round((pointsIntroduction + pointsGit + pointsJs) / 3);
console.log(`Student progress: ${fullStudentName} \n
Average score for all modules: ${averageScore}`);