trigger PropertyStageSold on Customers__c (after update) {

    if(Trigger.isUpdate){
        if(Trigger.isAfter){
            List<Customers__c> custClosed = Trigger.new;
            Triggers_Demo.updatePropCustClosed(Trigger.new);
        }
        
    }

}