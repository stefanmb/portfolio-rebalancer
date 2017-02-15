import Sequelize from 'sequelize';
import sequelizeConfig from '../sequelize_config';
import { ENV } from '../../../config/appConfig';
import tokenModel from './tokens';
import modelPortfolioModel from './modelPortfolios';
import userModel from './users';

const config = sequelizeConfig[ENV];

const db = {};
const dbUrl = process.env[config.use_env_variable];

const sequelize = dbUrl ? new Sequelize(dbUrl) : new Sequelize(config.database, config.username, config.password, config);

db.Token = sequelize.import('Token', tokenModel);
db.ModelPortfolio = sequelize.import('ModelPortfolio', modelPortfolioModel);
db.User = sequelize.import('User', userModel);

Object.keys(db).forEach(model => model.associate && model.associate(db));

export { db as Models, sequelize };

