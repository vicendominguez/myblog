+++
title = 'Glassfish Error: Uncaught exception: java.lang.NullPointerException and Glassfish stops accepting requests on its port'
date = '2014-07-17T11:36:00Z'
updated = '2014-07-19T08:22:31Z'
tags = ["grizzly", "j2ee", "glassfish", "webserver", "webapp", "java"]
+++

That issue appears in Glassfish 4. It is documented:

- [GRIZZLY-1615](https://java.net/jira/browse/GRIZZLY-1615?page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel)
- [GLASSFISH-20918](https://java.net/jira/browse/GLASSFISH-20918?page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel)

You need to download the patch in the second URL and overwrite the file:

```sh
mv nucleus-grizzly-all.jar.1 nucleus-grizzly-all.jar
```
