# Additions To The Salesforce Field Service Dispatcher Console 

This repo contains examples of how to add or adjust functionality to the Salesforce Field Service Dispatcher Console via custom Javascript or CSS.

# 1. More Information On Planning Bar

The DispatcherConsoleCSS static resource allows for more text to be displayed on a planning bar in the gantt. The Gantt Label information is displayed on multiple lines instead of just a single line.

# 2. Additional Keyboard Shortcuts

Standard keyboard shortcuts: https://help.salesforce.com/s/articleView?id=sf.pfs_gantt_keyboard_shortcuts.htm&type=5
The following keyboard shortcuts are added:
8 - 2 weeks view
p - opens the Gantt Palettes menu and focuses on the palette selection dropdown
m - toggle Match Gantt Dates
l - puts focus on the list filters for the service appointments list
Shift + S - focus on the search service appointments input field
Shift +R - focus on the filter resources input field
How to add this to the Dispatcher Console:
1. Save this code snippet in a file named: dispatcherConsoleJS.js
2. Create a static resource with the name dispatcherConsoleJS and upload the dispatcherConsoleJS.js file
3. Navigate to Field Service Settings (tab) -> Dispatcher Console UI -> Gantt Configurations, scroll down and enter "dispatcherConsoleJS" in the External JS option
4. Save your changes
5. Reload the Dispatcher Console