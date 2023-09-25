function isPrime(num) {     //判断是否为素数
    if (num < 2) {
    return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
    return false;
    }
    }
    return true;
}
function getPrimes(a) {     //遍历
    const primes = [];
    for (let i = 2; i <= a; i++) {
    if (isPrime(i)) {
    primes.push(i);
    }
    }
    return primes;
}
    
console.log(getPrimes(100));
console.log(getPrimes(1)); 
console.log(getPrimes(50));
console.log(getPrimes(2));