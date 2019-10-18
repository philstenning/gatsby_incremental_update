# gatsby_incremental_update

This is just to see how hard/easy it is to change the content of a gatsby site incrementally, without rebuilding the whole site.

If you take a look in the ./docs/pandas-and-bananas folder you will see the index.html file; this is the file the search bot will look for when traversing the site. Any edits made to this file will be overwritten dynamically content is rendered.

The data that is used in the final render is in a JSON file in the static folder, in this case: " ./docs/static/225/path---sweet-panda-eating-sweets-df-2-7ac-kYelTbtT2tZa5O21FPMB1AAVhg.json".

## Results.

To see how it works if using the chrome browser toggle the dev tools 'F12' key and then 'CTRL + Shift + M' keys to toggle the device toolbar,
then at the top of the screen use the throttle device dropdown (second from the right) and set it to 'low-end mobile'. You now need to go the page:

https://philstenning.github.io/gatsby_incremental_update/sweet-panda-eating-sweets/

If you do not see the page rerender on content load, refresh the page 'Ctrl + F5'
