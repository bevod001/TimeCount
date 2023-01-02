let workWeek = [
    { marsh: 1, time: 10.0 },
    { marsh: 2, time: 10.0 },
    { marsh: 3, time: 10.0 },
    { marsh: '3втчт', time: 9.0 },
    { marsh: 4, time: 8.5 },
    { marsh: 5, time: 9.85 },
    { marsh: 6, time: 9.92 },
    { marsh: 7, time: 10.0 },
    { marsh: 8, time: 7.68 },
    { marsh: 9, time: 7.92 },
    { marsh: 10, time: 7.68 },
    { marsh: 12, time: 8.0 },
    { marsh: 13, time: 8.0 },
    { marsh: 14, time: 8.0 },
    { marsh: 15, time: 8.0 },
    { marsh: 16, time: 8.0 },
    { marsh: 'Р', time: 12.0 },
    { marsh: 'СТР', time: 3.0 },
    { marsh: 'С1', time: 6.76 },
    { marsh: 'С2', time: 9.42 },
    { marsh: 'С3', time: 9.34 },
    { marsh: 'С4', time: 9.0 },
    { marsh: 'С5', time: 8.34 },
    { marsh: 'СР', time: 10.0 },
    { marsh: 'В1', time: 8.93 },
    { marsh: 'В2', time: 9.41 },
    { marsh: 'В3', time: 6.34 },
    { marsh: 'В4', time: 8.75 },
    { marsh: 'ВР', time: 10.0 }
];


let days = prompt('Количество дней в месяц?', '');

let sum = 0;
for (let i = 0; i < days; i++) {
    let day = prompt(`Номер маршрута? \nМаршрут: \n1 2 3 3втчт 4 5\n6 7 8 9 10 12 13\n14 15 16 Р СТР С1\nС2 С3 С4 С5 СР\nВ1 В2 В3 В4 ВР`, '');
    let result = workWeek.find(function (item) {
        if (item.marsh == day) {
            sum += item.time;

        }

    }
    )
}
alert('За месяц вы отработали: ' +sum.toFixed(2) + ' часов')


