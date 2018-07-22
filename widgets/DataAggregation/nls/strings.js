define({
  root: ({
    _widgetLabel: "Data Aggregation (Beta)",
    startPage: {
      startPageInstructions: "This widget will assist with processing and submitting data from a file to the ${layer} layer in the map",
      startPageHint: "Values within the file must be delimited by comma, tab, semi-colon, or vertical bar.",
      dragDrop: "Please drag/drop",
      browse: "Browse to File",
      or: "OR",
      userPrivilege: "${user} must have edit privileges."
    },
    mapping: {
      schemaMapping: "Field Information",
      schemaMappingHint: "Choose fields from the file that correlate to the fields in the layer.",
      locationMapping: "Location Information",
      locationMappingHint: "Choose the type of address or coordinate information to expect from the file."
    },
    locationMapping: {
      locationMappingPageHint: "Choose location type",
      useAddress: "Locate using an address",
      useAddressHint: "Data contains address information",
      useCoordinates: "Locate using coordinates",
      useCoordinatesHint: "Data contains X/Y coordinate values"
    },
    address: {
      addressPageHint: "Choose address type",
      singleField: "Single field",
      singleFieldHint: "Address information is contained in one field",
      multiField: "Multiple fields",
      multiFieldHint: "Address information is contained in multiple fields"
    },
    coordinates: {
      coordinatesPageHint: "Choose fields that contain the coordinate data"
    },
    fieldMapping: {
      fieldMappingPageHint: "Choose the source field that maps to the target field",
      sourceField: "Matching Source Field",
      targetField: "Target Field"
    },
    buttons: {
      addToMap: "Add to Map",
      submit: "Submit",
      download: "Download"
    },
    review: {
      matched: "Found",
      reviewMatched: "Locations Found",
      unMatched: "not Found",
      reviewUnMatched: "Locations not Found",
      duplicate: "Duplicate",
      reviewDuplicate: "Duplicate Locations",
      use: "Use:",
      fromLayer: "Destination Information",
      fromFile: "Source Information",
      locationControlHint: "Review address information",
      isDuplicate: "Is Duplicate",
      isDuplicateMakeChange: "Modify",
      duplicateAction: "Choose an action",
      item: "Record:",
      locateFeature: "Locate Feature",
      removeFeature: "Remove Feature",
      featureLocated: "Location Found",
      valuesDoNotMatch: "Does not match existing value",
      sync: "Sync address information with field information",
      noFeaturesSaved: "No features saved successfully",
      someFeaturesSaved: "${num} feature(s) saved successfully.",
      someFeaturesNotSaved: "${num} feature(s) were not saved successfully.",
      feature: "Feature",
      locationInfo: "Location Information"
    },
    warningsAndErrors: {
      loadWarning: "This widget requires a Feature Service datasource. Please configure the widget to define a datasource.",
      saveError: "Error saving features.",
      consumesCredits: "This tool consumes credits when used with the ArcGIS Online World Geocoding Service",
      noValue: "Select a field",
      mappingTitle: "",
      locationMappingComplete: "Location Mapping Complete",
      fieldMappingComplete: "Field Mapping Complete",
      settingsCleared: "Settings will be cleared.",
      proceed: "Do you want to proceed?",
      itemMoveMatch: "Item was located and moved to the locations found list",
      itemMoveUnMatched: "Unable to locate item. Moved to the locations not found list.",
      itemWillBeLocated: "Item will be removed from the duplicate locations list.",
      cannotLocate: "Unable to locate item. Please verify the location information.",
      invalidMessage: "Invalid Value.",
      rangeMessage: "Value must be less than ${num} characters."
    },
    featureToolbar: {
      edit: "Edit record",
      locate: "Locate",
      save: "Save record",
      cancel: "Cancel edits",
      cancelTitle: "Cancel Edits",
      cancelMessage: "Cancel edits to the current record?"
    }
  }),
  "ar": 0,
  "bs": 0,
  "cs": 0,
  "da": 0,
  "de": 0,
  "el": 0,
  "es": 0,
  "et": 0,
  "fi": 0,
  "fr": 0,
  "he": 0,
  "hi": 0,
  "hr": 0,
  "it": 0,
  "id": 0,
  "ja": 0,
  "ko": 0,
  "lt": 0,
  "lv": 0,
  "nb": 0,
  "nl": 0,
  "pl": 0,
  "pt-br": 0,
  "pt-pt": 0,
  "ro": 0,
  "ru": 0,
  "sl": 0,
  "sr": 0,
  "sv": 0,
  "th": 0,
  "tr": 0,
  "vi": 0,
  "zh-cn": 0,
  "zh-hk": 0,
  "zh-tw": 0
});