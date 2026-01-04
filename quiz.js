const form=document.getElementById('quizForm')
form.addEventListener('submit',(e)=>{
e.preventDefault();
const data=new FormData(form)
let finalScore=0
const answer={
    q1:'b',
    q2:'c',
    q3:'b',
    q4:'b',
    q5:'c',
    q6:'b',
    q7:'c',
    q8:'b',
    q9:'c',
    q10:'a'
}
for(let [name,value]of data.entries()){
    if(answer[name]==value)
        finalScore++
}
document.getElementById("resultBox").textContent=`Your score is ${finalScore}`
form.reset()

})
