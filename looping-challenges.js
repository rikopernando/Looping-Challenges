// SOAL PERTAMA => Melakukan Looping Menggunakan While
console.log(`1. Melakukan Looping Menggunakan While`)
var looping_pertama = 0
console.log('LOOPING PERTAMA')
while (looping_pertama < 20) {
	looping_pertama += 2 
	console.log(`${looping_pertama} - I Love Coding`)
}

console.log('LOOPING KEDUA')
var looping_kedua = 20
while (looping_kedua > 0) {
	console.log(`${looping_kedua} - I Will become Developer`)
	looping_kedua -= 2
}

console.log()

// SOAL KEDUA => Melakukan Looping Menggunakan For
console.log(`2. Melakukan Looping Menggunakan For`)
console.log('LOOPING PERTAMA')
for (var i = 1; i <= 20; i++) {
	console.log(`${i} - I Love Coding`)
}

console.log('LOOPING KEDUA')
for (var j = 20; j > 0; j--) {
	console.log(`${j} - I Will become Developer`)
}

console.log()

// SOAL KETIGA => Angka Ganjil dan Genap
console.log(`3. Angka Ganjil dan Genap`)
for (var i = 1; i <= 100; i++) {
	if (i % 2 == 0) {
		console.log(`GENAP`)
	}else{
		console.log(`GANJIL`)
	}
}

console.log()
// kelipatan 3 dengan pertambahan 2
console.log(`# kelipatan 3 dengan pertambahan 2`)
for (var i = 1; i <= 100; i+=2) {
	i % 3 == 0 ? console.log(`${i} KELIPATAN 3`) : console.log()
}
console.log()
// kelipatan 6 dengan pertambahan 5
console.log(`# kelipatan 6 dengan pertambahan 5`)
for (var j = 1; j <= 100; j+=5) {
	j % 6 == 0 ? console.log(`${j} KELIPATAN 6`) : console.log()
}
console.log()
// kelipatan 10 dengan pertambahan 9
console.log(`# kelipatan 10 dengan pertambahan 9`)
for (var k = 1; k <= 100; k+=9) {
	k % 10 == 0 ? console.log(`${k} KELIPATAN 10`) : console.log()
}
console.log()

// SOAL LOOPING asterisk
// Menyusun Barisan Bintang
console.log(`1. Menyusun Barisan Bintang`)
var rows = 5
for (var i = rows; i > 0; i--) {
	console.log(`*`)
}
console.log()


//Menyusun Barisan Bintang Dengan Nested Looping
console.log(`2. Menyusun Barisan Bintang Dengan Nested Looping`)
var rows2 = 5
for (var i = rows2; i > 0; i--) {
	var newRows = ""
	for (var j = rows2; j > 0; j--) {
		newRows += "*"
	}
	console.log(newRows)
}
console.log()

//Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log(`3. Menyusun Barisan Tangga Bintang Dengan Nested Looping`)
var rows3 = 5
for (var i = 1; i <= rows2; i++) {
	
	var newRows2 = ""
	for (var j = 1; j <= i; j++) {
		newRows2 += "*"
	}
	console.log(newRows2)
}
