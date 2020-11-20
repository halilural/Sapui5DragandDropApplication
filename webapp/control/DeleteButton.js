sap.ui.define([
	"sap/m/Button"
], function(Button) {
	return Button.extend("com.uralhalil.draganddropappDragandDropApplication.control.DeleteButton", {
		metadata: {
			dnd: {
				droppable: true
			}
		},
		renderer: {}
	});
});