/**
 * Created by Javier on 13/08/2017.
 */
module.exports = {
  registrarUsuarios: function(req,res){
    return res.view('RegistroUsuarios')
  },


  registrarEvento: function(req,res){
    return res.view('RegistroEventos')
  },



  inicioEventos: function(req,res){

    var parametros = req.allParams();

    /*Evento.find().exec(
      function(err, eventosEncontrados){
        if (err){
          return res.serverError(err);
        }else{
          return res.view('inicioEventos',{eventos:eventosEncontrados})
        }

      }*/

    if (!parametros.busqueda) {
      parametros.busqueda = '';
    }

    Evento
      .find()
      .where({
        or: [
          {
            nombreEvento: {
              contains: parametros.busqueda
            }
          },

        ]
      })
      .exec(function (err, eventos) {
        if (err)
          return res.negotiate(err);
        var cookies = req.cookies;
        console.log(cookies.arregloEventos);
        if (cookies.arregloEventos) {
          var arregloEventos = cookies.arregloEventos.ids;
          console.log(arregloEventos);
          return res.view('inicioEventos', {
            eventos: eventos,
            arregloEventos: arregloEventos
          });
        }
        else {
          return res.view('inicioEventos', {
            eventos: eventos
          });
        }
      });
  },
}
