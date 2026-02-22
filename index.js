console.log("js connection");

const jobsData = [

{
id:1,
company:"Mobile First Corp",
position:"React Native Developer",
location:"Remote",
type:"Full-time",
salary:"$150,000 - $160,000",
description:"Build cross-platform mobile applications using React Native.",
status:"all"
},

{
id:2,
company:"WebFlow Agency",
position:"Web Designer & Developer",
location:"Los Angeles, CA",
type:"Part-time",
salary:"$60,000 - $80,000",
description:"Create stunning web experiences for high-profile clients.",
status:"all"
},

{
id:3,
company:"Google",
position:"Frontend Developer",
location:"California",
type:"Full-time",
salary:"$140,000 - $180,000",
description:"Develop scalable frontend systems used globally.",
status:"all"
},

{
id:4,
company:"Microsoft",
position:"Software Engineer",
location:"Seattle",
type:"Full-time",
salary:"$140,000 - $180,000",
description:"Build enterprise-level software solutions.",
status:"all"
},

{
id:5,
company:"Amazon",
position:"Backend Developer",
location:"Remote",
type:"Full-time",
salary:"$130,000 - $170,000",
description:"Work on cloud backend systems powering millions.",
status:"all"
},

{
id:6,
company:"Meta",
position:"UI Engineer",
location:"New York",
type:"Full-time",
salary:"$145,000 - $190,000",
description:"Create UI systems for global social platforms.",
status:"all"
},

{
id:7,
company:"Netflix",
position:"JavaScript Engineer",
location:"Remote",
type:"Full-time",
salary:"$160,000 - $210,000",
description:"Develop streaming interfaces used worldwide.",
status:"all"
},

{
id:8,
company:"Spotify",
position:"Frontend Engineer",
location:"Remote",
type:"Full-time",
salary:"$140,000 - $185,000",
description:"Build music streaming user interfaces.",
status:"all"
}

];

let currentTab = "all";

const jobsContainer = document.getElementById("jobsContainer");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const sectionCount = document.getElementById("sectionCount");



function renderJobs(){

jobsContainer.innerHTML = "";

let filteredJobs = jobsData.filter(job=>{

if(currentTab==="all") return true;

return job.status === currentTab;

});


sectionCount.innerText = filteredJobs.length + " jobs";


if(filteredJobs.length === 0){

jobsContainer.innerHTML = `
<div class="bg-white border rounded-xl shadow-sm py-12 text-center">

<img src="img/folder-regular-full.svg"
class="w-20 mx-auto mb-4 opacity-60">

<h3 class="text-lg font-semibold text-gray-700">
No jobs available
</h3>

<p class="text-gray-400 text-sm">
Check back soon for new job opportunities
</p>

</div>
`;

updateCounts();
return;
}


filteredJobs.forEach(job=>{

let badge = "";

if(job.status==="all"){

badge = `
<span class="text-xs  text-blue-700 px-2 py-1 rounded">

</span>
`;

}

else if(job.status==="interview"){

badge = `
<span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
INTERVIEW
</span>
`;

}

else if(job.status==="rejected"){

badge = `
<span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
REJECTED
</span>
`;

}


const card = document.createElement("div");

card.className =
"bg-white border rounded-xl shadow-sm p-5 hover:shadow-md transition";


card.innerHTML = `

<div class="flex justify-between">

<div>

<h3 class="font-semibold text-gray-800">
${job.company}
</h3>

<p class="text-gray-600 text-sm">
${job.position}
</p>

<p class="text-gray-400 text-sm mt-1">
${job.location} • ${job.type} • ${job.salary}
</p>

<div class="mt-2">
${badge}
</div>

</div>


<button onclick="deleteJob(${job.id})"
        class="p-2 rounded-full hover:bg-gray-100">
  <img src="img/trash-can-regular-full.svg" alt="Delete"
       class="w-5 h-5"/>
</button>

</div>


<p class="text-gray-600 text-sm mt-3">
${job.description}
</p>


<div class="flex gap-3 mt-4">

<button onclick="setStatus(${job.id},'interview')"
class="px-4 py-1 text-sm border border-green-600 text-green-600 rounded hover:bg-green-50">

INTERVIEW

</button>


<button onclick="setStatus(${job.id},'rejected')"
class="px-4 py-1 text-sm border border-red-600 text-red-600 rounded hover:bg-red-50">

REJECTED

</button>

</div>

`;

jobsContainer.appendChild(card);

});


updateCounts();

}



function setStatus(id,status){

const job = jobsData.find(job=>job.id===id);

job.status = status;

renderJobs();

}


function deleteJob(id){

const index = jobsData.findIndex(job=>job.id===id);

jobsData.splice(index,1);

renderJobs();

}


function updateCounts(){

totalCount.innerText = jobsData.length;

interviewCount.innerText =
jobsData.filter(job=>job.status==="interview").length;

rejectedCount.innerText =
jobsData.filter(job=>job.status==="rejected").length;

}


document.querySelectorAll(".tab").forEach(tab=>{

tab.addEventListener("click",function(){

document.querySelectorAll(".tab").forEach(btn=>{

btn.classList.remove("bg-blue-600","text-white");

btn.classList.add("bg-gray-200");

});

this.classList.remove("bg-gray-200");

this.classList.add("bg-blue-600","text-white");

currentTab = this.dataset.tab;

renderJobs();

});

});



renderJobs();