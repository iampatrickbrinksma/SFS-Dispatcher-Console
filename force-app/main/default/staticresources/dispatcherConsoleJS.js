// Custom Javascript code snippet to add keyboard shortcuts to the Salesforce Field Service Dispatcher Console. 
// Standard keyboard shortcuts: https://help.salesforce.com/s/articleView?id=sf.pfs_gantt_keyboard_shortcuts.htm&type=5
// The following keyboard shortcuts are added:
// 8 - 2 weeks view
// f - toggles gantt chart filter options
// p - opens the Gantt Palettes menu and focuses on the palette selection dropdown
// c - opens the Resource filter menu and focuses on the Crews Filtering selection dropdown
// m - toggle Match Gantt Dates
// l - puts focus on the list filters for the service appointments list
// h - toggle horizontal scrollbar
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
    'filterbox':            '#SelectSkilsPropertyBox',
    'palettesmenu':         '#gantt-filter-tabs > button:last-child',
    'paletteselect':        '#ColorPaletteContainer > gantt-palette > div > div:nth-child(2) > span > select',
    'resourcesmenu':        '#gantt-filter-tabs > button:nth-child(2)',
    'crewsfilter':          '#GanttCrewFilterSelect',
    'matchganttdates':      '#matchGanttCheckbox',
    'filterselect':         '#PredefinedFilterSelector',
    'searchlistinput':      '#TaskSearchFilterInput',
    'searchresourceinput':  '#SearchEmployeesOnGanttContainer > input',
    'horizontalscroll':     '#horizontalScrollingCheckbox',
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
    if (event.key === '8') {
        console.log('Keyboard shortcut: Show 2 weeks on Gantt');
        actionOnElement(document, ['show'], elMap['timelineselect']);
        actionOnElement(document, ['click'], elMap['2weeksitem']);
        if (el) el.click();
    } else if (event.key === 'f') {
        console.log('Keyboard shortcut: Show/Hide Gantt Chart Filter options');
        actionOnElement(document, ['click'], elMap['filterbtn']);
    } else if (event.key === 'p') {
        console.log('Keyboard shortcut: Show Gantt Palette selection');
        actionOnElement(document, ['show'], elMap['filterbox']);
        actionOnElement(document, ['click'], elMap['palettesmenu']);
        actionOnElement(document, ['focus'], elMap['paletteselect']);
    } else if (event.key === 'c') {
        actionOnElement(document, ['show'], elMap['filterbox']);
        actionOnElement(document, ['click'], elMap['resourcesmenu']);
        actionOnElement(document, ['focus'], elMap['crewsfilter']);        
    } else if (event.key === 'm') {
        console.log('Keyboard shortcut: Toggle Match Gantt Dates');
        actionOnElement(document, ['click'], elMap['matchganttdates']);
    } else if (event.key === 'l') {
        console.log('Keyboard shortcut: Focus on filter lists selection');
        actionOnElement(document, ['focus'], elMap['filterselect']);
    } else if (event.key === 'h') {
        console.log('Keyboard shortcut: Toggle horizontal scrollbar');
        actionOnElement(document, ['click'], elMap['horizontalscroll']);
    } else if (keysPressed['Shift'] && event.key === 'S') {
        console.log('Keyboard shortcut: Focus on Search Service Appointments input');
        actionOnElement(document, ['focus'], elMap['searchlistinput']);
    } else if (keysPressed['Shift'] && event.key === 'R') {
        actionOnElement(document, ['focus'], elMap['searchresourceinput']);
    }
    delete keysPressed[event.key];
 });
 
 // Take action on an element like focus and/or click
 // to mimic a user action 
 function actionOnElement(parEl, actions, qSelect){
    const el = parEl.querySelector(qSelect);
    if (el) {
        for (a in actions) {
            if (actions[a] === 'show') el.style.display = 'block';
            if (actions[a] === 'hide') el.style.display = 'none';
            if (actions[a] === 'focus') el.focus();
            if (actions[a] === 'click') el.click();
        }
        return el;
    } else {
        console.error(`Element with selector '${qSelect}' not found!`);
    }
 }
