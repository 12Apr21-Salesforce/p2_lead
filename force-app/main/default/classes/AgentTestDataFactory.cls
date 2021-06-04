@isTest
public class AgentTestDataFactory {

    public static List<Contact> createAgents(Integer numAgents) {
        List<Contact> cons = new List<Contact>();
        
        for(Integer i=0;i<numAgents;i++) {
            Contact c = new Contact(LastName='Agent ' + i);
            cons.add(c);
        }
        insert cons;
        return cons;
    }
}