const endDate="28 Jun 2023 02:30 PM"
document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input")

// const clock=()=>{

// }

function clock(){
    const end =new Date(endDate)
    const now=new Date()
    const diff=(end-now)/1000;
    console.log("diff");

    if(diff<0)return;
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;

    //Convert in to days
}

//intial call
clock();


/* 1 day= 24hrs
1 hr=60mins
60 min=3600sec */

setInterval(
    ()=>{
        clock();
    },
    1000
)