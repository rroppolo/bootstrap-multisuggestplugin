userSuggestPlugin
=================

User suggestion autocomplete / dropdown widget

To use the user suggest plugin, please specify the following options:

    sources : [  Array of data sources.  Each data source is specified in the following format:
               {
                type: One of 'backbone.collection', 'url', or 'array'
                data: Either the Backbone Collection object, or String url, or Array object.
                filter: Function to filter the data by a search query term, and return the filtered data.
                listFormatter: Function to format the items into html as they will appear in the dropdown.
                                 sig:  function(item, term) 
                inputFormatter: Function to format the items into text as they will appear in the input when selected.
                                 sig:  function(item)
                valueAttribute: Function which takes in an item from the data set and returns the 'value' 
                                which will be stored in a hidden input field.  (For example, the user's id)
                                 sig:  function(item)
                header: String of text to appear as the heading of the data source in the menu.
                queryParam:  If url type dataSource, the query param indicates the parameter name under which
                             to pass the search string to the url.
                resultsProcessor: If url type dataSource, a function to process the JSON results returned by the ajax 
                                  requst to return the data.
                                  sig: function(data)
                maxEntries: Optional max number of results to show for this dataSource.
                },
                {...}
              ],
    link : Optional link to show at the bottom of the menu.  (Ex. 'Create new user', etc..)
    linkHandler :  Listener function that is invoked when link is selected.
    loadingIconClass : CSS class for loading icon, which is displayed during url type ajax request.
    noResultsText :  Customizable text to display when no search results are found.
    enableDropdownMode : Boolean parameter indicating whether the input can be expanded as a standard dropdown in
                         addition to autocomplete functionality.  Dropdown mode will render only static dataSources.
    delay :  Optional msec delay for autocomplete.
    minLength : Optional minimum number of characters needed to perform a search.
        


