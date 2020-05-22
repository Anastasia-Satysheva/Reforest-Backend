LOAD DATA LOCAL INFILE "./public/USA.csv" INTO TABLE reforestration.trees
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(country, subnational1, threshold, area_ha, extent_2000_ha, extent_2010_ha, gain_2000_2012_ha, tc_loss_ha_2001, tc_loss_ha_2002, tc_loss_ha_2003, tc_loss_ha_2004, tc_loss_ha_2005, tc_loss_ha_2006, tc_loss_ha_2007, tc_loss_ha_2008, tc_loss_ha_2009, tc_loss_ha_2010, tc_loss_ha_2011, tc_loss_ha_2012, tc_loss_ha_2013, tc_loss_ha_2014, tc_loss_ha_2015, tc_loss_ha_2016, tc_loss_ha_2017, tc_loss_ha_2018)
set date_made = STR_TO_DATE(@datevar,'%m/%d/%Y');