const { Router } = require('express');
const { 
    getAllServers, 
    addServer, 
    getServersByArch, 
    getPendingUpdatesServers,
    getServerById
} = require('../controllers/telemetry.controller');

const router = Router();

router.post('/addServer', addServer);
router.get('/full', getAllServers);
router.get('/full/:serverId', getServerById);
router.get('/:arch', getServersByArch);
router.get('/audit/pending-updates', getPendingUpdatesServers);

module.exports = router;