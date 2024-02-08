//

function welcomeMessage(fullName){
    return ()=>{
        alert(`Welcome ${fullName}`)
    };
};

const guillaume = welcomeMessage("Guillaume")
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");

//executing the code
guillaume();
alex();
fred();
