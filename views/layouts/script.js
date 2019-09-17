const teamName=document.getElementById('teamName');
const membersCount=document.getElementById('membersCount');
const firstName_1=document.getElementById('firstName-1');
const secondName_1=document.getElementById('secondName-1');
const email_1=document.getElementById('email-1');
const number_1=document.getElementById('number-1');
const college_1=document.getElementById('college-1');
const branch_1=document.getElementById('branch-1');
const year_1=document.getElementById('year-1');

const form=document.getElementById('main_contact_form');
const errorElement=document.getElementById('error');

form.addEventListener('submit',(e)=>{
    let messages=[];
    console.log("object")
    if(teamName.value===''||teamName.value==null){
        messages.push("team name requireed");
    }
    if(messages.length>0){
        e.preventDefault();
        errorElement.innerHTML=messages.join(", ");
    }
})