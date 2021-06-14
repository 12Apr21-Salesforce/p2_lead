public with sharing class AgentListController {

    @AuraEnabled
    public static List<Contact> getContacts(){

// Check to make sure all fields are accessible to this user
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
        return [SELECT Id, Name, Email, Phone, City__c, State__c FROM Contact];
    }
}