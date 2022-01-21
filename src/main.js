function g(selector) {
    return document.querySelector(selector)
}
function gs(selector) {
    return document.querySelectorAll(selector)
}

const time = g('#time')
const now = new Date()
const year = now.getFullYear()
const month = now.getMonth() + 1
time.textContent = year + '年' + month + '月'

const firstDayOfCurrentMonth = new Date(year, month - 1, 1)
const weekdayOfFirstDayOfCurrentMonth = firstDayOfCurrentMonth.getDay()
const lastDayOfNextMonth = new Date(new Date(year, month, 1) - 86400 * 1000)
const dayOfLastDayOfNextMonth = lastDayOfNextMonth.getDate()
const numberOfMonth = dayOfLastDayOfNextMonth

const days = g('#days')
for (let i = 1; i < weekdayOfFirstDayOfCurrentMonth; i++) {
    const li = document.createElement('li')
    const d = new Date(firstDayOfCurrentMonth - 86400 * 1000 * i)
    li.textContent = d.getDate()
    li.className = 'daysOfLastMonth'
    days.prepend(li)
}
for (let i = 1; i <= numberOfMonth; i++) {
    const li = document.createElement('li')
    li.textContent = i
    days.append(li)
}
const left = g('.left')
left.addEventListener('click',()=>{
    console.log()
})
