import db from '../models/index.js';

const setupDatabase = async () => {
    try {
        await db.sequelize.sync({ force: true });

        await db.HomeLoan.bulkCreate([
            { 
                borrowerName: 'riya', 
                loanAmount: 5000
                
            },
            { 
                borrowerName: 'amy', 
                loanAmount: 3000
                
            }
        ]);

        console.log('Database setup complete.');
    } catch (error) {
        console.error('Database setup error:', error);
    }
};

setupDatabase();
