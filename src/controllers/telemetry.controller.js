const { addServerService } = require("../services/Server.services");
const Server = require('../models/server.model');

const addServer = async (req, res) => {
    const body = req.body;
    
    addServerService(body);

    res.json({
        success: true,
        msg: 'addServer - controller',
        server: body
    })
}

const getAllServers = async (req, res) => {
    const { start, end } = req.query;

    const dateQuery = {};
    if (start) dateQuery.$gte = start;
    if (end) dateQuery.$lte = end;
  
    const fullQuery = dateQuery && Object.keys(dateQuery).length > 0 ? { timestamp: dateQuery } : {};

    const data = await Server.find(fullQuery);

    res.json({
        success: true,
        msg: 'getAllServers - controller',
        count: data.length,
        data
    })
}

const getServerById = async (req, res) => {
    const { serverId } = req.params;
    
    const data = await Server.find({
        server_id: serverId
    }).exec();

    res.json({
        success: true,
        msg: 'getServerById - controller',
        serverId,
        count: data.length,
        data
    })
}

const getServersByArch = async (req, res) => {
    const { arch } = req.params;

    const data = await Server.find({
        architecture: arch
    })

    res.json({
        success: true,
        msg: 'getServersByArch - controller',
        count: data.length,
        data
    })
}

const getPendingUpdatesServers = async (req, res) => {
    const data = await Server.find({
        pending_updates: {
            $gt: 0
        }
    }).exec();

    res.json({
        success: true,
        msg: 'getPendingUpdatesServers - controller',
        count: data.length,
        data
    })
}

module.exports = {
    addServer,
    getAllServers,
    getServerById,
    getServersByArch,
    getPendingUpdatesServers
}