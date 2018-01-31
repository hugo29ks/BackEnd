/**
 * EventoController
 *
 * @description :: Server-side logic for managing Eventoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  crearEvento: function (req,res){
    var parametros = req.allParams();
    sails.log.info("Parametros",parametros);

    var nuevoEvento = {
      nombreEvento:parametros.nombreEvento,
      fechaEvento:parametros.fechaEvento,
      horaInicio:parametros.horaInicio,
      horaFin:parametros.horaFin,
      detalleEvento:parametros.detalleEvento,
      precio:parametros.precio,
      nombreLugar:parametros.nombreLugar,
      direccion:parametros.direccion,
      latitud:parametros.latitud,
      longitud:parametros.longitud,
      imagenEvento:parametros.imagenEvento,
      fkIdCategoria:parametros.fkIdCategoria,
      fkIdOrganizador:parametros.fkIdOrganizador,
      fkIdTipoEvento:parametros.fkIdTipoEvento

    };

    Evento.create(nuevoEvento).exec(function(error, eventoCreado){
      if(error){
        return res.serverError(error);
      }
      else{
        return res.redirect("/");
      }
    });

  },

  detalleEvento: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      Evento.findOne({
        id: parametros.id
      })
        .exec(function (err, eventoEncontrado) {
          if (err)
            return res.serverError(err);
          if (eventoEncontrado) {
            //Si encontro
            return res.view('detalleEvento', {
              evento: eventoEncontrado
            });
          }
          else {
            //No encontro
            return res.redirect('/inicio');
          }
        });
    }
    else {
      return res.redirect('/inicio');
    }
  }





};

