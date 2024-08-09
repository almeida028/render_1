const HomeLoanModel = (sequelize, DataTypes) => {
    const HomeLoan = sequelize.define('HomeLoan', {
        borrowerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        loanAmount: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        
    });

    return HomeLoan;
};

export default HomeLoanModel;