# justgiving_civicrm_wf

Implement the following field names in a webform:
* jg_suggestions: select
* jg_shortname*: textfield
* jg_charity*: select (custom keys=charity Ids, charity name)
* jg_eventid*: hidden (justgiving eventid)
* jg_title*: textfield
* jg_target_amount: number
* jg_charity_optin*: checkboxes (yes)
* jg_page_story: textarea

## Suggest Page ShortName
When the module is enabled and webform configured a "check" button will appear on the form.
This performs an ajax request and populates the suggestions select.