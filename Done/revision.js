function checkPrime(n) {

if (n == 2) {
    return false;
}
for (let i = 2; i*i <= n; i++) {
    if (n % i==0) {
       return true;
    }
} return false; 
}

let limit=15;
for (let i = 2; i <= limit; i++) {
    if (checkPrime(i) != true) {
        console.log(i, "Is Prime");
    }else {
        console.log(i, "Not a Prime");
    }
}