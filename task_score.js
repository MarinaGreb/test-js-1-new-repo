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
console.log(`Student progress: ${fullStudentName}
Average score for all modules: ${averageScore}`);


//Вывод с сокращенным именем

console.log(`Student progress: ${fullStudentName.slice(0, 1)} 
Average score for all modules: ${averageScore}`);
