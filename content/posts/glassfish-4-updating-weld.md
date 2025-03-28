+++
title = 'Glassfish 4: Updating Weld'
date = '2014-07-30T15:34:00Z'
updated = '2014-07-31T09:25:33Z'
tags = ["j2ee", "glassfish", "jar", "developer", "webapp", "java"]
+++

Updating Weld (http://delabassee.com/blog/?p=286):

1. Grab the Weld 2.0.5 OSGi bundle and copy it to the GF modules directory:

   ```sh
   cp weld-osgi-bundle-2.0.5.Final.jar glassfish/modules/
   ```

2. Restart GlassFish:

   ```sh
   glassfish/bin/asadmin restart-domain domain1
   ```

3. You check which version is now installed by issuing:

   ```sh
   glassfish/bin/asadmin osgi lb | grep 'Weld OSGi'
   ```
