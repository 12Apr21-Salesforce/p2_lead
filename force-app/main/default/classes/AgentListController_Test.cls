@isTest
public with sharing class AgentListController_Test {
    
@TestSetup
static void makeData(){
    AgentTestDataFactory.createAgents(20);  
}

    @isTest
    public static void testSOQL() 
	{ 

		Contact cons = new Contact();
		// Add all required field
		cons.LastName='demo test';
		cons.Email = 'demotest@gmail.com';
		insert cons;

        Test.startTest();
		AgentListController  testCont = new AgentListController ();
        List<Contact> lstContact = AgentListController.getContacts();
		Test.stopTest();

		System.assert( lstContact != null);	
	}
@isTest
    public static void testAccess(){
        User u = [SELECT Id FROM User WHERE Name='Hamilton'];

        String errorType;
        
        System.runAs(u) {
            try {
                String[] fieldsToCheck = new String[] {
                    'Id', 'Name', 'Email', 'Phone', 'City__c', 'State__c'
                };
                Map<String,Schema.SObjectField> fieldDescribeTokens =
                    Schema.SObjectType.Contact.fields.getMap();
                for(String field : fieldsToCheck) {
                    if( ! fieldDescribeTokens.get(field).getDescribe().isAccessible()) {
                        throw new System.NoAccessException();
                    }
                }
            } catch(Exception e) {
                errorType = e.getTypeName();
            }
        }
        System.assertEquals('System.NoAccessException', errorType);
    }
}
