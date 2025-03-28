+++
title = 'How to trigger a pipeline from other pipeline in Buildkite using JSON format.'
date = '2017-07-20T00:03:00Z'
updated = '2017-09-18T22:34:15Z'
tags = ["pipeline", "jenkins. python", "yaml", "yml", "Buildkite", "CI", "json", "javascript", "tdd", "CD"]
+++

if you are using [Buildkite](https://buildkite.com/), you will find how to "trigger" a pipeline from other pipeline in[this link](https://buildkite.com/docs/pipelines/trigger-step).

All of the examples are in yml format and, I don't know why, it is impossible to find examples in JSON format.

After speaking to the Buildkite support, it is possible to "trigger" pipelines from JSON but it is hard to find the steps to follow. In their support email they wrote a good information to follow:

You should be able to do something like this to trigger a build on the current pipeline:

```json
$ cat my-pipeline.json
{
  "steps": [
    {
      "trigger": "name-of-pipeline", 
      "commit": "HEAD", 
      "branch": "master"
    }
  ]
}
$ buildkite-agent pipeline upload my-pipeline.json
```

The equivalent YAML is:

```yaml
$ cat my-pipeline.yml
steps:
  trigger: "name-of-pipeline"
  commit: "HEAD"
  branch: "master"
$ buildkite-agent pipeline upload my-pipeline.yml
```

If you're running the V3 beta version of our agent, you can use environment variables directly within the pipeline so you can use them in your trigger steps. Here's a docs page about it: [https://buildkite.com/docs/pipelines/trigger-step](https://buildkite.com/docs/pipelines/trigger-step). It'd let you write your pipeline.json like this, and have it "just work"

```json
$ cat my-pipeline.json
{
  "steps": [
    {
      "trigger": "name-of-pipeline", 
      "commit": "$BUILDKITE_COMMIT", 
      "branch": "$BUILDKITE_BRANCH"
    }
  ]
}
$ buildkite-agent pipeline upload my-pipeline.json
```
