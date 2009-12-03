
DeepaMehta 3 Project Plugin
===========================

Adds project management capabilities to DeepaMehta 3.
For the moment just a "To Do" document type is provided.
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


Usage
-----

1.  Visit DeepaMehta 3 in your webbrowser (resp. press reload):
        http://localhost:5984/deepamehta3-db/_design/deepamehta3/index.html

2.  You'll find the additional document type "To Do" in the type menu (next to the "Create" button).


------------
Jörg Richter  
Dec 3, 2009
