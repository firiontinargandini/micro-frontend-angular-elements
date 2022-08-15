# Micro-Frontend using Angular Elements
This is an example of Micro-Frontend architecture using Angular Elements.

This repository consists of the following projects:
* Container: Application where all the Micro-Frontends are loaded
* Content A: Micro-Frontend application that loaded on demand
* Content B: Another Micro-Frontend appliaction that loaded on demand

Details about the implementation can be found in each repository's README.

To run the project, serve the Container application using ```ng serve``` and Content application on the other port ex: ```ng serve --port 4201```. 

> Note: In this project, the main.js of Micro-Frontend application is coppied to Container's assets, you can change the ```src``` on ```config``` const on the ```content.service.ts``` file to the host URL.
