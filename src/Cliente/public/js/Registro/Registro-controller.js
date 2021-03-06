'use strict';

angular.module('myapp')
  .controller('RegistroController', ['$scope', '$uibModal', 'resolvedRegistro', 'Registro',
    function ($scope, $modal, resolvedRegistro, Registro) {

      $scope.Registros = resolvedRegistro;

      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.Registro = Registro.get({
		id: id
	});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        Registro.delete({
		id: id
	  },
          function () {
            $scope.Registros = Registro.query();
          });
      };

      $scope.save = function (id) {
	        var RegistroSave = {
		   "IdVehiculo": {
		      "Id": $scope.Registro.IdVehiculo.Id,
		      "Placa": "",
		      "IdNfc": null,
		      "IdPropietario": {
		         "Id": null,
		         "Documento": "",
		         "PrimerNombre": "",
		         "OtrosNombres": "",
		         "PrimerApellido": "",
		         "SegundoApellido": "",
		         "IdTipoPropietario": {
		             "Id": null,
		              "Tipo": "",
		              "Descripcion": "",
		               }
		          }
		     },
		     "IdIsla": {
			"Id":$scope.Registro.IdIsla.Id,
			"Geometria": "",
			"Ocupado": false,
			"IdGrupoIsla": {
		           "Id": null,
		           "Geometria": "",
		           "IdGrupoPadre": null
		        }
		     }
		  };

        if (id) {
          Registro.update({id: id}, RegistroSave,
            function () {
              $scope.Registros = Registro.query();
              $scope.clear();
            });
        } else {
          Registro.save(RegistroSave,
            function () {
              $scope.Registros = Registro.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.Registro = {

          "HoraEntrada": "",

          "HoraSalida": "",

          "IdIsla": "",

          "IdVehiculo": "",

          "id": ""
        };
      };

      $scope.open = function (id) {
        var RegistroSave = $modal.open({
          templateUrl: 'Registro-save.html',
          controller: 'RegistroSaveController',
          resolve: {
            Registro: function () {
              return $scope.Registro;
            }
          }
        });

        RegistroSave.result.then(function (entity) {
          $scope.Registro = entity;
          $scope.save(id);
        });
      };
    }])
  .controller('RegistroSaveController', ['$scope', '$http', '$uibModalInstance', 'Registro', 'CONFIG',
    function ($scope, $http, $modalInstance, Registro, CONFIG) {
      $scope.Registro = Registro;
     
      var f = [{}];
      $http.get(CONFIG.WS_URL + '/vehiculo')
        .success(function(data) {
          data.forEach(function(entry, index) {
            f[index] ={
              Id: entry.Id,
              IdNfc: entry.IdNfc
      };
          });
          console.log(f);
          $scope.RegistroVehIds = f;
        })
        .error(function(err) {});
      
      var f1 = [];
      $http.get(CONFIG.WS_URL + '/isla')
        .success(function(data) {
          data.forEach(function(entry, index) {
            f1[index] = entry.Id;
          });
          console.log(f1);
          $scope.RegistroIslIds = f1;
        })
        .error(function(err) {});


      $scope.HoraEntradaDateOptions = {
        dateFormat: 'yy-mm-dd',


      };
      $scope.HoraSalidaDateOptions = {
        dateFormat: 'yy-mm-dd',


      };

      $scope.ok = function () {
        $modalInstance.close($scope.Registro);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]);
