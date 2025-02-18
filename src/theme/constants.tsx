export const Constants = {
  scopes: [
    'create_calls',
    'read_calls',
    'delete_calls',
    'create_texts',
    'read_texts',
    'delete_texts',
    'create_contacts',
    'read_contacts',
    'delete_contacts',
  ],
};
export const ApiEndpoints = {
  login: 'auth/login',
  logout: 'auth/logout',
  refreshToken: 'auth/refreshToken',
  forgotPassword: 'auth/forgotPassword',
  getTimezone: 'account/getTimezone',
  callsRead: 'calls/read',
  callsListing: 'calls/list',
  callInfo: 'calls/info',
  contactsList: 'contacts/list',
  contactDetails: 'contacts/info',
  contactNoteCommentList: 'contacts/getContactNoteComments',
  profileFields: 'profiles/loadProfileFields',
  getContactNotes: 'contacts/getContactNotes',
  createContactNote: 'contacts/createContactNote',
  updateContactNote: 'contacts/updateContactNote',
  deleteContactNote: 'contacts/deleteContactNote',
  deleteNoteComment: 'contacts/deleteContactNoteComment',
  updateNoteComment: 'contacts/updateContactNoteComment',
  createContactNoteComment: 'contacts/createComment',
  tagList: 'tags/list',
  contactTags: '/tags/getContactTags',
  addTagToContact: 'tags/addTagToContact',
  removeTagToContact: 'tags/removeContactTag',
  getContactProperties: 'properties/getContactProperties',
  propertyDetails: 'properties/get',
  getPropertyNotes: 'properties/getPropertyNotes',
  getContactRoles: 'properties/getContactRoles',
  getStatesForSelect: 'account/getStatesForSelect',
  addNewPropertyToContact: 'contacts/addNewPropertyToContact',
  removePropertyFromContact: 'contacts/removePropertyFromContact',
  optInOut: 'contacts/optInOut',
  getAvailablePrimaryItems: 'contacts/getAvailablePrimaryItems',
  getWorkflows: 'account/getWorkflows',
  checkFlowNeedsNumber: 'contacts/checkFlowNeedsNumber',
  triggerWorkflow: 'contacts/triggerWorkflow',
  numberList: 'numbers/list',
  updatePrimaryItem: 'contacts/updatePrimaryItem',
  filtersList: 'numbers/list',
  recordingsList: 'calls/listRecordings',
  addNewContact: 'contacts/add',
  updateContact: 'contacts/update',
  archiveCall: 'calls/archive',
  assignExistingContact: 'contacts/assignToExistingContact',
  textsList: 'texts/list',
  textDetails: 'texts/info',
  textsRead: 'texts/read',
  textsArchive: 'texts/archive',
  textSend: 'texts/sendText',
  uploadMedia: 'account/uploadMedia',
  userInfo: 'account/info',
  twilioAccessToken: 'account/getAccessToken',
  twilioCallData: 'calls/getDataForOutbound',
  firebaseData: 'account/getFirebaseToken',
  findOrCreateByNumber: 'contacts/findOrCreateByNumber',
  getScopes: 'account/getScopes',
  workflowList: 'activityfeed/list',
  pauseWorkFlow: 'flows/pauseFlowSession',
  resumeWorkFlow: 'flows/resumeFlowSession',
  cancelWorkFlow: 'flows/cancelFlowSession',
};

export const dataMarketStatus = [
  {value: 'New', label: 'New'},
  {value: 'Available', label: 'Available'},
  {value: 'Unsold', label: 'Unsold'},
  {value: 'Follow up', label: 'Follow up'},
  {value: 'Contract Pending', label: 'Contract Pending'},
  {value: 'Under Contract', label: 'Under Contract'},
  {value: 'Sold', label: 'Sold'},
  {value: 'Rented', label: 'Rented'},
  {value: 'Outsourced', label: 'Outsourced'},
  {value: 'Dead', label: 'Dead'},
  {value: 'Closed', label: 'Closed'},
];

export const newDealType = [
  {value: 'Buy and Hold (Rental)', label: 'Buy and Hold (Rental)'},
  {value: 'Joint Venture', label: 'Joint Venture'},
  {value: 'Land Deals', label: 'Land Deals'},
  {value: 'Lease Option', label: 'Lease Option'},
  {value: 'Novation', label: 'Novation'},
  {value: 'Rehab', label: 'Rehab'},
  {value: 'Retail Listing', label: 'Retail Listing'},
  {value: 'Seller Financed Sale', label: 'Seller Financed Sale'},
  {value: 'Short Sale', label: 'Short Sale'},
  {value: 'Subject To (Sub2)', label: 'Subject To (Sub2)'},
  {value: 'Turnkey', label: 'Turnkey'},
  {
    value: 'Wholesale - Assignment Contract',
    label: 'Wholesale - Assignment Contract',
  },
  {value: 'Wholesale - Double Close', label: 'Wholesale - Double Close'},
  {value: 'Wholetail', label: 'Wholetail'},
];

export const dataDealType = [
  {value: 'Rehab', label: 'Rehab'},
  {value: 'Wholesale', label: 'Wholesale'},
  {value: 'Shortsale', label: 'Shortsale'},
  {value: 'Rental', label: 'Rental'},
  {value: 'Lease Options', label: 'Lease Options'},
];

export const dataSource = [
  {value: 'Manual', label: 'Manual'},
  {value: 'Sourced', label: 'Sourced'},
  {value: 'BirdDog', label: 'BirdDog'},
  {value: 'Web Form', label: 'Web Form'},
  {value: 'Equity Analyzer', label: 'Equity Analyzer'},
  {value: 'Seller Website', label: 'Seller Website'},
];
