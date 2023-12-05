function init() {
  const deadline = new Date(2024, 0, 0)
  const timerId = setInterval(countdownTimer, 1000)
  const $days = document.getElementById('days')
  const $daysText = document.getElementById('days-text')
  const $daysAlt = document.getElementById('days-alt')
  const $hours = document.getElementById('hours')
  const $hoursText = document.getElementById('hours-text')
  const $hoursAlt = document.getElementById('hours-alt')
  const $minutes = document.getElementById('minutes')
  const $minutesText = document.getElementById('minutes-text')
  const $minutesAlt = document.getElementById('minutes-alt')

  function countdownTimer() {
    const diff = +deadline - +new Date()

    if (diff <= 0) {
      clearInterval(timerId)
    }

    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0
    // const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0

    $days && ($days.textContent = (days < 10 ? '0' : '') + days)
    $daysText && ($daysText.textContent = numWord(days, ['день', 'дня', 'дней']))
    $daysAlt && ($daysAlt.textContent = numWord(days, ['проект', 'проекта', 'проектов']))

    $hours && ($hours.textContent = (hours < 10 ? '0' : '') + hours)
    $hoursText && ($hoursText.textContent = numWord(hours, ['час', 'часа', 'часов']))
    $hoursAlt && ($hoursAlt.textContent = numWord(hours, ['созвон', 'созвона', 'созвонов']))

    $minutes && ($minutes.textContent = (minutes < 10 ? '0' : '') + minutes)
    $minutesText && ($minutesText.textContent = numWord(minutes, ['минута', 'минуты', 'минут']))
    $minutesAlt && ($minutesAlt.textContent = numWord(minutes, ['чашка кофе', 'чашки кофе', 'чашек кофе']))
  }

  countdownTimer()
}

function numWord(number: number, words: string[]) {
  return words[
    number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
  ]
}

export default { init }
