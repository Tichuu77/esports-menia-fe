const hi = {
  common: {
    or: 'या',
    cancel: 'रद्द करें',
    reset: 'रीसेट',
    save: 'सहेजें',
    search: 'खोजें',
    edit: 'संपादित करें',
    remove: 'हटाएं',
    new: 'नया',
    export: 'एक्सेल में निर्यात करें',
    noDataToExport: 'निर्यात करने के लिए कोई डेटा नहीं',
    import: 'आयात करें',
    discard: 'छोड़ें',
    yes: 'हाँ',
    no: 'नहीं',
    pause: 'रोकें',
    areYouSure: 'क्या आप सुनिश्चित हैं?',
    view: 'देखें',
    destroy: 'हटाएं',
    mustSelectARow: 'एक पंक्ति चुनना आवश्यक है',
    filters: 'फ़िल्टर',
  },

  app: {
    title: 'एप्लिकेशन',
  },

  api: {
    menu: 'एपीआई',
  },

  entities: {
    company: {
      name: 'कंपनी',
      label: 'कंपनियाँ',
      menu: 'कंपनियाँ',
      exporterFileName: 'Companies_export',
      list: {
        menu: 'कंपनियाँ',
        title: 'कंपनियाँ',
      },
      create: {
        success: 'कंपनी सफलतापूर्वक सहेजी गई',
      },
      update: {
        success: 'कंपनी सफलतापूर्वक सहेजी गई',
      },
      destroy: {
        success: 'कंपनी सफलतापूर्वक हटाई गई',
      },
      destroyAll: {
        success: 'कंपनी(याँ) सफलतापूर्वक हटाई गईं',
      },
      edit: {
        title: 'कंपनी संपादित करें',
      },
      fields: {
        id: 'आईडी',
        name: 'नाम',
        address: 'पता',
        licenseNumber: 'लाइसेंस नंबर',
        phoneNumber: 'फोन नंबर',
        phoneNumberRange: 'फोन नंबर',
        remark: 'टिप्पणी',
        createdAt: 'निर्मित तिथि',
        updatedAt: 'अपडेट तिथि',
        updatedAtRange: 'अपडेट तिथि',
        createdAtRange: 'निर्मित तिथि',
      },
      enumerators: {},
      placeholders: {
        phoneNumber: 'फोन नंबर दर्ज करें',
      },
      hints: {},
      new: {
        title: 'नई कंपनी',
      },
      view: {
        title: 'कंपनी देखें',
      },
      importer: {
        title: 'कंपनियाँ आयात करें',
        fileName: 'company_import_template',
        hint: 'फ़ाइल/छवि कॉलम में फ़ाइलों के यूआरएल स्पेस से अलग करें।',
      },
    },
    year: {
      name: 'वर्ष',
      label: 'वर्ष',
      menu: 'वर्ष',
      exporterFileName: 'Years_export',
      list: {
        menu: 'वर्ष',
        title: 'वर्ष',
      },
      create: {
        success: 'वर्ष सफलतापूर्वक सहेजा गया',
      },
      update: {
        success: 'वर्ष सफलतापूर्वक सहेजा गया',
      },
      destroy: {
        success: 'वर्ष सफलतापूर्वक हटाया गया',
      },
      destroyAll: {
        success: 'वर्ष(ों) सफलतापूर्वक हटाए गए',
      },
      edit: {
        title: 'वर्ष संपादित करें',
      },
      fields: {
        id: 'आईडी',
        name: 'नाम',
        fromDate: 'प्रारंभ तिथि',
        fromDateRange: 'प्रारंभ तिथि',
        toDate: 'समाप्ति तिथि',
        toDateRange: 'समाप्ति तिथि',
        createdAt: 'निर्मित तिथि',
        updatedAt: 'अपडेट तिथि',
        updatedAtRange: 'अपडेट तिथि',
        createdAtRange: 'निर्मित तिथि',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'नया वर्ष',
      },
      view: {
        title: 'वर्ष देखें',
      },
      importer: {
        title: 'वर्ष आयात करें',
        fileName: 'year_import_template',
        hint: 'फ़ाइल/छवि कॉलम में फ़ाइलों के यूआरएल स्पेस से अलग करें।',
      },
    },
    balanceSheet: {
      name: 'बैलेंस शीट',
      label: 'बैलेंस शीट्स',
      menu: 'बैलेंस शीट्स',
      exporterFileName: 'Balance Sheets_export',
      list: {
        menu: 'बैलेंस शीट्स',
        title: 'बैलेंस शीट्स',
      },
      create: {
        success: 'बैलेंस शीट सफलतापूर्वक सहेजी गई',
      },
      update: {
        success: 'बैलेंस शीट सफलतापूर्वक सहेजी गई',
      },
      destroy: {
        success: 'बैलेंस शीट सफलतापूर्वक हटाई गई',
      },
      destroyAll: {
        success: 'बैलेंस शीट(्स) सफलतापूर्वक हटाई गईं',
      },
      edit: {
        title: 'बैलेंस शीट संपादित करें',
      },
      fields: {
        id: 'आईडी',
        name: 'नाम',
        createdAt: 'निर्मित तिथि',
        updatedAt: 'अपडेट तिथि',
        updatedAtRange: 'अपडेट तिथि',
        createdAtRange: 'निर्मित तिथि',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'नई बैलेंस शीट',
      },
      view: {
        title: 'बैलेंस शीट देखें',
      },
      importer: {
        title: 'बैलेंस शीट्स आयात करें',
        fileName: 'balanceSheet_import_template',
        hint: 'फ़ाइल/छवि कॉलम में फ़ाइलों के यूआरएल स्पेस से अलग करें।',
      },
    },
    // ... इसी तरह अन्य entities को भी हिंदी में अनुवाद करें ...
  },

  auth: {
    tenants: 'वर्कस्पेस',
    profile: {
      title: 'प्रोफ़ाइल',
      success: 'प्रोफ़ाइल सफलतापूर्वक अपडेट की गई',
    },
    createAnAccount: 'खाता बनाएं',
    rememberMe: 'मुझे याद रखें',
    forgotPassword: 'पासवर्ड भूल गए',
    signin: 'साइन इन करें',
    signup: 'साइन अप करें',
    signout: 'साइन आउट करें',
    alreadyHaveAnAccount:
      'पहले से खाता है? साइन इन करें।',
    social: {
      errors: {
        'auth-invalid-provider':
          'यह ईमेल पहले से किसी अन्य प्रदाता से पंजीकृत है।',
        'auth-no-email': `इस खाते से जुड़ा ईमेल निजी या अस्तित्वहीन है।`,
      },
    },
    signinWithAnotherAccount:
      'दूसरे खाते से साइन इन करें',
    passwordChange: {
      title: 'पासवर्ड बदलें',
      success: 'पासवर्ड सफलतापूर्वक बदला गया',
      mustMatch: 'पासवर्ड मेल खाना चाहिए',
    },
    emailUnverified: {
      message: `कृपया जारी रखने के लिए <strong>{0}</strong> पर अपना ईमेल सत्यापित करें।`,
      submit: `ईमेल सत्यापन पुनः भेजें`,
    },
    emptyPermissions: {
      message: `आपके पास अभी कोई अनुमति नहीं है। कृपया व्यवस्थापक से अनुमति की प्रतीक्षा करें।`,
    },
    passwordResetEmail: {
      message: 'पासवर्ड रीसेट ईमेल भेजें',
      error: `ईमेल मान्यता प्राप्त नहीं है`,
    },
    passwordReset: {
      message: 'पासवर्ड रीसेट करें',
    },
    emailAddressVerificationEmail: {
      error: `ईमेल मान्यता प्राप्त नहीं है`,
    },
    verificationEmailSuccess: `सत्यापन ईमेल सफलतापूर्वक भेजा गया`,
    passwordResetEmailSuccess: `पासवर्ड रीसेट ईमेल सफलतापूर्वक भेजा गया`,
    passwordResetSuccess: `पासवर्ड सफलतापूर्वक बदला गया`,
    verifyEmail: {
      success: 'ईमेल सफलतापूर्वक सत्यापित हुआ।',
      message:
        'कृपया प्रतीक्षा करें, आपका ईमेल सत्यापित किया जा रहा है...',
    },
  },

  tenant: {
    name: 'वर्कस्पेस',
    label: 'वर्कस्पेस',
    menu: 'वर्कस्पेस',
    list: {
      menu: 'वर्कस्पेस',
      title: 'वर्कस्पेस',
    },
    create: {
      button: 'वर्कस्पेस बनाएं',
      success: 'वर्कस्पेस सफलतापूर्वक सहेजा गया',
    },
    update: {
      success: 'वर्कस्पेस सफलतापूर्वक सहेजा गया',
    },
    destroy: {
      success: 'वर्कस्पेस सफलतापूर्वक हटाया गया',
    },
    destroyAll: {
      success: 'वर्कस्पेस(स) सफलतापूर्वक हटाए गए',
    },
    edit: {
      title: 'वर्कस्पेस संपादित करें',
    },
    fields: {
      id: 'आईडी',
      name: 'नाम',
      url: 'यूआरएल',
      tenantName: 'वर्कस्पेस नाम',
      tenantId: 'वर्कस्पेस',
      tenantUrl: 'वर्कस्पेस यूआरएल',
      plan: 'योजना',
    },
    enumerators: {},
    placeholders: {},
    hints: {},
    new: {
      title: 'नया वर्कस्पेस',
    },
    invitation: {
      view: 'आमंत्रण देखें',
      invited: 'आमंत्रित',
      accept: 'आमंत्रण स्वीकार करें',
      decline: 'आमंत्रण अस्वीकार करें',
      declined: 'आमंत्रण सफलतापूर्वक अस्वीकार किया गया',
      acceptWrongEmail: 'इस ईमेल से आमंत्रण स्वीकार करें',
    },
    select: 'वर्कस्पेस चुनें',
    validation: {
      url: 'आपका वर्कस्पेस यूआरएल केवल छोटे अक्षर, नंबर और डैश (और अक्षर या नंबर से शुरू होना चाहिए) हो सकता है।',
    },
  },

  roles: {
    admin: {
      label: 'प्रशासक',
      description: 'सभी संसाधनों तक पूर्ण पहुँच',
    },
    custom: {
      label: 'कस्टम भूमिका',
      description: 'संसाधनों तक कस्टम पहुँच',
    },
  },

  user: {
    invite: 'आमंत्रित करें',
    title: 'उपयोगकर्ता',
    menu: 'उपयोगकर्ता',
    fields: {
      id: 'आईडी',
      avatars: 'अवतार',
      email: 'ईमेल',
      emails: 'ईमेल(स)',
      fullName: 'नाम',
      firstName: 'पहला नाम',
      lastName: 'अंतिम नाम',
      status: 'स्थिति',
      phoneNumber: 'फोन नंबर',
      role: 'भूमिका',
      createdAt: 'निर्मित तिथि',
      updatedAt: 'अपडेट तिथि',
      roleUser: 'भूमिका/उपयोगकर्ता',
      roles: 'भूमिकाएँ',
      createdAtRange: 'निर्मित तिथि',
      password: 'पासवर्ड',
      rememberMe: 'मुझे याद रखें',
      oldPassword: 'पुराना पासवर्ड',
      newPassword: 'नया पासवर्ड',
      newPasswordConfirmation: 'नया पासवर्ड पुष्टि',
    },
    validations: {
      email: 'ईमेल ${value} अमान्य है',
    },
    disable: 'अक्षम करें',
    enable: 'सक्षम करें',
    doAddSuccess: 'उपयोगकर्ता(यों) को सफलतापूर्वक सहेजा गया',
    doUpdateSuccess: 'उपयोगकर्ता सफलतापूर्वक सहेजा गया',
    status: {
      active: 'सक्रिय',
      invited: 'आमंत्रित',
      'empty-permissions': 'अनुमतियों की प्रतीक्षा',
    },
    exporterFileName: 'users_export',
    doDestroySuccess: 'उपयोगकर्ता सफलतापूर्वक हटाया गया',
    doDestroyAllSelectedSuccess:
      'उपयोगकर्ता(यों) को सफलतापूर्वक हटाया गया',
    edit: {
      title: 'उपयोगकर्ता संपादित करें',
    },
    enumerators: {},
    placeholders: {},
    hints: {},
    new: {
      title: 'नया उपयोगकर्ता(गण)',
      titleModal: 'नया उपयोगकर्ता',
      emailsHint:
        'कई ईमेल पतों को कॉमा से अलग करें।',
    },
    view: {
      title: 'उपयोगकर्ता देखें',
      activity: 'गतिविधि',
    },
    importer: {
      title: 'उपयोगकर्ता आयात करें',
      fileName: 'users_import_template',
      hint: 'फ़ाइल/छवि कॉलम में फ़ाइलों के यूआरएल स्पेस से अलग करें। संबंधों के लिए संदर्भित रिकॉर्ड की आईडी स्पेस से अलग करें। भूमिकाएँ स्पेस से अलग करें।',
    },
    errors: {
      userAlreadyExists:
        'इस ईमेल के साथ उपयोगकर्ता पहले से मौजूद है',
      userNotFound: 'उपयोगकर्ता नहीं मिला',
      disablingHimself: `आप स्वयं को अक्षम नहीं कर सकते`,
      revokingOwnPermission: `आप अपनी स्वयं की व्यवस्थापक अनुमति रद्द नहीं कर सकते`,
    },
  },

  plan: {
    menu: 'योजनाएँ',
    title: 'योजनाएँ',

    free: {
      label: 'मुफ़्त',
      price: '₹0',
    },
    growth: {
      label: 'विकास',
      price: '₹800',
    },
    enterprise: {
      label: 'एंटरप्राइज',
      price: '₹4000',
    },

    pricingPeriod: '/माह',
    current: 'वर्तमान योजना',
    subscribe: 'सदस्यता लें',
    manage: 'सदस्यता प्रबंधित करें',
    cancelAtPeriodEnd:
      'यह योजना अवधि के अंत में रद्द हो जाएगी।',
    somethingWrong:
      'आपकी सदस्यता में कुछ गड़बड़ है। अधिक जानकारी के लिए सदस्यता प्रबंधित करें पर जाएँ।',
    notPlanUser: `आप इस सदस्यता के प्रबंधक नहीं हैं।`,
  },

  auditLog: {
    menu: 'ऑडिट लॉग्स',
    title: 'ऑडिट लॉग्स',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'कई संस्थाओं को कॉमा से अलग करें।',
    fields: {
      id: 'आईडी',
      timestampRange: 'अवधि',
      entityName: 'सत्ता',
      entityNames: 'सत्ताएँ',
      entityId: 'सत्ता आईडी',
      action: 'क्रिया',
      values: 'मान',
      timestamp: 'तिथि',
      createdByEmail: 'उपयोगकर्ता ईमेल',
    },
  },
  settings: {
    title: 'सेटिंग्स',
    menu: 'सेटिंग्स',
    save: {
      success:
        'सेटिंग्स सफलतापूर्वक सहेजी गईं। परिवर्तनों के प्रभाव के लिए पृष्ठ {0} सेकंड में पुनः लोड होगा।',
    },
    fields: {
      theme: 'थीम',
      logos: 'लोगो',
      backgroundImages: 'पृष्ठभूमि छवि',
    },
    colors: {
      default: 'डिफ़ॉल्ट',
      cyan: 'सियान',
      'geek-blue': 'गीक ब्लू',
      gold: 'गोल्ड',
      lime: 'लाइम',
      magenta: 'मैजेंटा',
      orange: 'ऑरेंज',
      'polar-green': 'पोलर ग्रीन',
      purple: 'पर्पल',
      red: 'रेड',
      volcano: 'वोल्केनो',
      yellow: 'येलो',
    },
  },
  dashboard: {
    menu: 'डैशबोर्ड',
    message: `यह पृष्ठ केवल डेमो के लिए नकली डेटा का उपयोग करता है। आप इसे frontend/view/dashboard/DashboardPage.ts में संपादित कर सकते हैं।`,
    charts: {
      day: 'दिन',
      red: 'लाल',
      green: 'हरा',
      yellow: 'पीला',
      grey: 'ग्रे',
      blue: 'नीला',
      orange: 'नारंगी',
      months: {
        1: 'जनवरी',
        2: 'फरवरी',
        3: 'मार्च',
        4: 'अप्रैल',
        5: 'मई',
        6: 'जून',
        7: 'जुलाई',
      },
      eating: 'खाना',
      drinking: 'पीना',
      sleeping: 'सोना',
      designing: 'डिज़ाइनिंग',
      coding: 'कोडिंग',
      cycling: 'साइक्लिंग',
      running: 'दौड़ना',
      customer: 'ग्राहक',
    },
  },
  errors: {
    backToHome: 'होम पर वापस जाएँ',
    403: `माफ़ कीजिए, आपको इस पृष्ठ तक पहुँच नहीं है`,
    404: 'माफ़ कीजिए, आपने जिस पृष्ठ पर जाने का प्रयास किया वह मौजूद नहीं है',
    500: 'माफ़ कीजिए, सर्वर में त्रुटि है',
    429: 'बहुत अधिक अनुरोध। कृपया बाद में पुनः प्रयास करें।',
    forbidden: {
      message: 'निषिद्ध',
    },
    validation: {
      message: 'एक त्रुटि हुई',
    },
    defaultErrorMessage: 'ओह, एक त्रुटि हुई',
  },

  preview: {
    error:
      'माफ़ कीजिए, यह ऑपरेशन प्रीव्यू मोड में अनुमति नहीं है।',
  },

  validation: {
    mixed: {
      default: '${path} अमान्य है',
      required: '${path} आवश्यक है',
      oneOf:
        '${path} निम्नलिखित मानों में से एक होना चाहिए: ${values}',
      notOneOf:
        '${path} निम्नलिखित मानों में से एक नहीं होना चाहिए: ${values}',
      notType: ({
        path,
        type,
      }: {
        path: string;
        type: string;
        originalValue: any;
      }) => {
        return `${path} एक ${type} होना चाहिए`;
      },
    },
    string: {
      length:
        '${path} बिल्कुल ${length} अक्षर का होना चाहिए',
      min: '${path} कम से कम ${min} अक्षर का होना चाहिए',
      max: '${path} अधिकतम ${max} अक्षर का होना चाहिए',
      matches:
        '${path} निम्नलिखित से मेल खाना चाहिए: "${regex}"',
      email: '${path} एक मान्य ईमेल होना चाहिए',
      url: '${path} एक मान्य यूआरएल होना चाहिए',
      trim: '${path} एक ट्रिम किया हुआ स्ट्रिंग होना चाहिए',
      lowercase: '${path} एक लोअरकेस स्ट्रिंग होना चाहिए',
      uppercase: '${path} एक अपरकेस स्ट्रिंग होना चाहिए',
      selected: '${path} चयनित होना चाहिए',
    },
    number: {
      min: '${path} ${min} से अधिक या बराबर होना चाहिए',
      max: '${path} ${max} से कम या बराबर होना चाहिए',
      lessThan: '${path} ${less} से कम होना चाहिए',
      moreThan: '${path} ${more} से अधिक होना चाहिए',
      notEqual: '${path} ${notEqual} के बराबर नहीं होना चाहिए',
      positive: '${path} एक धनात्मक संख्या होना चाहिए',
      negative: '${path} एक ऋणात्मक संख्या होना चाहिए',
      integer: '${path} एक पूर्णांक होना चाहिए',
    },
    date: {
      min: '${path} फ़ील्ड ${min} के बाद होना चाहिए',
      max: '${path} फ़ील्ड ${max} से पहले होना चाहिए',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} फ़ील्ड में ऑब्जेक्ट आकार में निर्दिष्ट कुंजियाँ नहीं हो सकतीं',
    },
    array: {
      min: ({ min, path }: { min: number; path: string }) =>
        min === 1
          ? `${path} आवश्यक है`
          : `${path} फ़ील्ड में कम से कम ${min} आइटम होने चाहिए`,
      max: '${path} फ़ील्ड में अधिकतम ${max} आइटम होने चाहिए',
    },
  },
  fileUploader: {
    upload: 'अपलोड करें',
    image: 'आपको एक छवि अपलोड करनी होगी',
    size: 'फ़ाइल बहुत बड़ी है। अधिकतम आकार {0} है',
    formats: `अमान्य प्रारूप। इनमें से एक होना चाहिए: {0}.`,
  },
  importer: {
    line: 'पंक्ति',
    status: 'स्थिति',
    pending: 'लंबित',
    imported: 'आयातित',
    error: 'त्रुटि',
    total: `{0} आयातित, {1} लंबित और {2} में त्रुटि`,
    importedMessage: `{1} में से {0} संसाधित किए गए।`,
    noNavigateAwayMessage:
      'इस पृष्ठ से बाहर न जाएँ, अन्यथा आयात रुक जाएगा।',
    completed: {
      success:
        'आयात पूरा हुआ। सभी पंक्तियाँ सफलतापूर्वक आयातित हुईं।',
      someErrors:
        'प्रसंस्करण पूरा हुआ, लेकिन कुछ पंक्तियाँ आयात नहीं हो सकीं।',
      allErrors: 'आयात विफल रहा। कोई मान्य पंक्ति नहीं है।',
    },
    form: {
      downloadTemplate: 'टेम्पलेट डाउनलोड करें',
      hint: 'जारी रखने के लिए फ़ाइल को यहाँ क्लिक या ड्रैग करें',
    },
    list: {
      discardConfirm:
        'क्या आप सुनिश्चित हैं? गैर-आयातित डेटा खो जाएगा।',
    },
    errors: {
      invalidFileEmpty: 'फ़ाइल खाली है',
      invalidFileExcel:
        'केवल एक्सेल (.xlsx) फ़ाइलें अनुमत हैं',
      invalidFileUpload:
        'अमान्य फ़ाइल। सुनिश्चित करें कि आप टेम्पलेट का नवीनतम संस्करण उपयोग कर रहे हैं।',
      importHashRequired: 'आयात हैश आवश्यक है',
      importHashExistent: 'डेटा पहले ही आयात किया जा चुका है',
    },
  },

  autocomplete: {
    loading: 'लोड हो रहा है...',
  },

  imagesViewer: {
    noImage: 'कोई छवि नहीं',
  },
};

export default hi;
