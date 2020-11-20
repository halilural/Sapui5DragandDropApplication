sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function(Controller, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("com.uralhalil.draganddropappDragandDropApplication.controller.Main", {

		onInit: function() {
			this._oTable = this.getView().byId("idItemTable");
			this._initModel();
		},

		_initModel: function() {

			var oModel = new JSONModel({
				items: [{
					ItemNumber: "10",
					Matnr: "122435453",
					Name: "Bread",
					Quantity: 5,
					Unit: "PIECE",
					Price: 10.00,
					Currency: "TRY"
				}, {
					ItemNumber: "20",
					Matnr: "343543467",
					Name: "CornFlakes",
					Quantity: 2,
					Unit: "PIECE",
					Price: 40.00,
					Currency: "EUR"
				}, {
					ItemNumber: "30",
					Matnr: "3456785345",
					Name: "Milk",
					Quantity: 3,
					Unit: "LITRE",
					Price: 20.00,
					Currency: "GBP"
				}, {
					ItemNumber: "40",
					Matnr: "3456432345",
					Name: "Beer",
					Quantity: 4,
					Unit: "LITRE",
					Price: 30.00,
					Currency: "TRY"
				}]
			});

			this.getView().setModel(oModel, "viewModel");
		},

		_getViewModel: function() {
			return this.getView().getModel("viewModel");
		},

		_getViewModelProperty: function(sField) {
			var sValue = "/" + sField;
			return this._getViewModel().getProperty(sValue);
		},

		_setViewModelProperty: function(sField, oValue) {
			var sValue = "/" + sField;
			return this._getViewModel().setProperty(sValue, oValue);
		},

		onGetInitialData: function() {
			debugger;
			var aNewItems = [{
				ItemNumber: "10",
				Matnr: "122435453",
				Name: "Bread",
				Quantity: 5,
				Unit: "PIECE",
				Price: 10.00,
				Currency: "TRY"
			}, {
				ItemNumber: "20",
				Matnr: "343543467",
				Name: "CornFlakes",
				Quantity: 2,
				Unit: "PIECE",
				Price: 40.00,
				Currency: "EUR"
			}, {
				ItemNumber: "30",
				Matnr: "3456785345",
				Name: "Milk",
				Quantity: 3,
				Unit: "LITRE",
				Price: 20.00,
				Currency: "GBP"
			}, {
				ItemNumber: "40",
				Matnr: "3456432345",
				Name: "Beer",
				Quantity: 4,
				Unit: "LITRE",
				Price: 30.00,
				Currency: "TRY"
			}];
			this._setViewModelProperty("items", aNewItems);
		},

		onDelete: function(oEvent) {
			debugger;
			var oDeletedRecord = this.getView().getModel("viewModel").getProperty(oEvent.getParameters("draggedControl").draggedControl.getBindingContext(
					"viewModel").sPath),
				aNewItems = this._getViewModelProperty("items");
			for (var i = 0; i < aNewItems.length; i++) {
				if (aNewItems[i] === oDeletedRecord) {
					aNewItems.splice(i, 1);
					break;
				}
			}
			this._setViewModelProperty("items", aNewItems);
		}

	});
});