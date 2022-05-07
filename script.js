// 1
function reverse(s) {
    let a = s.split(" ")
    if( a.length < 2) return s
    return [ a[1], a[0]].concat( a.splice( 2, a.length)).join(" ")
}

console.log( reverse( 'привет мир'));
//2
function v(str){
    let sl = str.length
    if ( sl % 2 == 0){
        console.log("Четное")
    }else {
        console.log("Нечетное")
    }

}
v('привет')
// 3
function u(str){

    let c = str.length
    if ( c % 2 == 0){
        console.log(str.slice(2,4))
    }else {
        console.log(str.slice(3,4))
    }
}
u("lengths")