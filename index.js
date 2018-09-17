console.log('index.js to cancel axios')
const {CancelToken} = axios;
const source = CancelToken.source();

const button = document.querySelector('button');
const cancelButton = document.querySelector('#cancel')

button.addEventListener('click',  e => {
  setTimeout(async() => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts',{
      cancelToken: source.token
    })

    console.log(data)
  }, 3000)

})

cancelButton.addEventListener('click', e => {
  source.cancel();
  console.log('canceled')
})
