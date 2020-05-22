const db = require("../model/sql");
const path = require("path")
const router = require("express").Router();

async function getDataAPI(req, res) {
    const stateData = await db.Tree.findAll({
        attributes: ['tc_loss_ha_2013', 'tc_loss_ha_2014', 'tc_loss_ha_2015', 'tc_loss_ha_2016', 'tc_loss_ha_2017', 'tc_loss_ha_2018'],
        where: { subnational1: req.params.state }
    });
    // console.log(stateData[0].dataValues);
    return await res.json(stateData[0].dataValues);
}

router.get("/home", (req, res) => res.sendFile(path.join(__dirname, "/../public/index.html")))
router.get("/:state", getDataAPI)

module.exports = router;