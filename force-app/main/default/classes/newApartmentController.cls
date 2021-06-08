public with sharing class newApartmentController {
    @AuraEnabled
    public static Apartment__c saveApartment(Apartment__c apt) {
        upsert apt;
        return apt;
    }

    @AuraEnabled
    public static Apartment__c getApartment(Apartment__c apt, String Id) {
        return [SELECT Total_SqFt_of_the_Building__c, Cost_of_Building__c, Total_No_Of_Units__c, Name FROM Apartment__c WHERE Id = :Id];
    }

    // @AuraEnabled
    // public static List<String> unitTypePickLists() {
    //     List<String> myStrList = new List<String>();
    //     Schema.DescribeFieldResult field = Property__c.Unit_Type__c.getDescribe();
    //     for (Schema.PicklistEntry f : field.getPicklistValues()) {
    //         myStrList.add(f.getLabel());
    //     }
    //     return myStrList;
    // }
}