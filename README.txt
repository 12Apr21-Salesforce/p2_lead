Title of the Project
Project 1


Explanation and Overview
Tasked with creating a compelling experience from a business previously explored, collaborated in an agile environment to create unique individual features leveraging visualforce based on that business.
These are then surfaced through the use of experience cloud to create a customer or partner experience site that allows for the use of these new features.
The Seven Stones Salesforce org was created for the sales of apartment units or single family houses. For that we created 4 custom objects, outlined below. 


Recommended Usage and Implemented Features
Custom Objects:
Apartment__c
Client__c
Customer__c
Property__c

Custom Object Relationships:
Master-detail relationship between Apartment (parent) and Properties(child).
Lookup relationship between Properties and Customers, and Properties and Clients.

Project 1 can be utilized as a customer and partner facing site to access, display, and modify property listings for a real estate business.
Partner and Customer-facing site on Experience Cloud with the following custom Visualforce page functionalities:
Search Available Properties
Add new Apartments, with Properties option
Add new Clients
Join Us, where anyone can apply with us as a Client
Client to Contact, to select any Client from a list


Utilized Technologies
Apex, Apex Testing, HTML, CSS, JavaScript, Visualforce, Process Builder, Sales Cloud, Service Cloud, Workflow Rules, Validation Rules, UI Customization, Flow Builder, Security and Access, Data Modeling, Scrumban, Apex Triggers, Experience Cloud


Getting Started / Set-Up
As this project utilizes Apex, it will need to be compiled and executed on the Salesforce server platform. This can be done by using the developer console when logged into an org on salesforce.com, or by installing Salesforce Extensions for Visual Studio Code.
Once the extensions are installed, clone this repository and open the folder in your VS Code. In order to utilize functionality, first ensure that the extensions have loaded and use View > Command Palette or Ctrl+Shift+P.
Type "authorize" to select "SFDX: Authorize an Org", and connect the project to your desired org.
Before deploying the manifest to the org, follow the following steps to ensure your org will deploy with no errors:

Ensure your org has Enabled ExperienceBundle Metadata API. 
To find this option in your org, use Quick Find in the Setup menu to 
search Digital Experiences > Settings, and ensure the checkbox is selected.
If no Experience Bundle is active, enable it and select a domain name.
Then you will be able to select settings.

From your target org, copy your admin user username (in email format) and paste replace the instances of an email format in the following files with that username:

in Workflow folder:
Apartment__c.workflow-meta.xml
Customer__c.workflow-meta.xml
Property__c.workflow-meta.xml

in Site folder:
Seven_Stones.site-meta.xml

After saving, you should be able to right-click the manifest and deploy to the target org.


Contributors
Alden Towler
Natalie Clark
Ryan Kramer
Veeravenkata Garapati


License Information
This project uses the following licenses: 
Salesforce Platform license. Source API Version: 51.0