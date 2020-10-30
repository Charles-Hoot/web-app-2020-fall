/**
 *  Model index.js
 *
 */

const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const db = new Sequelize(config);

// Dr. Case - rabbit
require('./rabbit')(db, Sequelize.DataTypes);

// Dr. Hoot - tea
require('./tea')(db, Sequelize.DataTypes);

// Blake - game
require('./game')(db, Sequelize.DataTypes);
// Varsha - animal
require('./animal')(db, Sequelize.DataTypes);
// Felipe - ?

// Jack - chief

// Sreenidhi - plant

// Sri Vasavi - food
require('./food')(db, Sequelize.DataTypes);
// Joseph - software
require('./software')(db, Sequelize.DataTypes);
// Stephen - whiskey
require('./whiskey')(db, Sequelize.DataTypes);
// Shivani - book

// Kunal - videoGame

// Chandler - company

// Praneeth - cricket
require('./cricket')(db, Sequelize.DataTypes);
// Nithya - series
require('./series')(db, Sequelize.DataTypes);

// Zach - fruit

// Prashansa - dance

// Sam - ship

// Lindsey - pokemon

module.exports = db;
