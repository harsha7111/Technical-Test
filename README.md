# Technical-Test

Exercise 1:
Create a React App to show the current time in one of Europe’s time zones.  
The application should allow the user to select a time zone from a list and have that selection reflected in the UI.   
You can use the following API to get a list of timezone countries: http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=Europ e/*  
And this one to get the time from a particular zone: http://api.timezonedb.com/v2/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=​zone​&zon e=Europe/London 
The selected timezone time should update every five seconds.  
Please take advantage of React 16+ features​, if there are any doubts around certain areas or implementations, please feel free to comment the code. 

Exercise 2:
/** * Write your own version the function ​'once'​ from lodash in your own way * to produce the same results as illustrated below. * ​https://lodash.com/docs/4.17.4#once **/   function add(a, b) {    return a + b; }   
const onceAdd = once(add); 
console.log(onceAdd(1, 2)); // 3
console.log(onceAdd(2, 2)); // 3 
 
Exercise 3:
This is a simple styling exercise.  
Design specifications for this can be found within the zip file supplied. The task is to create a simple card component with a heading, some copy, buttons and links. 
 
