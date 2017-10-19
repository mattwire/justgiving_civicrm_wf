// autocomplete stuff
(function($) {

  function checkJGShortName() {
    var $pageShortNameElement = $('#edit-submitted-jg-shortname');
    var $pageShortNameSuggestionsSelect = $('#edit-submitted-jg-suggestions');
    var getTemplateContentUrl = "/civicrm/ajax/rest?className=CRM_Justgiving_Page_AJAX&fnName=getPageShortNameSuggestions&json=1'}";
    $.ajax({
      url: getTemplateContentUrl,
      type: "POST",
      data: {pageShortName: $pageShortNameElement.val()},
      async: false,
      datatype: "json",
      success: function (data, status) {
        $pageShortNameSuggestionsSelect.find('option').remove();
        var pageNames = $.parseJSON(data);
        if (pageNames.length === 1) {
          $pageShortNameSuggestionsSelect.hide();
          $pageShortNameElement.val(pageNames[0]);
        }
        else {
          $.each(pageNames, function (key, value) {
            $pageShortNameSuggestionsSelect.append('<option value=' + key + '>' + value + '</option>');
          });
          $pageShortNameSuggestionsSelect.show();
          $pageShortNameElement.val(pageNames[0]);
        }
      }
    });
  }

  // On page load
  $(function() {
    var $pageShortNameElement = $('#edit-submitted-jg-shortname');
    var $pageShortNameSuggestionsSelect = $('#edit-submitted-jg-suggestions');

    $pageShortNameElement.after('<input type="button" value="Check" id="jg_short_name_check">');
    $("#jg_short_name_check").click(function () {
      if ($pageShortNameElement.val().length) {
        checkJGShortName();
      }
    });
    $pageShortNameSuggestionsSelect.change(function () {
      $pageShortNameElement.val($pageShortNameSuggestionsSelect.find(":selected").text());
    });
  });

})(jQuery);
