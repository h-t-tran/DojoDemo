REM copy the orginal "source code" version of dojo.js since the dojo build system works only with the source code version.
copy .\js\dojo\dojo\dojo_org.js  .\js\dojo\dojo\dojo.js

REM delete any previous version of dojo_en-us.js that we copied over from previous run.
del .\js\dojo\dojo\nls\dojo_en-us.js


REM run the dojo build to create the optimized version
call .\js\dojo\util\buildscripts\build.bat  --profile demo.profile.js

REM copy the 2 needed optimized files our app 
echo Copying dojo.js and dojo_en-us.js...
copy /Y .\app_rel\app\dojo\dojo.js  .\js\dojo\dojo\dojo.js
copy /Y .\app_rel\app\dojo\nls\dojo_en-us.js  .\js\dojo\dojo\nls\dojo_en-us.js
echo Complete!