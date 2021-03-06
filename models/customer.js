module.exports = function (sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      timestamps: null
    }
  );

  Customer.associate = function(models) {
    Customer.hasMany(models.Burger, {
      onDelete: "cascade"
    });
  }

  return Customer;
}