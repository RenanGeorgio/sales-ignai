export default class WebWorker {
    constructor(worker: Worker) {
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        const code = worker.toString();
        const blob = new Blob(['('+code+')()']);
        
        return new Worker(URL.createObjectURL(blob));
    }
}