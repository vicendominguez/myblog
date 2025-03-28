+++
title = 'Helper script to multiupload RPM files to Bintray repo (and remove packages too)'
date = '2016-07-03T13:50:00Z'
updated = '2016-07-03T13:50:03Z'
tags = ["linux", "repo", "script", "deb", "rpm", "bintray"]
+++

If you have a big local rpm repo and you'd like to upload all the packages to [Bintray](https://bintray.com/), I've forked and "improved" the [hgomez](https://github.com/hgomez) shell scripts.

The "upload shell script" is updated to the current Bintray API, and I've improved the output.

The "delete shell script" is just to remove versions of packages from Bintray that you have in your local storage but don't want in Bintray (and were uploaded previously). It's a proof of concept for the API; nothing else.

Two details:
- In the delete-script, I chose to use $1 parameter to point to the files (with wildcards).
- In the upload-script, RPMS_DIRS is used in the upload curl url. Be careful here; we're using relative paths to avoid a long path in the Bintray web interface.

{{< gist vicendominguez 88c1153fa34bd17faffa25623ea8306b >}}
