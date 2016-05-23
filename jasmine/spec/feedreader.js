/* feedreader.js
 *
 * author: Al Carruth
 * license: public domain
 *
 * This is the Jasmine spec file for the Udacity Frontend Nanodegree
 * Feed Reader project.  all of the tests that will be run against
 * your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* This suite is all about the RSS feeds definitions, the allFeeds
     * variable in our application.
     */
    describe('RSS Feeds', function() {

        /* This test makes sure that the allFeeds variable has been
         * defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not
         * empty.
         */
         it('have defined, non-empty URLs', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });

        /* This test loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the name is not
         * empty.
         */
        it('have defined, non-empty names', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    /* A new test suite named "The menu" */
    describe('The menu', function() {

        var menuIcon = $('div.header a.menu-icon-link');
        var menuHidden = function() {
            return $('body').hasClass('menu-hidden');
        };
        
        /* Check that menu element is hidden by default.
         */
        it('is hidden by default', function() {
            expect(menuHidden()).toBe(true);
        });

        /* Check that menu visibility changes when the menu icon is
         * clicked.
         */
        it('visibility changes when icon clicked.', function() {

            /* expect initially hidden */
            expect(menuHidden()).toBe(true);

            /* expect visible after first click */
            menuIcon.trigger('click');
            expect(menuHidden()).toBe(false);

            /* expect  hidden again after second click */
            menuIcon.trigger('click');
            expect(menuHidden()).toBe(true);
        });

    });

    
    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        var firstEntry;

        /* This test ensures when the loadFeed() function is called
         * and completes its work, there is at least a single .entry
         * element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        
        it('async loadFeed non-empty', function(done) {
            firstEntry = document.querySelector('div.feed a.entry-link article.entry');
            expect(firstEntry).not.toBe(null);
            done();
        });
    });

    /* A new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        var feed = $('.feed')[0];
        
        /* We'll compare text0 and text1 for the test. */
        var text0, text1; 
        
        /* This test ensures that the content actually changes
         * when a new feed is loaded by loadFeed().
         *
         * The function loadFeed() is called once to get the first
         * feed and again to get the second feed. The innerText of the
         * feed element is used to compare the content.  Since
         * loadFeed() is asynchronous, we 'chain' the calls by
         * wrapping the second call to loadFeed() in the callback for
         * the first call.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {

                /* get the innerText after first feed is loaded. */ 
                text0 = feed.innerText;
                loadFeed(1, function() {

                    /* get the innerText after second feed is loaded. */ 
                    text1 = feed.innerText;

                    /* signal 'it' that beforeEach is done */
                    done();
                });
            });
        });

        it('content changes when loadFeed() completes', function(done) {

            /* Log to console just to check !-) */
            if (true) {
                console.log(text0 + '\n\n');
                console.log(text1 + '\n\n');
            }
            expect(text0 === text1).toBe(false);
            done();
        });
    });
    
}());
