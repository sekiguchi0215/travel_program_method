const baseURL = 'http://localhost:3000'
const postList = document.getElementById('post-list')

const fetchPosts = async () => {
  const url = `${baseURL}/posts`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`${response.status} (${response.statusText})`)
  }

  const posts = await response.json()
  return posts
}

const addPost = (post) => {
  const content = `
    <div id="posts-${post.id}">
      <p>タイトル: ${post.title}</p>
      <p>内容: ${post.content}</p>
    </div>
  `
  postList.insertAdjacentHTML('beforeend', content)
}

const displayPosts = async () => {
  try {
    const posts = await fetchPosts()
    posts.forEach((post) => addPost(post))
  } catch (e) {
    alert(e)
  }
}

displayPosts()
