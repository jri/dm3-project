
DeepaMehta 3 Project Plugin
===========================

Adds project management capabilities to DeepaMehta 3.
For the moment just a *To Do* topic type is provided.
More to come.


Requirements
------------

* A DeepaMehta 3 installation  
  <http://github.com/jri/deepamehta3>


Installation
------------

1.  Go to your DeepaMehta 3 installation directory:
        cd deepamehta3

2.  Download DeepaMehta 3 Project Plugin:
        couchapp vendor install git://github.com/jri/dm3-project.git

3.  Activate the plugin by inserting one line to DeepaMehta's `_attachments/javascript/plugins.js`:
        add_plugin("vendor/dm3-project/script/dm3_project.js")

4.  Upload changes to CouchDB:
        couchapp push http://localhost:5984/deepamehta3-db

5.  Check if installation was successful: visit DeepaMehta 3 in your webbrowser (resp. press reload):  
    <http://localhost:5984/deepamehta3-db/_design/deepamehta3/index.html>  
    If you see the *To Do* entry in the type menu (next to the *Create* button) everything is OK.


Usage
-----

*   Create *To Do* topics just like any other topic.


Updating
--------

1.  Go to your DeepaMehta 3 installation directory:
        cd deepamehta3

2.  Update DeepaMehta 3 Project Plugin:
        couchapp vendor update dm3-project

3.  Upload changes to CouchDB:
        couchapp push http://localhost:5984/deepamehta3-db


Version History
---------------

**v0.3** -- Mar 6, 2010

* Compatible with DeepaMehta 3 v0.3


------------
Jörg Richter  
Mar 6, 2010
