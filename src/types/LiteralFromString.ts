// типизация с использованием двух дженериков — T и U. 
// Теперь у нас некий тип Т будет зависеть от другого типа U,
// вместо которого мы можем использовать
// что угодно — хоть string, хоть number,
// хоть boolean. Реализовано это с помощью функции-обертки:


  export function interLiteralString<T extends string>(arg: T): T{    
    return  interLiteralFromString<string, T>(arg);
  }
function interLiteralFromString<U, T extends U>(arg: T): T{
    return arg;
  }