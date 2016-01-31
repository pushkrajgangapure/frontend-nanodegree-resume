/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Pushkraj Gangapure";
 var role= "Software Architect";
 
 var formattedName=HTMLheaderName.replace("%data",name);
 
 var formatterRole=HtmlheaderRole.replace("%data",role);
 
 $("#header").append(formattedName);
 $("#header").append(formatteRole);
