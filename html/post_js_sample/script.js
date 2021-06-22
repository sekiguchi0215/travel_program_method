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

// 投稿ボタンの DOM 要素オブジェクトを取得
const postButton = document.getElementById('post-button')
// タイトル入力フィールドの DOM 要素オブジェクトを取得
const titleElement = document.getElementById('post-title')
// 内容入力エリアの DOM 要素オブジェクトを取得
const contentElement = document.getElementById('post-content')

// 入力内容をAPI側のサーバーに送信して保存する関数
const registerPost = async () => {
  // ローカルの Rails サーバーの posts#create に対応するURL
  const url = `${baseURL}/posts`
  // 入力内容をAPI側が受け取れるパラメータ形式に加工
  const postParams = {
    post: {
      title: titleElement.value,
      content: contentElement.value,
    },
  }

  // API側のサーバーに送信
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postParams),
  })

  if (!response.ok) {
    throw new Error(`${response.status} (${response.statusText})`)
  }

  const post = await response.json()
  return post
}

// フォームを送信し，入力内容を消去する関数
const postForm = async () => {
  try {
    // 入力内容をAPI側のサーバーに送信
    const post = await registerPost()
    // 入力内容を投稿リストに追加
    addPost(post)
    // 入力内容を消去
    titleElement.value = contentElement.value = ''
  } catch (e) {
    alert(e)
  }
}

// ボタンをクリックしたときにフォームを送信
postButton.addEventListener('click', postForm)
