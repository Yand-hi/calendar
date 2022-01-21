const time = g('#time')
let now = new Date()
render(now)
const left = g('.left')
left.addEventListener('click', () => {
    render(new Date(now - 86400 * 1000 * 30))
})
const right = g('.right')
right.addEventListener('click', () => {
    render(new Date(now - 0 + 86400 * 1000 * 30))
})

function g(selector) {
    return document.querySelector(selector)
}
function gs(selector) {
    return document.querySelectorAll(selector)
}
function render(main) {
    now = main
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    time.textContent = year + '年' + month + '月'

    const firstDayOfCurrentMonth = new Date(year, month - 1, 1)
    const weekdayOfFirstDayOfCurrentMonth = firstDayOfCurrentMonth.getDay()
    const lastDayOfNextMonth = new Date(new Date(year, month, 1) - 86400 * 1000)
    const dayOfLastDayOfNextMonth = lastDayOfNextMonth.getDate()
    const weekdayOfLastDayOfCurrentMonth = lastDayOfNextMonth.getDay()
    const numberOfMonth = dayOfLastDayOfNextMonth

    const days = g('#days')
    days.innerHTML = ""
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
        if (i === new Date().getDate() && month === new Date().getMonth() + 1 && year === new Date().getFullYear()) {
            li.classList.add('today')
        }
        days.append(li)
    }
    for (let i = weekdayOfLastDayOfCurrentMonth + 1; i <= 7; i++) {
        const delta = i - weekdayOfLastDayOfCurrentMonth
        const li = document.createElement('li')
        const d = new Date(lastDayOfNextMonth - 0 + 86400 * 1000 * delta)
        li.textContent = d.getDate()
        li.className = 'daysOfLastMonth'
        days.append(li)
    }
}