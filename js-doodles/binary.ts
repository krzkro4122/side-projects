export default function bs(haystack: number[], needle: number): boolean {

    let lo = 0;
    let hi = haystack.length;

    do {
        const m = Math.floor(lo + (lo + hi) / 2);
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }

    } while (lo < hi)

    return false;
}

function test_bs () {
    console.log(`True?: ${bs([1, 2, 3, 4, 5], 3)}`)
    console.log(`False?: ${bs([1, 2, 3, 4, 5], 310)}`)
    console.log(`False?: ${bs([1, 2, 3, 4, 5], 0)}`)
}

test_bs()