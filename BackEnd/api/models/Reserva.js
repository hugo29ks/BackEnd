/**
 * Reserva.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cantidadEntradas:{
      type:"string"
    },
    fechaReserva:{
      type:"string"
    },
    idEntrada:{
      type:"string",
      unique:true
    },
    fkIdUser:{
      model:'user',
      required:true
    },
    fkIdEvento:{
      model:'Evento',
      required:true
    }

  }
};

