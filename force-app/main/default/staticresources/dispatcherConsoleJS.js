// Custom Javascript code snippet to add keyboard shortcuts to the Salesforce Field Service Dispatcher Console. 
// Standard keyboard shortcuts: https://help.salesforce.com/s/articleView?id=sf.pfs_gantt_keyboard_shortcuts.htm&type=5
// The following keyboard shortcuts are added:
// 8 - 2 weeks view
// p - opens the Gantt Palettes menu and focuses on the palette selection dropdown
// m - toggle Match Gantt Dates
// l - puts focus on the list filters for the service appointments list
// Shift + S - focus on the search service appointments input field
// Shift +R - focus on the filter resources input field
// How to add this to the Dispatcher Console:
// 1. Save this code snippet in a file named: dispatcherConsoleJS.js
// 2. Create a static resource with the name dispatcherConsoleJS and upload the dispatcherConsoleJS.js file
// 3. Navigate to Field Service Settings (tab) -> Dispatcher Console UI -> Gantt Configurations, scroll down and enter "dispatcherConsoleJS" in the External JS option
// 4. Save your changes
// 5. Reload the Dispatcher Console
var keysPressed = {};

// selectors for the different elements
var elMap = {
    'timelineselect':       '#selectTimelineContainer',
    '2weeksitem':           '#selectTimelineContainer > button:nth-child(6)',
    'filterbtn':            '#filterSkillsButton',
    'palettesmenu':         '#gantt-filter-tabs > button:last-child',
    'paletteselect':        '#ColorPaletteContainer > gantt-palette > div > div:nth-child(2) > span > select',
    'matchganttdates':      '#matchGanttCheckbox',
    'filterselect':         '#PredefinedFilterSelector',
    'searchlistinput':      '#TaskSearchFilterInput',
    'searchresourceinput':  '#SearchEmployeesOnGanttContainer > input',
};

// Add keydown listener to be able to capture 
// multiple key combinations
document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
 });
 
 // Add keyup listener to actually fire the 
 // event when the key(s) are released
 // Reason to use keyup is that for some unknown 
 // reason not all keydown events were captured...
 document.addEventListener('keyup', (event) => {

    // Validate if an input element has the focus
    // and do nothing in that case to prevent 
    // weird behavior for users typing in text 
    // in input fields
    const elType = document.activeElement?.tagName?.toLowerCase();
    if (elType === 'input' || elType === 'select') return;

    // We're good to go, let's determine 
    // what keyboard shortcut is used
    if (event.key == '8') {
        console.log('Keyboard shortcut: Show 2 weeks on Gantt');
        const el = document.querySelector(elMap['timelineselect']);
        if (el) el.style.display = 'block';
        actionOnElement(document, false, true, elMap['2weeksitem']);
        if (el) el.click();
    } else if (event.key == 'p') {
        console.log('Keyboard shortcut: Show Gantt Palette selection');
        actionOnElement(document, false, true, elMap['filterbtn']);
        actionOnElement(document, false, true, elMap['palettesmenu']);
        actionOnElement(document, true, false, elMap['paletteselect']);
    } else if (event.key == 'm') {
        console.log('Keyboard shortcut: Toggle Match Gantt Dates');
        actionOnElement(document, false, true, elMap['matchganttdates']);
    } else if (event.key == 'l') {
        console.log('Keyboard shortcut: Focus on filter lists selection');
        actionOnElement(document, true, false, elMap['filterselect']);
    } else if (keysPressed['Shift'] && event.key == 'S') {
        console.log('Keyboard shortcut: Focus on Search Service Appointments input');
        actionOnElement(document, true, false, elMap['searchlistinput']);
    } else if (keysPressed['Shift'] && event.key == 'R') {
        actionOnElement(document, true, false, elMap['searchresourceinput']);
    }
    delete keysPressed[event.key];
 });
 
 // Take action on an element like focus and/or click
 // to mimic a user action 
 function actionOnElement(parEl, doFocus, doClick, qSelect){
    const el = parEl.querySelector(qSelect);
    if (el) {
        if (doFocus) el.focus();
        if (doClick) el.click();
        return el;
    } else {
        console.error(`Element with selector '${qSelect}' not found!`);
    }
 }
