$(document).ready(function() {

	var users = new TestUserCollection();
	users.fetch({
		reset : true,
		success : function() {

			var options = {
				sources : [{
					data : users,
					type : 'backbone.collection',
					filter : function(items, term) {

						var matcher = new RegExp($.fn.usersuggest.escapeRegex(term), "i");

						return _.filter(items, function(value) {
							return (matcher.test(value.get("user.profile.name.last") + " " + value.get("user.profile.name.first"))  || 
							        matcher.test(value.get("user.profile.care_role")));
						});
					},

					listFormatter : function(item, term) {
						var compiled = _.template("<% print(hl(name.first)) %> <% print(hl(name.last)) %><% if (name.suffix) { print(', ' + name.suffix)} %><br /><small><% print(hl(care_role)) %></small>");

						return compiled({
							hl : $.proxy($.fn.usersuggest.highlighter, this, term),
							name : item.get('user.profile.name'),
							care_role : item.get('care_role')
						});

					},
					inputFormatter : function(item) {
						var compiled = _.template("<%= first %> <%= last %><% if (suffix) { print(', ' + suffix)} %>");
						return compiled(item.get('user.profile.name'));
					},
					valueAttribute : function(item) {
						return item.get("user.profile.id");
					},
					header : "From this team",
				}, {
					data : "../api/users?is_provider=true",
					queryParam : "text",
					type : "url",
					listFormatter : function(item, term) {
						var compiled = _.template("<% if (thumb) { print('<img src=\"../' + thumb + '\">') } %><% print(hl(name.first)) %> <% print(hl(name.last)) %><% if (name.suffix) { print(', ' + name.suffix)} %><br /><small><% print(hl(organization.name)) %></small>");
						return compiled({
							hl : $.proxy($.fn.usersuggest.highlighter, this, term),
							organization : item.profile.organization,
							name : item.profile.name,
							thumb : item.profile.thumbnail
						});
					},
					inputFormatter : function(item) {
						var compiled = _.template("<%= first %> <%= last %>");
						return compiled(item.profile.name);
					},
					valueAttribute : function(item) {
						return item.profile.id;
					},
					resultsProcessor : function(data) {
						return data.users;
					},
					header : "Other contacts",
					maxEntries : 5

				},{
				  type : 'array',
				  data : ["one", "two", "three"]
				 }
				],
				link : "<a tabFocus = \"0\" href=\"#\">Invite someone new</a>",
				linkHandler : function() {
					alert("Invite someone!");
				},
				loadingIconClass : "usuggest-loading",
				noResultsText : "No search results.",
				enableDropdownMode : true,
				delay : 300,
				minLength : 2
			};
			
			
			
			$("#userSuggestTest").usersuggest(options);
			
			$("#submitB").on("click", function(evt) {
				evt.stopPropagation();
				evt.preventDefault();
				$("#submittedval").text($("input[name=assignTo]").val());
			});
		}
	});

}); 