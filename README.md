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


##  Getting Started / Installations
[Git](https://git-scm.com/downloads)  
[Salesforce Extension Pack for VS Code](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode)

1. Open GitBash(terminal) or Visual Studio Code terminal.
2. Navigate to directory where you want project cloned.
3. Clone the project by running `git clone https://github.com/12Apr21-Salesforce/p1_lead.git`
4. Navigate into project directory by running `cd p1_Lead`
5. If you are using GitBash or terminal, open project in VS code by running `code .`
6. From VS Code, open command pallete with `Command`/`Ctrl` + `Shift` + `P`, and choose `SFDX: Authorize an org`.
7. Browser window will open, and you will be prompted to login to the org you wish to connect.
7. From your org on your browser, navigate to `Setup` > `Lightning Experience Transition Assistant` > `Feature Settings` > `Digital Experiences` > `Settings`  
8. Check `Enable Digital Experiences` and give it a random domain name, click `Save`.  
![instruction1](https://imgur.com/50ixCpu.png)
9. Navigate back to `Setup` > `Lightning Experience Transition Assistant` > `Feature Settings` > `Digital Experiences` > `Settings`.
10. Check `Enable Experience Workspaces`.  
11. Go back to Visual Studio, search entire project with `Ctrl`/`Command` + `Shift` + `F`.  
![instruction1](https://imgur.com/TEsFHES.png)
12. Copy `wyang19a@brave-narwhal-cs90qn.com` and paste it in.
11. Go back to browser, navigate to `Setup` > `Users` > `Users`.
12. Copy your own system admin username.   
![instruction1](https://imgur.com/ILgD8yh.png)
13. Go back to Visual Studio Code, click the arrow on the left side of search textbox.  
![instruction1](https://imgur.com/pYcbvcF.png)

14. Replace all instances by clicking the `Replace all` button on the right side.
15. Once authorization is successful, deploy by running `sfdx force:source:deploy -x manifest/package.xml` or by right clicking on manifest/package.xml and choosing `Deploy Source in Manifest to Org`
16. Navigate to `Setup` > `Lightning Experience Transition Assistant` > `Feature Settings` > `Digital Experiences` > `All Sites`.  
![instruction1](https://imgur.com/sQtx9ia.png)
17. Click Builder, and publish the experience cloud site.