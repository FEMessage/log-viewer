export default url => new Promise((resolve, reject)=>{
  const xhr = new XMLHttpRequest()
  xhr.open("GET",url)
  xhr.send()
  xhr.onload = data => resolve(data.target.responseText)
})