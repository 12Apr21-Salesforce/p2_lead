public class Join_Our_Team_CC {
    @AuraEnabled
    public static List<Contact> getCandidateInfo() {
   // Check to make sure all fields are accessible to this user
      String[] fieldsToCheck = new String[] {
           'Id', 'Name', 'Email', 'Phone', 'City__c, State__c'
           };
    Map<String,Schema.SObjectField> fieldDescribeTokens = 
    Schema.SObjectType.Contact.fields.getMap();
    for(String field : fieldsToCheck) {
    //if( ! fieldDescribeTokens.get(field).getDescribe().isAccessible()) {
    if( field != null && fieldDescribeTokens != null && fieldDescribeTokens.get(field) != null && fieldDescribeTokens.get(field).getDescribe() != null && fieldDescribeTokens.get(field).getDescribe().isAccessible() != null && !fieldDescribeTokens.get(field).getDescribe().isAccessible()) {
        throw new System.NoAccessException();
    }
    }
        return [SELECT Id, Name, Email, Phone, City__c, State__c FROM Contact];
    }
    @AuraEnabled
    public static Contact saveCandidate (Contact candidate){
        // Perform isUpdateable() checking first, then
    insert candidate;
    return candidate;
    }
}