@isTest
private class relatedPropertiesControllerTest {
    @isTest static void getRelatedPropertyTest() {
        List<Property__c> propertyList = new List<Property__c>();
        Apartment__c apt = new Apartment__c();
        apt.Name = 'A';
        apt.Total_No_Of_Units__c = 10;
        apt.Total_SqFt_of_the_Building__c = 20;
        apt.Cost_of_Building__c = 1;
        insert apt;
        for (Integer i = 0; i < 200; i++) {
            Property__c newProp = new Property__c();
            newProp.Name = 'A' + i;
            newProp.Property_ID__c = 'AA101';
            newProp.Area_in_SqFt__c = 1000 + i;
            newProp.Unit_Type__c = 'Standard Apartment';
            newProp.Apartment_Name__c = apt.Id;
            propertyList.add(newProp);
        }
        insert propertyList;

        Test.startTest();
        List<Property__c> assertList = relatedPropertiesController.getRelatedProperties(apt.Id);
        Test.stopTest();
        System.assertEquals(assertList.size(), 200);
    }
    @isTest static void getRelatedPropertyCount() {
        List<Property__c> propertyList = new List<Property__c>();
        Apartment__c apt = new Apartment__c();
        apt.Name = 'A';
        apt.Total_No_Of_Units__c = 10;
        apt.Total_SqFt_of_the_Building__c = 20;
        apt.Cost_of_Building__c = 1;
        insert apt;
        for (Integer i = 0; i < 200; i++) {
            Property__c newProp = new Property__c();
            newProp.Name = 'A' + i;
            newProp.Property_ID__c = 'AA101';
            newProp.Area_in_SqFt__c = 1000 + i;
            newProp.Unit_Type__c = 'Standard Apartment';
            newProp.Apartment_Name__c = apt.Id;
            propertyList.add(newProp);
        }
        insert propertyList;

        Test.startTest();
        Integer assertCount = relatedPropertiesController.getRelatedPropertyCount(apt.Id);
        Test.stopTest();
        System.assertEquals(assertCount, 200);
    }
}
