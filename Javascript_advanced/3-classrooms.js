//

function createClassRoom(numbersOfStudents){
    function studentSeat(seat){
        return ()=>{
            return seat;
        };
    };
    const students = []
    for (let counter = 0; counter < numbersOfStudents; counter++){
        const seatNumber = counter + 1;
        students.push(studentSeat(seatNumber));

    };
    return students;
};
const classRoom = createClassRoom(10)

// executing the code 
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
