let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
  ]
  
let studentsWhoPass = [];
for (let i=0;i<=allStudents.length-1;i++) {
    if(typeof(allStudents[i])==="number" && allStudents[i]>=3){     //判断数据类型是number并且>=3
        studentsWhoPass.push(allStudents[i])
    }
    else{
        if(typeof(allStudents[i])==="string" &&allStudents[i]!=='C-'){      //判断数据类型是string并且不为‘C’
            studentsWhoPass.push(allStudents[i])
        }
    }
}
console.log(studentsWhoPass);