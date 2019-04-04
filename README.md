#Basic Info 
Live site is here: http://anltcarmon01.an.intel.com/hwinfotool/
 
Application is built using npm/webpack and Bootstrap Vue. 
The data table itself makes use of the embedded table component.  
Parsing of csv data is handled by Papa Parse. 

To develop: 
    1.	Pull project down from gitlab
    2.	In a terminal window, navigate to project folder and run: npm install. This should take a few minutes. 
    3.	To start development server, run: npm run start. Server has hot reload; so any changes made and saved will cause the page to automatically refresh. 

To compile: 
    1.	Run npm run build.

Pushing Live: 
    1.	Site root is on anltcarmon: /var/www/html/hwinfotool 
    2.	The only files/folders that need to be put here are: 
        a.	Dist
        b.	Index.html
        c.	Static 


##Ideas for improvement
    1. Re-introduce sorting capability. Currently unable to sort data. If you try to add "sortable" all data vanishes.  
    2. Hide Intel logo on smaller screen sizes.  
