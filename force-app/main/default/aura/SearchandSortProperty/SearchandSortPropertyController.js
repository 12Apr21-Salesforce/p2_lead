({
    doInit : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Property', fieldName:'Name',sortable:true,type:'text', initialWidth: 300},
            {label: 'Apartment', fieldName:'ApartmentName', sortable:true, type:'text', initialWidth: 300},
            {label: 'Street', fieldName:'Street_Address__c',sortable:true,type:'text', initialWidth: 400},
            {label: 'City', fieldName:'City__c', sortable:true, type:'text', initialWidth: 300}
        ]);
		helper.getPropertyList(component)
	},
     handleSort: function(cmp, event, helper) {
        var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        cmp.set("v.sortedBy", fieldName);
        cmp.set("v.sortedDirection", sortDirection);
        helper.sortData(cmp, fieldName, sortDirection);
    },
    searchKeyChange: function(cmp, event) {
       var allRecords = cmp.get("v.PropertyList");
        var searchFilter = event.getSource().get("v.value").toUpperCase();
        var tempArray =[];
        var i;
        for(i=0; i<allRecords.length; i++){
            if((allRecords[i].Name && allRecords[i].Name.toUpperCase().indexOf(searchFilter) != -1) || 
               (allRecords[i].ApartmentName && allRecords[i].ApartmentName.toUpperCase().indexOf(searchFilter) != -1)){
                tempArray.push(allRecords[i]);
            }
        }
        cmp.set("v.PropertyList",tempArray);
    } 
})