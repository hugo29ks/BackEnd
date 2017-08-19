var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },



    reserva:{
      collection:'Reserva',
      via:'fkIdUser'
    }


  }
};


module.exports = User;
