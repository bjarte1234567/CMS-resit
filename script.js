const apiBase = "https://restaurant.bjarteol.no/wp-json/wp/v2/posts";
const postsContainer = document.getElementById("posts");
console.log(apiBase);
fetch(apiBase)
  .then((response) => response.json())
  .then((posts) => {
    // Loop gjennom alle postene og opprett HTML-struktur for hver post
    const postItems = posts.map((post) => {
      return `
        <div>
          <h2>${post.title.rendered}</h2>
          <img src="${post.featured_media_src_url}" alt="${post.title.rendered}"class="post-image">
          <p>${post.content.rendered}</p>
        </div>
      `;
    });

    postsContainer.innerHTML = postItems.join("");
  })
  .catch((error) => {
    console.log(error);
  });
