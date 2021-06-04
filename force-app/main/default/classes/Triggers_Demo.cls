public class Triggers_Demo {
    public static void ApartmentDeletion(){
    	for(Apartment__c Apt : [SELECT Name FROM Apartment__c 
                             WHERE Id IN (SELECT Apartment_Name__c FROM Property__C)
                             AND Id IN :Trigger.old]) {
        	 Trigger.oldMap.get(Apt.Id).addError(
            'Cannot delete Apartment '+Apt.Name+' with existing related properties.');
		}
    }
    public static List<String> sendEmail(String address, String subject, String body) {
        // Create an email message object
        List<String> lists = new List<String>{address, subject, body};
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        String[] toAddresses = new String[] {address};
        mail.setToAddresses(toAddresses);
        mail.setSubject(subject);
        mail.setPlainTextBody(body);

        Messaging.SendEmailResult[] results = Messaging.sendEmail(
                                 new Messaging.SingleEmailMessage[] { mail });
        return lists;
    } 
    
    public static void updatePropCustClosed(List<Customers__c> cust){
        cust = Trigger.new;
		//Queyring the property values which are linked to customers whose stage is Closed
        List<Property__c> prop = [SELECT id FROM Property__c WHERE 
                        id in (SELECT Property_interested_in__c FROM Customers__c where Id IN :Trigger.New)];
         System.debug('property size ' +prop.size());		
        //checking for the closed customers with the linked properties and updating the property's status to Sold
        for(Customers__c custClosed : cust){
            if(custClosed.Stage__c=='Closed'){
				System.debug('entering');
                for(Property__c propSold : prop){
                    if(propSold.id == custClosed.Property_Interested_In__c){
                        propSold.Status__c = 'Sold';
                    }
                }
            }
        }
        update prop;
    }
}