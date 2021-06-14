# Seven Stones Property - Alchemy

placeholder

##  Getting Started / Installations
[Git](https://git-scm.com/downloads)  
[Salesforce Extension Pack for VS Code](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode)

1. Open GitBash(terminal) or Visual Studio Code terminal.
2. Navigate to directory where you want project cloned.
3. Clone the project by running `git clone https://github.com/12Apr21-Salesforce/p2_lead.git`
4. Navigate into project directory by running `cd p2_Lead`
5. If you are using GitBash or terminal, open project in VS code by running `code .`
6. From VS Code, open command pallete with `Command`/`Ctrl` + `Shift` + `P`, and choose `SFDX: Authorize an org`.
7. Browser window will open, and you will be prompted to login to the org you wish to connect.
##### if you are deplying to a brand new playground org, GO ON TO STEP 8.  
##### If you are deploying to an existing org with `Digital Experience` and `ExperienceBundle Metadata API` already enabled, SKIP TO STEP 12.
8. From your org on your browser, navigate to `Setup` > `Lightning Experience Transition Assistant` > `Feature Settings` > `Digital Experiences` > `Settings`  
8. Check `Enable Digital Experiences` and give it a random domain name, click `Save`.  
![instruction1](https://imgur.com/50ixCpu.png)
9. Navigate back to `Setup` > `Lightning Experience Transition Assistant` > `Feature Settings` > `Digital Experiences` > `Settings`.  
![instruction1](https://imgur.com/BkYSdPC.png)
10. Check `Enable ExperienceBundle Metadata API`.  
11. Go back to Visual Studio, search entire project with `Ctrl`/`Command` + `Shift` + `F`.  
![instruction1](https://imgur.com/OZUMX07.png)
12. Copy `wyang19a@empathetic-unicorn-o2aquf.com` and paste it in.
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



## Contributors
**[Miguel McCrary](https://github.com/Migizal)**  
**[Frank Zhang](https://github.com/frank1433)**  
**[Diego Maquill](https://github.com/diego-maquill)**  
**[Wootae Yang](https://github.com/wyang19a)**

## License
MIT