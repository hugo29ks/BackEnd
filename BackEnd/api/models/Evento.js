/**
 * Evento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreEvento:{
      type:"string"
    },
    fechaEvento:{
      type:"date"
    },
    horaInicio:{
      type:"string"
    },
    horaFin:{
      type:"string"
    },
    detalleEvento:{
      type:"string"
    },
    precio:{
      type:"float"
    },
    nombreLugar:{
      type:"string"
    },
    direccion:{
      type:"string"
    },
    latitud:{
      type:"float"
    },
    longitud:{
      type:"float"
    },
    imagenEvento:{
      type:"string"
    },
    fkIdCategoria:{
      model:'Categoria',
      required:true
    },
    fkIdOrganizador:{
      model:'Organizador',
      required:true
    },
    fkIdTipoEvento:{
      model:'TipoEvento',
      required:true
    },
    reserva:{
      collection:'Reserva',
      via:'fkIdEvento'
    }

  }
};

