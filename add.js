let btn= document.querySelector('.new')
let step = document.querySelector('.step')
let reason = document.querySelector('.reason')
const reasonAnSteps=[{reason:'reset',
step:'steps: click start button click on power icon ->kip figer on shift key and prease restar mainu->wait and click on troubleshoot->then chose option on  reset to this pc '}
    ,{
        reason:'window 10 inistallation',
        step:'Requarement: boot USB flash. steps:press the key that open the boot-device for the computer shuch as Esc/F keys-> select the option that boots the pc from the flash-> windows setup starts->inistall now '
    }
];
btn.addEventListener('click',function(){
    let random=Math.floor(Math.random() * reasonAnSteps.length)
    reason.innerText = reasonAnSteps[random].reason
    step.innerText=reasonAnSteps[random].step

})