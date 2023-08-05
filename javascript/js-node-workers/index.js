import { Worker } from "worker_threads";

function chunkify(array, n) {
    let chunks = [];
    for (let index = n; index > 0; index--) {
        const element = array[index];
        chunks.push(array.splice(0, Math.ceil(array.length / index)))
    }
    return chunks
}

function run(jobs, concurrentWorkers) {
    const chunks = chunkify(jobs, concurrentWorkers)
    const tick = performance.now()
    let completedWorkers = 0;

    chunks.forEach((data, i) => {
        const worker = new Worker("./worker.js")
        worker.postMessage(data);
        worker.on('message', () => {
            console.log(`Worker ${i} completed`);
            completedWorkers++;
            if (completedWorkers === concurrentWorkers) {
                console.log(`${concurrentWorkers} workers took: ${performance.now() - tick}ms`);
                process.exit();
            }
        })
    })
}

const jobs = Array.from({ length: 100 }, () => 1e9);
run(jobs, 8)