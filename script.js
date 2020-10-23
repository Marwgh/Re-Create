function init() {
    fetch("http://migdd.dk/kea/Wp/wp-json/wp/v2/house?_embed").then(r => r.json()).then(
        function (data) {
            categoriesReceived(data);
            console.log(data)
        }
    )
}
init();

function categoriesReceived(post) {
    /*createNavigation(post);*/
    createSections(post);

}


function createSections(categories) {

    categories.forEach(showproduct);
}

function showproduct(product) {
    const templ = document.querySelector("#Template").content;

    const copy = templ.cloneNode(true);

    const h1 = copy.querySelector("h1");
    h1.textContent = product.title.rendered;

    const img = copy.querySelector(".productImg");
    img.setAttribute('src', product.location_image.guid);

    copy.querySelector(".bed > p").textContent = product.bed;
    copy.querySelector(".bath > p").textContent = product.bath;
    copy.querySelector(".sqFeet > p").textContent = product.size;
    /*const disc = copy.querySelector(".discount");
    disc.innerHTML += product.content.rendered;*/




        document.querySelector("main").appendChild(copy);



}
