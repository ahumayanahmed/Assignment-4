console.log("js connection");

const jobsData = [

{
id:1,
company:"Mobile First Corp",
position:"React Native Developer",
location:"Remote",
type:"Full-time",
salary:"$130,000 - $175,000",
description:"Build cross-platform mobile applications using React Native.",
status:"all"
},

{
id:2,
company:"WebFlow Agency",
position:"Web Designer & Developer",
location:"Los Angeles, CA",
type:"Part-time",
salary:"$80,000 - $120,000",
description:"Create stunning web experiences for high-profile clients.",
status:"all"
},

{
id:3,
company:"Google",
position:"Frontend Developer",
location:"California",
type:"Full-time",
salary:"$150,000 - $200,000",
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


