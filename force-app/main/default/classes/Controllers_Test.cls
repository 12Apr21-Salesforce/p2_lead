@isTest
private class Controllers_Test {

    @testSetup
    static void makeData(){

        // List<Apartment__c> aptList = new List<Apartment__c>();
        List<Property__c> propList = new List<Property__c>();
        Integer a = 1;
        Integer p = 5;

        Apartment__c apt = new Apartment__c(Name='Apartment1',Total_SqFt_of_the_Building__c=10000, Total_No_Of_Units__c=p,Cost_of_Building__c=12345);

        insert apt;
        
        for (Integer i=0 ; i<p ; i++){
            Property__c prop = new Property__c(Apartment_Name__c=apt.Id, Property_ID__c='AA00'+i, 
            Name='Property'+i,Unit_Type__c='Loft',Status__c='Available',Area_in_SqFt__c=12345);

            propList.add(prop);
        }
        insert propList;

    }
    
    @IsTest
    static void searchAvailablePropertiesTest(){
        
        Test.startTest();

        List<Property__c> propList = [SELECT ID FROM Property__c];
        List<Id> idList = new List<Id>();
        for (Property__c p : propList){
            idList.add(p.Id);
        }

        SearchProperties_CC sp = new SearchProperties_CC();
        sp.searchText = 'Pro';
        Test.setFixedSearchResults(idList);
        sp.Search();
        
        ApexPages.StandardSetController ssc = sp.setCon;
        List<Property__c> prop = sp.properties;
        // for (Property__c p : prop){
        //     sp.searched = true;
        // }
        Boolean rf = sp.recordsFound;


        Test.stopTest();



        System.assertEquals(5,prop.size());
        System.assertEquals(true,rf);

        // List<Property__c> spsFinal = sp.properties;
        // Integer count=0;
        // if (!SearchProperties_CC.searched) {
        //     count++;
        // }
        

        // System.assertEquals(0, count, 'ERROR: at least one property not searched');
        
    }
}


        // PageReference searchPage = Page.searchAvailableProperties;
        // Test.setCurrentPage(searchPage);


//searchText 
//then test Search()
//Test.setFixedSearchResults for SOSL searches

//then setCon, properties, recordsFound