/*----------------------typing animation------------------------ */
var typed = new Typed(".typing",{
  strings:["","Computer Science Student","Web Designer","Data Analyst","Web Developer","QA(Quality Assurance) Tester"],
  typeSpeed:100,
  BackSpeed:60,
  loop:true,
})

/*----------------------- ASIDE----------------------- */
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;



for(let i=0;i<totalNavList;i++){
   const a = navList[i].querySelector("a");
   a.addEventListener("click",function()
   {

    removeBackSection();


    for(let j=0;j<totalNavList;j++)
    {
      if(navList[j].querySelector("a").classList.contains("active"))
      {
        addBackSection(j);
        //allSection[j].classList.add("back-section");

      }
      navList[j].querySelector("a").classList.remove("active")
    }
    this.classList.add("active")
    showSection(this);
    if(window.innerWidth<1200){
      asideSelectionTogglerBtn();
    }
   })
}
function showSection(element){

  for(let i=0;i<totalSection;i++){
    allSection[i].classList.remove("active");
  }
  const target =  element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active")
 
}

function removeBackSection(){
  for(let i=0;i<totalSection;i++)
    {
      allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num)
{
  allSection[num].classList.add("back-section");
}

function updateNav(element){
  for(let i=0;i<totalNavList;i++){
    navList[i].querySelector("a").classList.remove("active");
    const target =  element.getAttribute("href").split("#")[1];
    if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1]){
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
  const sectionIndex = this.getAttribute("data-section-index");
  // console.log(sectionIndex);
  showSection(this)
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
})

const navToggelerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navToggelerBtn.addEventListener("click",()=>{
  asideSelectionTogglerBtn();
})
function asideSelectionTogglerBtn()
{
  aside.classList.toggle("open");
  navToggelerBtn.classList.toggle("open");
  for(let i=0;i<totalSection;i++)
    {
      allSection[i].classList.toggle("open");
    }
}