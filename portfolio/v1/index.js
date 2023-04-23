const zmienna = document.querySelector("#alan");

zmienna.addEventListener('click', () => {
    alert("YOOOOO")
    let z = 0
    while( z < 10 ) {
        if (z % 2 == 0)
        console.log("alan " + z);
        z = z+1
    }
})

console.log(zmienna);