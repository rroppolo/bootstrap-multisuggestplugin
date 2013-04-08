Bootstrap Multi-Suggest Typeahead
=================================

Extends the default [Bootstrap Typeahead](http://twitter.github.com/bootstrap/javascript.html#typeahead) component to support:

* __multiple datasources__
* data from __Backbone.js Collections__, __RESTful services__ (AJAX/JSON), and __static arrays__
* __dynamic filtering__
* custom, per-datasource __list formatters__
* separate __visible & hidden select values__
* __minimum number of characters__ before a search is performed

_Brought to you by the friendly folks at [ACT.md](http://act.md)_

Live Demo
---------

[View the live demo](http://htmlpreview.github.com/?https://github.com/rroppolo/bootstrap-multisuggestplugin/blob/master/demo.html)


Installation
------------

1. Include `multisuggest-plugin.js`
1. Include `multisuggest-plugin.css`
1. Enable the multi-suggest typeahead on any text input:

```javscript
$('input.foo').multisuggest(options);
```
    
Options
-------

The plugin accepts options as single object argument. Supported options are:

* __sources__: an array of data sources
    * __type__: one of 'backbone.collection', 'url', or 'array'
    * __data__: either the Backbone Collection object, URL string, or Array object
    * __filter__: function to filter the data by a search query term and return the filtered data (for Collections and Arrays)
    * __listFormatter__: function to format the items into HTML as they will appear in the dropdown, e.g. `function(item, term) { ... }`
    * __inputFormatter__: function to format the items into text as they will appear in the input field when selected, e.g. `function(item) { ... }`
    * __valueAttribute__: function which takes an item from the data set and returns the 'value' to be submitted (stored in a hidden input field), e.g. `function(item) { ... }`
    * __headher__: String of text to appear as the heading of the data source in the menu of results
    * __queryParam__: When using the `url` type, this field indicates the query parameter used to pass the search string
    * __resultsProcessor__: When using the `url` type, a function to process the JSON results returned by the AJAX request, e.g. `function(data) { ... }`
    * __maxEntries__: optional maximum number of results to show for this data source
* __link__: optional link HTML to show at the bottom of the menu, e.g. `<a tabFocus="0" href="javascript:void(0);">Enter new item...</a>`
* __linkHandler__: listner function that is invoked when the link is selected
* __loadingIconClass__: CSS class for the loading icon, which is displayed during `url`-type AJAX requests
* __noResultsText__: custom text to display when no search results are found
* __enableDropdownMode__: boolean parameter indicating whether the input can be expanded as a standard dropdown in addition to the typeahead functionality. Dropdown mode will render only static data sources.
* __delay__: optional number of milliseconds to delay typeahead searches
* __minLength__: optional minimum number of characters needed before performing a typeahead search

See the [live demo](http://htmlpreview.github.com/?https://github.com/rroppolo/bootstrap-multisuggestplugin/blob/master/demo.html) for fully qualified examples.

Default Value
--------------

The plugin accepts a default value from the text input through the value and data-value attributes.  
* __value__: the display value, displayed as the selected item in the input field
* __data-value__: the real value to be submitted

```html
<input id="multiSuggestTest" value="John Smith" data-value="36c86e9d72c14d2aa582d2fb95e66c1c" />
```

Contributing
------------

1. Fork the repository
1. Create your feature branch, `git checkout -b my-feature`
1. Commit your changes, `git commit -am 'Description of my new feature'`
1. Push to the branch, `git push origin my-feature`
1. Create a new pull request
