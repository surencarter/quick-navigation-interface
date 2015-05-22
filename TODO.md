### Misc

* safari open, close, won't open again
* ie8 doesn't open - might work w/ different keys? can't use "event" as param? https://stackoverflow.com/a/2412501/450127

* up and down are bad b/c they move the cursor left/right? maybe disable that?
* sourcemap xss issues? remove b/c not useful anyway?
* Read https://ozkatz.github.io/avoiding-common-backbonejs-pitfalls.html


### 0.1 launch

* Look at all the todo comments through all files
* try it out for a few days on wordcamp.dev and see if you run into any annoyances, bugs, performance issues, etc

* svn:ignore all the dev files like grunt, packg, all js except main/main.min?
* When committing to wporg repo, save screenshots to assets dir instead of plugin dir, then remove from GitHub


### 0.2

* Include content in results
	* Build an index mapping urls to keywords and titles
	* store in transient, then enqueue as .json file, separate from normal js file, so it can be cached client side rather than sent with every page
	* add to same collection as on-page links, rename it to reflect new contents
	* get each model an ID that's a hash of its url, to avoid duplicates. won't always pick best title, but better that dupes
	* remove readme bit about not having content
	* limit it to most recent X, to keep it under ~100k (not gzipped)
* maybe implement the main container as a view, even though it's not dynamic?
	* it still has behavior on it like events, even though it doesn't change visually
* think about any ally issues
* todo check responsiveness once https://core.trac.wordpress.org/ticket/32194 lands
* Setup qunit tests
* update grunt task versions to latest available
* Move concat/minified files to separate folder to so can phpstorm exclude them from code hints etc to avoid collisions?
* Maybe don't ship the dev related files w/ the plugin?
* better way to call start() after everything concatenated, so you can remove bootstrap.js?
* setup csslint


### Future iterations

* Improve search results if current method is not good enough
	* Log each title/url to console, then browse through screens to get a feel for where the biggest problems are
	* Links from admin bar New menu are duplicates and titles aren't helpful, maybe ignore them
    		* maybe ignore all of admin bar b/c it's all duplicates
    	* For menus, show parent > child if the current is a child?
	* remove duplicate urls? but how to determine which one has the best title and keep that one? assume that a longer title contains more info and use that?
	* Disambiguate links like "New" (new what?) and "Add new"
		* Maybe loop through admin menu and add those w/ special context since those are known, then loop through rest of page and just add?
		* Maybe detect append last part of url? only if conflict, or maybe always?
	* Remove any links that are just # or javascript: b/c the handlers are setup based on ID and won't do anything here

* More sophisticated search if above tweaks don't make it good enough
	* Get list of specific examples where current isn't good enough
	* Maybe calculate a Levenshtein distance, or soundex, or something else
		* Find a good, performant implementation. Maybe https://stackoverflow.com/questions/11919065/sort-an-array-by-the-levenshtein-distance-with-best-performance-in-javascript

* Add ability to search by additional keywords that are associated w/ each link, not just the title
	* Can pull the keywords from link title tags, post excerpts, etc

* Listen for new links added by JS?

* Maybe show most popular links by default, and then track what links they visit and show those as default

* Highlight exact query matches in link titles w/ bold

* showRelevantLinks -- improve performance by waiting a few milliseconds before issuing a query, to avoid wasted searches when they're going to type more characters?
	* if this is non-trivial, then might be better to rely on twitter typeahead (or something similar).
	* but wouldn't be worth adding weight just for this, unless it's a noticeable problem, which right now it isn't

* Look at twitter typeahead and it's bloodhound suggestion engine. any compelling reason to use it? what about alternatives?