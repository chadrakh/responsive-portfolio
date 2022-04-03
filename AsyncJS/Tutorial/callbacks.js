const posts = [
    {title: 'Post 1', body: 'This is the first post.'},
    {title: 'Post 2', body: 'This is the second post.'}
];

getPosts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output  += `<li>${post.title}<li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback()
    }, 2000);
}

createPost({title: 'Post 3', body: 'This is the third post.'}, getPosts);
