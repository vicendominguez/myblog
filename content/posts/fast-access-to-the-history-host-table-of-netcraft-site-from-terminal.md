+++
title = 'Fast access to the history host table of Netcraft site from terminal'
date = '2015-01-27T07:26:00Z'
updated = '2015-01-27T07:53:40Z'
tags = ["cloudflase", "DDOS", "centos", "linux", "javascript", "phantomjs", "script terminal", "develop", "developer", "netcraft"]
+++

Fast and ugly but it works. Useful for detecting old IPs and system OS. Netcraft history host table from terminal:

![Netcraft Scraper](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzSell3-YyYE3HskXs-kL2MSwqoelIIFnaohEXHI6OVeQK7tyFjjcaEM1lLKxSkV2KU23OSeHLkdedcxhuTrYjwOGwKhnzvhCGCkB3N9dA1qHnpj3iZxHNqWR1S9VeMYCDk9peJbcr97o/s1600/netcraftscraper.png)

Netcraft uses javascript so I chose casperjs for the scraper:

{{< gist vicendominguez 2f9203ff473fc1702281 >}}
