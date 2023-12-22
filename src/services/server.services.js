const Server = require('../models/server.model');

const addServerService = async (serverInfo) => {
    let { pending_updates } = serverInfo;
    pending_updates = pending_updates ? Math.max(Number(pending_updates) - 1, 0) : 0;

    const server = new Server({...serverInfo, pending_updates});
    await server.save();
}

module.exports = {
    addServerService
}