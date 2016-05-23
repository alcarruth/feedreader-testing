
## Project Overview

In this project I was given a web-based application that reads RSS
feeds. The original developer of this application clearly saw the
value in testing, they've already included
[Jasmine](http://jasmine.github.io/) and even started writing their
first test suite! Unfortunately, they decided to move on to start
their own company so I was left the task of completing the Jasmine
test suite.


### What did I learn?

I learned how to use Jasmine to write a number of tests against a
pre-existing application. These test the underlying business logic of
the application as well as the event handling and DOM manipulation.



### Test Suite RSS Feeds

#### Test: RSS Feeds are defined.

This test makes sure that the `allFeeds` variable has been defined and
that it is not empty.

#### Test: RSS Feeds have defined, non-empty URLs.

This test loops through each feed in the `allFeeds` object
and ensures it has a URL defined and that the URL is not
empty.

#### Test: RSS Feeds have defined, non-empty names.

This test loops through each feed in the `allFeeds` object
and ensures it has a name defined and that the name is not
empty.




### Test Suite 'The menu'

#### Test: The menu is hidden by default.

Check that menu element is hidden by default.


#### Test: Menu visibility changes when icon clicked.

Check that menu visibility changes when the menu icon is
clicked.

* menu is initially hidden
* menu becomes visible after first click
* menu becomes  hidden again after second click



### Test Suite "Initial Entries"

#### Test: async `loadFeed()` non-empty.

This test ensures when the `loadFeed()` function is called
and completes its work, there is at least a single `.entry`
element within the `.feed` container.




### Test Suite "New Feed Selection"

#### Test: content changes when `loadFeed()` completes.
        
This test ensures that the content actually changes
when a new feed is loaded by `loadFeed()`.

The function `loadFeed()` is called once to get the first
feed and again to get the second feed. The `innerText` of the
`feed` element is used to compare the content.  Since
`loadFeed()` is asynchronous, we 'chain' the calls by
wrapping the second call to `loadFeed()` in the callback for
the first call.


### License

My contributions here are limited to the files

* `jasmine/spec/feedreader.js`
* `README.md`

and these I place these in the public domain.

