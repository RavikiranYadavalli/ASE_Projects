----------------------
Command Line Arguments
----------------------

Make sure you have an up-to-date version of Node.js installed on your system. If you don't have Node.js installed, you have to install it.

Open a terminal window (Mac) or a command window (Windows), and install Cordova and Ionic:

npm install -g cordova ionic
On a Mac, you may have to use sudo depending on your system configuration:

sudo npm install -g cordova ionic
If you already have Cordova and Ionic installed on your computer, make sure you update to the latest version:

npm update -g cordova ionic
or

sudo npm update -g cordova ionic

-------------------------
Design Decisions & Issues
-------------------------
The Trade off's in design of web applications has become tougher choice with more 


class hierarchy

		|-------------------------|             |------------|
                |     MashUpApplication    |--has-a----->|   Profile  |
                |-------------------------|             |------------|
                           ^    ^                           ^  ^
                          /      \                          |  |
                       is-a     is-a                        |  |
                        /          \                        |  |
                       /           |--------------|         |  |
                      /            |  Social Profile   |-has-a---|  |
                     /             |--------------|            |
                    /                                        is-a 
                   /                                           |
    |----------------|                                  |------------|
    |    Unique Element |--has-a-------------------------->| Node    |
    |----------------|                                  |------------|
   



Q.  Why have a special App when the same content is provided by Content providers?

A.  With Rapid growth in the content and changes in trends of the consumption of data by end users,It is essential to get important stuff from all the applications to reduce effort on our customers. Hence our app aims to mashup the
	various social profile applications.
	
Q.  What is ionic framework?
A.  This framework makes incredibly easy to develop and integrate mobile applications in a simple way. The major advantage of ionic is making HybridApp.

Q.  Various issues faced while developing our application ?
A: 	The main issue faced is to integrate various API's into a single application. 

