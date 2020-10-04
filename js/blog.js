// var blogPosts=[];
// fetch('https://raw.githubusercontent.com/MBeshai/MBeshai.github.io/master/blogposts/blogEntrySchema.json')
//     .then((response) => {
//         blogPosts.push(response.json());
//     })
//     .then((data) => {
//         console.log(data);
//     });
//
// console.log(JSON.stringify(blogPosts));

function loadPost(el){
    var parentEl = el.parentElement;
    var thisSection = parentEl.parentElement.parentElement.parentElement;
    document.getElementById("masthead").hidden=true;
    parentEl.querySelector(".blogbody").classList.remove('d-none');
    parentEl.querySelector(".articleback").classList.remove("d-none");
    thisSection.id = "activeSection";
    var sections = document.getElementsByTagName('section');

    for(var i = 0; i < sections.length; ++i) {
        if(sections[i].id != "activeSection") {
            sections[i].classList.add("d-none");
        }
    }
}

function bloglist(el) {
    var sectionEl = el.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.log(sectionEl.classList.toString())
    var activeSection = document.getElementById("activeSection")
    sectionEl.querySelector(".blogbody").classList.add('d-none');
    sectionEl.querySelector(".articleback").classList.add("d-none");
    activeSection.id='';
    document.getElementById("masthead").removeAttribute("hidden");
    var sections = document.getElementsByTagName('section');
    for(var i = 0; i < sections.length; ++i) {
            sections[i].classList.remove("d-none");
    }

}