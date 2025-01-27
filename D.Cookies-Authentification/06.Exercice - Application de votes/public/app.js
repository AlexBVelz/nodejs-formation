let votes = [0,0,0];

const socket = io();


function vote(option){
    votes[option-1]++;
    updateCounters();
    socket.emit('vote',option);
}

function updateCounters(){
    for(let i = 0; i < votes.length; i++){
        const counterElement = document.getElementById(`counter${i+1}`);
        counterElement.textContent = `Vote pour option ${i+1} : ${votes[i]}`;

    }
}

const totalCounter = document.getElementById('totalCounter');
totalCounter.textContent = `Total des votes : ${votes.reduce((acc,val) => acc+val,0)}`;
socket.on(' Modification de vote',(option) => {
    votes[option-1]++;
    updateCounters();
})