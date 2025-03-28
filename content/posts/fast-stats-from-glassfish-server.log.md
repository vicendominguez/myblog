+++
title = 'Fast stats from glassfish server.log '
date = '2014-10-16T13:57:00Z'
updated = '2014-10-16T13:58:32Z'
tags = ["log", "centos", "glassfish", "linux", "webserver", "python", "webapp", "stats", "tomcat"]
+++

Very fast Python script to take a quick look at your GlassFish server.log file.

Output:

Fecha Inicio: [2014-10-13T23:54:54.372+0200]
Fecha Fin: [2014-10-16T13:46:22.230+0200]
Total INFO: 826
Total WARN: 126
Total SEVERE: 2341
Total ERROR: 96
Total Processing: 3389
Total Exceptions: 0
Total logfile lines: 13646

The script:
{{< gist vicendominguez 5c54eb26cdf747662453 >}}
