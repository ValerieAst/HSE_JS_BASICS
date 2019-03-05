// Координаты трехпалубного коробля
// Координаты текущего выстрела
// Количество попаданий
// Потоплен корабль или нет

// Создаем три переменные: location1,lLocation2, location3
let location1 = 5
let location2 = 6
let location3 = 7
// Создаем переменную currentShot
let currentShot
// Создаем переменную чтобы считать выстрелы
let shots = 0
// Создаем переменную для количества попаданий hits
let hits = 0
// Создаем переменную, чтобы отслеживать потоплен или нет
let isSunk = false

while (isSunk === false) {
  // Получить координаты выстрела
  currentShot = Number(prompt('Введите число от 0 до 9:'))
  // Нужно увеличить счетчик выстрелов
  shots += 1
  // Сравнить координаты выстрела с координатами коробля
  if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
    // Если игрок попал, то увеличиваем счетчик попаданий на 1
    hits += 1
    // Если количество попаданий = 3, то меняем значение перепенной isSunk на true и сообщаем о победе
    if (hits === 3) {
      isSunk = true
      alert('Победа!')
    }
  } else if (currentShot > 9) {
    alert('Ты че, пёс? СКАЗАЛИ ЖЕ ОТ НУЛЯ ДО ДЕВЯТИ ДИБИЛ')
  } else {
    alert('Промах!')
  }
}
let rating = Math.round(3 / shots * 100)
alert('Вам понадобилось ' + shots + ' выстрелов, чтобы потопить корабль. Ваш рейтинг: ' + rating)
