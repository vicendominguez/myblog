+++
title = 'Fixed Shodan API in the old TheHarvester '
date = '2017-06-27T23:49:00Z'
updated = '2017-06-27T23:49:04Z'
tags = ["search", "theharvester", "osint", "hack", "kalilinux", "python", "shodan", "freebsd", "pr", "linux", "opensource", "hacking"]
+++

If you are an old-school man, I am sure you have worked with the old [theHarverster](https://github.com/laramies/theHarvester) to make some OSINT (or whatever they call now to extract/search data from different webpages).

Also, [theHarvester is available in Kali Linux](https://tools.kali.org/information-gathering/theharvester).

Well, the problem comes from [Shodan](https://www.shodan.io/). They updated their API and it breaks the theHarvester support of Shodan.

I wrote [an issue](https://github.com/laramies/theHarvester/issues/57) and, finally, spent some minutes to fix it in this PR: [https://github.com/laramies/theHarvester/pull/58](https://github.com/laramies/theHarvester/pull/58).

I don't know if laramies has deprecated the project... [my contribution](https://github.com/vicendominguez/theHarvester) is there...
