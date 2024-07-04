var a = parseInt(prompt())
var b = parseInt(prompt())
var c = parseInt(prompt())
var s = (a+b+c)/2
console.log(s)
var x = parseFloat(Math.sqrt(s*(s-a)*(s-b)*(s-c)))
console.log(x)
var bsq = Math.pow(b,2)
var fourac = 4*a*c
var ur = Math.sqrt(Math.abs(bsq-fourac))
var res1 = parseFloat(-b+ur)/(2*a)
var res2 = parseFloat(-b-ur)/(2*a)
console.log("(-b + sqrt(b^2 - 4ac))/2a) = "+res1)
console.log("(-b - sqrt(b^2 - 4ac))/2a) = "+res2)