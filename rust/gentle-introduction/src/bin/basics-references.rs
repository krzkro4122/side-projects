fn by_ref(x: &i32) -> i32 {
    *x + 1
}

fn modifies(x: &mut f64) {
    *x = 10.0;
}

fn main() {
    let i = 10;
    let result1 = by_ref(&i);
    let result2 = by_ref(&42);
    println!("i={i}\tresult1={result1}\tresult2={result2}");

    let mut i = -5.0;
    modifies(&mut i);
    println!("i={i}");

    let pi: f64 = 3.1416;
    let x = pi / 2.0;
    let cosine = x.cos();
    println!("cos(90) = {cosine}")
}
