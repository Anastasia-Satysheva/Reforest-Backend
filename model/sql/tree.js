module.exports = function(sequelize, DataTypes) {
    const Tree = sequelize.define("Tree", {
      country: {
        type:DataTypes.STRING,
        allowNull: false
      },
      subnational1: {
        type:DataTypes.STRING,
        allowNull: false
      },
      threshold: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      area_ha: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      extent_2000_ha: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      extent_2010_ha: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      gain_2000_2012_ha: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2001: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2002: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2003: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2004: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2005: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2006: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2007: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2008: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2009: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2010: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2011: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2012: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2013: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2014: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2015: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2016: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2017: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      tc_loss_ha_2018: {
        type:DataTypes.INTEGER,
        allowNull: false
      }

    });
    return Tree;
  };