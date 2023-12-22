const fs = require('node:fs');
const { sendToQueue }  = require('./send')

const data = {
    server_id: '',
    running_processes: '',
    architecture: '',
    pending_updates: '',
    free_disk: '',
    ssh_open_sessions: '',
    free_memory: ''
}

const filePaths = Object.keys(data);

const sendData = async (data) => {
    const _data = {
        ...data,
        timestamp: new Date()
    }

    sendToQueue(_data);
}

const readFile = (filePath) => {
    return fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' }).replace('\n', '').trim();
}

filePaths.forEach(filePath => {
    data[filePath] = readFile(`/home/app/${filePath}.txt`);
})

sendData(data);
