public with sharing class relatedPropertiesController {
    @AuraEnabled
    public static List<Property__c> getRelatedProperties(String aptId){
        List<Property__c> propertyList = [SELECT Id, Name, Area_in_SqFt__c, Unit_Type__c FROM Property__c WHERE Apartment_Name__c = :aptId];
        return propertyList;
    }
    @AuraEnabled
    public static Integer getRelatedPropertyCount(String aptId) {
        AggregateResult[] count = [SELECT Count(Id) FROM Property__c WHERE Apartment_Name__c = :aptId];
        // system.debug(count[0].get('expr0'));
        Integer intCount = Integer.valueOf(count[0].get('expr0'));
        return intCount;
    }
}
