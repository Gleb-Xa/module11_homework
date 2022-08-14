function defineNumber (num) {
    let result;
    let isNuber = true
    if (num > 1 && num < 1001) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isNuber = false
            }
        }
        result = isNuber ? 'Число ' + num +' - простое': 'Число ' + num +' - составное'
    }
    else if (num >1000) {
        result = 'Данные не верны'
    }
    return result;
}

console.log(defineNumber(9))