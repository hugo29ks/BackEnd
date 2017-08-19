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

  enviarEvento: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      Usuario.update({
        id: parametros.id
      }, {
        nombres: parametros.nombres,
        apellidos: parametros.apellidos,
        correo: parametros.correo
      })
        .exec(function (err, usuarioEditado) {
          if (err)
            return res.serverError(err);
          if (usuarioEditado) {
            //Si encontro
            return res.redirect("/");
          }
          else {
            //No encontro
            return res.notFound();
          }
        });
    }
    else {
      return res.badRequest();
    }
  },






};

