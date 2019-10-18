# gatsby_incremental_update

This demo is to see how hard/easy it is to change the content of a gatsby site incrementally, without rebuilding the whole site.

Why? at the moment there is no way to update a page, article or content without doing a full rebuild of the site, and this is a bit of a problem on larger sites, a single typo would need a full rebuild😢

If you take a look in the ./docs/pandas-and-bananas folder you will see an index.html file; this is the file the search bot will look for when traversing the site. Any edits made to this file will be overwritten by the dynamically content when the javascript is executed.

The data that is used in the final render is in a JSON file in the static folder, in this case: " ./docs/static/225/path---sweet-panda-eating-sweets-df-2-7ac-kYelTbtT2tZa5O21FPMB1AAVhg.json".

## Results.

To see how it works if using the chrome browser toggle the dev tools 'F12' key and then 'CTRL + Shift + M' keys to toggle the device toolbar,
then at the top of the screen use the throttle device dropdown (second from the right) and set it to 'low-end mobile'. You now need to go the page:

https://philstenning.github.io/gatsby_incremental_update/sweet-panda-eating-sweets/

If you do not see the page rerender on content load, refresh the page 'Ctrl + F5.'

You see the page initially load the index.html file and render it, and then the JSON content replaces the static content for the final render.

## Conclusion

You only see the static file if you go directly to the page from a different domain or a page refresh. Depending on how fast the connection speed of the device is, you could change the JSON file, and the user might not even see the initial render of the stale content.

Once any page has rendered the app is rehydrated, and you **only** see the JSON file content, so the static files are not seen at all.

You could add pages dynamically at runtime but would have to take into consideration whether or not search bots would see the links without running the javascript first.

So with a bit of work, it is possible to update content on a gatsby site without rebuilding it for each minor update, and of course, there is the option to add remote content as well and have that load at runtime too.
