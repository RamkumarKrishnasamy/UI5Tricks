/*Restricting the keyboard entry from user*/

var oDateRangePicker = this.getView().byId("daterangeSelector");
			oDateRangePicker.addEventDelegate({
				onAfterRendering: function () {
					var oDateInner = this.$().find('.sapMInputBaseInner');
					var oID = oDateInner[0].id;
					$('#' + oID).attr("disabled", "disabled");
				}
			}, oDateRangePicker);
