
const users = [
	"Андрусишин Олег",
	"Балицький Олексій",
	"Барановський Ігор",
	"Бей Тетяна",
	"Білас Всеволод",
	"Білоус Андрій",
	"Бордун Галина",
	"Буба Євген",
	"Вантух Володимир",
	"Васьків Роман",
	"Вервега Тарас",
	"Візняк Юрій",
	"Гагалюк Богдан",
	"Ганущин Олександр",
	"Гичка Михайло",
	"Гірняк Володимир",
	"Голуб Юрій",
	"Грабінський Ігор",
	"Грицик Ольга",
	"Гудима Юрій",
	"Дворянин Парасковія",
	"Дейнека Анатолій",
	"Демчина Роман",
	"Дзюдзь Михайло"
];
let nomer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
let table = document.getElementById(`table`);
let data = ` <tr>
<th>№</th>
<th>Користувач</th>
<th>Відправити лист</th>
</tr>`;
data += `<tr>
<td>1</td>
<td>${users[0]}</td>
<td><input type="checkbox"></td>
</tr>`;
data += `<tr>
<td>2</td>
<td>${users[1]}</td>
<td><input type="checkbox"></td>
</tr>`;
for(i=0; i<24; i++){
data += `<tr>
<td>${nomer[i]}</td>
<td>${users[i]}</td>
<td><input type="checkbox"></td>
</tr>`;
}
table.innerHTML = data;