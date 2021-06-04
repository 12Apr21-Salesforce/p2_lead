@isTest
private class AgentsController_Test {

    @isTest
    private static void testSelectAgentsNavigation() {
              
	// Set the current page
        Pagereference ListOfAgentsPage = Page.ListOfAgentsPage;
        Test.setCurrentPage(ListOfAgentsPage);

        List<Contact> agents = AgentTestDataFactory.createAgents(20);
        
        // Do the test
        Test.startTest();
        
        // Instantiate the controller
        AgentsController ac = new AgentsController();
        
        // Get the list of ContactWrapper elements
        List<AgentsController.ContactWrapper> contactWrappers = ac.agentList;
        System.debug(contactWrappers);
        
        // Modify the list by selecting all the elements with a check in the boxes
        for (AgentsController.ContactWrapper wrapper : contactWrappers) {
            wrapper.checked = true;
        }
        
        // Set modified list back to controller
        ac.agentList = contactWrappers;
        
        // Navigate to SelectedAgentsPage by callng the listAgents method - capture the resulting url
        String url = ac.listAgents().getURL();

        ac.newSearch();
        
        Test.stopTest();
        
        // Verify the results
        
        // Check that all the elements have the boolean "checked" set to true
        List<AgentsController.ContactWrapper> contactWrappersModified = ac.agentList;
        Integer count = 0;
        for(AgentsController.ContactWrapper wrapper : contactWrappersModified) {
            if (!wrapper.checked) count++;
        }
        System.assertEquals(0, count, 'ERROR: Found at least one ContactWrapper element not checked');
        
        // Check the correct navigation to SelectedAgentsPage
        System.assertEquals(Page.SelectedAgentsPage.getURL(), url, 'ERROR: Expected to navigate to /apex/selectedagentspage');

    }

    @isTest
    private static void testSelectAgentsNavigationFail() {
              
	// Set the current page
        Pagereference ListOfAgentsPage = Page.ListOfAgentsPage;
        Test.setCurrentPage(ListOfAgentsPage);

        List<Contact> agents = AgentTestDataFactory.createAgents(0);
        
        // Do the test
        Test.startTest();
        
        // Instantiate the controller
        AgentsController ac = new AgentsController();
        
        // Get the list of ContactWrapper elements
        List<AgentsController.ContactWrapper> contactWrappers = ac.agentList;
        System.debug(contactWrappers);
        
        // Modify the list by selecting all the elements with a check in the boxes
        for (AgentsController.ContactWrapper wrapper : contactWrappers) {
            wrapper.checked = true;
        }
        
        // Set modified list back to controller
        ac.agentList = contactWrappers;
        
        // Navigate to SelectedAgentsPage by callng the listAgents method - capture the resulting url
        String url = ac.listAgents().getURL();

        ac.newSearch();
        
        Test.stopTest();
        
        // Verify the results
        // Check that all the elements have the boolean "checked" set to true
        List<AgentsController.ContactWrapper> contactWrappersModified = ac.agentList;
        Integer count = 0;
        for(AgentsController.ContactWrapper wrapper : contactWrappersModified) {
            if (!wrapper.checked) count++;
        }
        System.assertEquals(0, count, 'ERROR: Found at least one ContactWrapper element not checked');
        
        // Check the page does not navigate away, or navigates back to start page.
        System.assertEquals(Page.ListOfAgentsPage.getURL(), url, 'ERROR: You must select at least one Agent.');
    }




}