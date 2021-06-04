trigger ApartmentDeletion on Apartment__c (before delete) {
    if(Trigger.isDelete){
        if(Trigger.isBefore){
            Triggers_Demo.ApartmentDeletion();
        } 
    }
}