# Additions To The Salesforce Field Service Dispatcher Console 

This repo contains examples of how to add or adjust functionality to the Salesforce Field Service Dispatcher Console via custom Javascript or CSS.

## Disclaimer
IMPORTANT: This code is not intended to be deployed directly to a Salesforce production environment, but to be used as an example. This is not a Salesforce product and is not officially supported by Salesforce.

# 1. More Information On Planning Bar

The DispatcherConsoleCSS static resource allows for more text to be displayed on a planning bar in the gantt. The Gantt Label information is displayed on multiple lines instead of just a single line. See screenshot for how this is displayed.

![image](https://user-images.githubusercontent.com/78381570/236772466-f0961c9b-65e4-474b-8359-87939d943142.png)

How to add this to the Dispatcher Console:
1. Save this code snippet in a file named: dispatcherConsoleCSS.css
2. Create a static resource with the name dispatcherConsoleCSS and upload the dispatcherConsoleCSS.css file
3. Navigate to Field Service Settings (tab) -> Dispatcher Console UI -> Gantt Configurations, scroll down and enter "dispatcherConsoleCSS" in the External CSS option
4. Save your changes
5. Reload the Dispatcher Console

Alternatively, you can clone this repository, and deploy the static resource using VSCode. Or when you are already using an External CSS, you can add the content to the existing one.

# 2. Additional Keyboard Shortcuts

Standard keyboard shortcuts: https://help.salesforce.com/s/articleView?id=sf.pfs_gantt_keyboard_shortcuts.htm&type=5
The following keyboard shortcuts are added:
* 8 - 2 weeks view
* f - toggles gantt chart filter options
* p - opens the Gantt Palettes menu and focuses on the palette selection dropdown
* c - opens the Resource filter menu and focuses on the Crews Filtering selection dropdown
* m - toggle Match Gantt Dates
* l - puts focus on the list filters for the service appointments list
* h - toggles the "Show Horizontal Scrollbar" option
* Shift + S - focus on the search service appointments input field
* Shift +R - focus on the filter resources input field

How to add this to the Dispatcher Console:
1. Save this code snippet in a file named: dispatcherConsoleJS.js
2. Create a static resource with the name dispatcherConsoleJS and upload the dispatcherConsoleJS.js file
3. Navigate to Field Service Settings (tab) -> Dispatcher Console UI -> Gantt Configurations, scroll down and enter "dispatcherConsoleJS" in the External JS option
4. Save your changes
5. Reload the Dispatcher Console

Alternatively, you can clone this repository, and deploy the static resource using VSCode. Or when you are already using an External JS, you can add the content to the existing one.
