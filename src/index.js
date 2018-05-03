/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn, thisArg) {
    const arrLength = array.length;

    for (let i = 0; i < arrLength; i++) {
        fn.call(thisArg, array[i], i, array);
    }

    return undefined;
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn, thisArg) {
    const arrLength = array.length;
    const mappedArray = [];

    for (let i = 0; i < arrLength; i++) {
        mappedArray[i] = fn.call(thisArg, array[i], i, array);
    }

    return mappedArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    const arrLength = array.length;

    if (arrLength === 0 && initial === undefined) {
        throw TypeError('Reduce of empty array with no initial value')
    }

    let result = array[0];
    let startPos = 1;

    if (initial) {
        result = initial;
        startPos = 0;
    }

    for (let i = startPos; i < arrLength; i++) {
        result = fn(result, array[i], i, array);
    }

    return result;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let resultArr = [];

    for (let prop in obj) {
        if (!obj.hasOwnProperty(prop)) {
            continue;
        }

        resultArr.push(prop.toUpperCase());
    }

    return resultArr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to = array.length) {
    let resultArr = [];
    let arrayLength = array.length;
    let startPos = from;

    if (startPos < 0 && startPos >= - arrayLength) {
        startPos += arrayLength;
    } else if (startPos < 0 && startPos < - arrayLength) {
        startPos = 0;
    }

    let finishPos = (to >= 0) ? to : arrayLength + to;

    if (startPos > finishPos) {
        return [];
    }

    for (let i = startPos; i < finishPos && i < arrayLength; i++) {
        resultArr.push(array[i]);
    }

    return resultArr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy(obj, {
        set(target, prop, value) {
            target[prop] = value * value;

            return true;
        }
    })
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
