// import data via fetch api into document

const listEl = document.querySelector(".result-categorys");

fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {
        data.forEach(post => {
            listEl.insertAdjacentHTML('beforeend', 
            `<li><img src="${post.icon}"><p>${post.category}</p><p>${post.score}</p><p>/100</p></li>`
            );
        });
    })
    .catch((error) => {
        console.log(error);
    });