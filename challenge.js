const counter = document.getElementById("counter")
const btnBox = document.getElementById("btn-box")
const likeList = document.getElementById("like-list")
const commentBox = document.querySelector("#list.comments")
const commentForm = document.getElementById("comment-form")

let likedNumbers = {}
let count = parseInt(counter.innerText)
let timer = setInterval( () => {
  count++
  counter.innerText = count
  console.log(count);
}, 1000)


function increaseCount() {
  count ++
  counter.innerText = count
}

function decreaseCount() {
  count -= 1
  counter.innerText = count
}

function likeNumber() {
  let stringCount = count.toString()

  if (Object.keys( likedNumbers).includes(stringCount) ) {
    let likedLi = likeList.querySelector(`.liked-${count}`)
    likedNumbers[count]++
    likedLi.innerHTML = `${count} has been liked ${likedNumbers[count]} times`
  } else {
    likedNumbers[count] = 1
    likeList.innerHTML += `<li class="liked-${count}">${count} has been liked</li>`
  }
}

btnBox.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "-":
      decreaseCount()
      break
    case "+":
      increaseCount()
      break
    case "<3":
      likeNumber()
      break
    case "pause":
      if (e.target.dataset.status === "on") {
        clearInterval(timer)
        e.target.innerText = "resume"
        e.target.dataset.status = "off"
      } else {
        e.target.innerText = "pause"
        e.target.dataset.status = "on"
        let timer = setInterval( () => {
          count++
          counter.innerText = count
          console.log(count);
        }, 1000)
      }
      break
  }
})

commentForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const newComment = commentForm.querySelector("#new-comment").value
  commentBox.innerHTML += `<p>${newComment}</p>`
  e.target.reset()
})
