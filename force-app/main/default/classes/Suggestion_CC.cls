public class Suggestion_CC {
    @AuraEnabled
    public static List<Case> getSuggestions() {
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
        return [SELECT ContactId, Reason, Subject, Priority, Description FROM Case];
    }
    @AuraEnabled
    public static Case saveSuggestions (Case newCase){
        // Perform isUpdateable() checking first, then
    insert newCase;
    return newCase;
    }
}

