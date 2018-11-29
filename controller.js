/*Restricting the keyboard entry from user*/

var oDateRangePicker = this.getView().byId("daterangeSelector");
			oDateRangePicker.addEventDelegate({
				onAfterRendering: function () {
					var oDateInner = this.$().find('.sapMInputBaseInner');
					var oID = oDateInner[0].id;
					$('#' + oID).attr("disabled", "disabled");
				}
			}, oDateRangePicker);

//If the view is read only, disable the upload
if (!this.getView().getModel("viewModel").getProperty("/editable")) {
	var sComp = this.getView().byId("attachments")
		//Get the association to figure out the dynamic component id.
		.getAssociation("component");
	//Now construct the entire id string.
	var sId = sComp + "---app--EmfUploadCollectionOther";
	sap.ui.getCore().byId(sId).setUploadButtonInvisible(false);
	sap.ui.getCore().byId(sId).setUploadEnabled(false);
}
