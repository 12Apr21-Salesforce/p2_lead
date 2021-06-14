public class Join_Our_Team_CC {
    @AuraEnabled
    public static List<Contact> getProspectsInfo(String contactId) {
   // Check to make sure all fields are accessible to this user
   /*    String[] fieldsToCheck = new String[] {
           'Id', 'Name', 'Amount__c', 'Client__c', 'Date__c',
           'Reimbursed__c', 'CreatedDate'
           };
    Map<String,Schema.SObjectField> fieldDescribeTokens = Schema.SObjectType.Expense__c.fields.getMap();
    for(String field : fieldsToCheck) {
    if( ! fieldDescribeTokens.get(field).getDescribe().isAccessible()) {
        throw new System.NoAccessException();
    }
    } */
        return [SELECT Id, FirstName, LastName, Email, Phone FROM Contact WHERE Name = :contactId];
    }
    @AuraEnabled
    public static Contact saveCandidate (Contact candidate){
        // Perform isUpdateable() checking first, then
    insert candidate;
    return candidate;
    }
}