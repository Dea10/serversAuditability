const { Schema, model } = require('mongoose');

const ServerSchema = Schema({
    server_id: {
        type: String,
        required: [true, 'server_id is required']
    },
    architecture: {
        type: String,
        required: [true, 'architecture is required']
    },
    running_processes: {
        type: String,
        required: [true, 'running_processess is required']
    },
    pending_updates: {
        type: Number,
        required: [true, 'pending_updates is required']
    },
    free_disk: {
        type: String,
        required: [true, 'free_disk is required']
    },
    free_memory: {
        type: String,
        required: [true, 'free_memory is required']
    },
    ssh_open_sessions: {
        type: String,
        required: [true, 'ssh_open_sessions is required']
    },
    timestamp: {
        type: String,
        required: [true, 'timestamp is required']
    }
});

module.exports = model('Server', ServerSchema);