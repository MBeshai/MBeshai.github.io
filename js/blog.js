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

function loadPost() {
    document.getElementById("masthead").hidden=true;
    document.getElementById("blogbody").classList.remove('d-none');
    document.getElementById("articleback").classList.remove("d-none");
}

function bloglist() {
    console.log("bloglist")
    document.getElementById("masthead").removeAttribute("hidden")
    document.getElementById("blogbody").classList.add('d-none');
    document.getElementById("articleback").classList.add("d-none");
    console.log("bloglist2")

}