const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    filters: 'Filters',
  },

  app: {
    title: 'Dream Squard',
  },

  api: {
    menu: 'API',
  },

  entities: {
    company: {
      name: 'company',
      label: 'Companies',
      menu: 'Companies',
      exporterFileName: 'Companies_export',
      list: {
        menu: 'Companies',
        title: 'Companies',
      },
      create: {
        success: 'Company successfully saved',
      },
      update: {
        success: 'Company successfully saved',
      },
      destroy: {
        success: 'Company successfully deleted',
      },
      destroyAll: {
        success: 'Company(s) successfully deleted',
      },
      edit: {
        title: 'Edit Company',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        address: 'Address',
        licenseNumber: 'License Number',
        phoneNumber: 'Phone Number',
        phoneNumberRange: 'Phone Number',
        remark: 'Remark',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {
        phoneNumber: 'Enter phone number',
      },
      hints: {},
      new: {
        title: 'New Company',
      },
      view: {
        title: 'View Company',
      },
      importer: {
        title: 'Import Companies',
        fileName: 'company_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    year: {
      name: 'year',
      label: 'Years',
      menu: 'Years',
      exporterFileName: 'Years_export',
      list: {
        menu: 'Years',
        title: 'Years',
      },
      create: {
        success: 'Year successfully saved',
      },
      update: {
        success: 'Year successfully saved',
      },
      destroy: {
        success: 'Year successfully deleted',
      },
      destroyAll: {
        success: 'Year(s) successfully deleted',
      },
      edit: {
        title: 'Edit Year',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        fromDate: 'From Date',
        fromDateRange: 'From Date',
        toDate: 'To Date',
        toDateRange: 'To Date',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Year',
      },
      view: {
        title: 'View Year',
      },
      importer: {
        title: 'Import Years',
        fileName: 'year_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    balanceSheet: {
      name: 'balanceSheet',
      label: 'Balance Sheets',
      menu: 'Balance Sheets',
      exporterFileName: 'Balance Sheets_export',
      list: {
        menu: 'Balance Sheets',
        title: 'Balance Sheets',
      },
      create: {
        success: 'Balance Sheet successfully saved',
      },
      update: {
        success: 'Balance Sheet successfully saved',
      },
      destroy: {
        success: 'Balance Sheet successfully deleted',
      },
      destroyAll: {
        success: 'Balance Sheet(s) successfully deleted',
      },
      edit: {
        title: 'Edit Balance Sheet',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Balance Sheet',
      },
      view: {
        title: 'View Balance Sheet',
      },
      importer: {
        title: 'Import Balance Sheets',
        fileName: 'balanceSheet_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    group: {
      name: 'group',
      label: 'Groups',
      menu: 'Groups',
      exporterFileName: 'Groups_export',
      list: {
        menu: 'Groups',
        title: 'Groups',
      },
      create: {
        success: 'Group successfully saved',
      },
      update: {
        success: 'Group successfully saved',
      },
      destroy: {
        success: 'Group successfully deleted',
      },
      destroyAll: {
        success: 'Group(s) successfully deleted',
      },
      edit: {
        title: 'Edit Group',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        balanceSheetGroup: 'Balance Sheet Group',
        balanceSheetGroupName: 'Balance Sheet Group Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Group',
      },
      view: {
        title: 'View Group',
      },
      importer: {
        title: 'Import Groups',
        fileName: 'group_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    subGroup: {
      name: 'subGroup',
      label: 'Sub Groups',
      menu: 'Sub Groups',
      exporterFileName: 'Sub Groups_export',
      list: {
        menu: 'Sub Groups',
        title: 'Sub Groups',
      },
      create: {
        success: 'Sub Group successfully saved',
      },
      update: {
        success: 'Sub Group successfully saved',
      },
      destroy: {
        success: 'Sub Group successfully deleted',
      },
      destroyAll: {
        success: 'Sub Group(s) successfully deleted',
      },
      edit: {
        title: 'Edit Sub Group',
      },
      fields: {
        id: 'Id',
        group: 'Group',
        groupId: 'Group id',
        name: 'Name',
        addressOne: 'Address 1',
        addressTwo: 'Address 2',
        city: 'City',
        state: 'State',
        agent: 'Agent',
        agentId: 'Agent id',
        referenceParty: 'Reference Party',
        referencePartyId: 'Reference Party id',
        pan: 'Pan',
        bankName: 'Bank Name',
        branch: 'Branch',
        iFSCode: 'IFS Code',
        accountNumber: 'Account Number',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
        identifier:'Identifier',
        mobileNumber:'Mobile Number',
        marka:'Marka',
        limit:'Limit Amount',
        paymentDate:'Payment Date',
        openingBalance:'Opening Balance',
        openingBalanceType:'Opening Balance Type',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Sub Group',
      },
      view: {
        title: 'View Sub Group',
      },
      importer: {
        title: 'Import Sub Groups',
        fileName: 'subGroup_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    openingYear: {
      name: 'openingYear',
      label: 'Opening Years',
      menu: 'Opening Years',
      exporterFileName: 'Opening Years_export',
      list: {
        menu: 'Opening Years',
        title: 'Opening Years',
      },
      create: {
        success: 'Opening Year successfully saved',
      },
      update: {
        success: 'Opening Year successfully saved',
      },
      destroy: {
        success: 'Opening Year successfully deleted',
      },
      destroyAll: {
        success: 'Opening Year(s) successfully deleted',
      },
      edit: {
        title: 'Edit Opening Year',
      },
      fields: {
        id: 'Id',
        company: 'Company',
        year: 'Year',
        subGroup: 'Sub Group',
        amount: 'Amount',
        amountRange: 'Amount',
        creditUnitAmount: 'Credit Unit Amount',
        creditUnitAmountRange: 'Credit Unit Amount',
        creditDay: 'Credit Day',
        creditDayRange: 'Credit Day',
        reminderDay: 'Reminder Day',
        reminderDayRange: 'Reminder Day',
        collectionDay: 'Collection Day',
        collectionDayRange: 'Collection Day',
        securityDeposit: 'Security Deposit',
        securityDepositRange: 'Security Deposit',
        securityDepositDate: 'Security Deposit Date',
        securityDepositDateRange: 'Security Deposit Date',
        expenseRequired: 'Expense Required',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
        limit:'Limit Amount',
        group:'Group',
        openingBalance:'Opening Balance',
        openingBalanceType:'Opening Balance Type',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Opening Year',
      },
      view: {
        title: 'View Opening Year',
      },
      importer: {
        title: 'Import Opening Years',
        fileName: 'openingYear_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    expenseAccount: {
      name: 'expenseAccount',
      label: 'Expense Accounts',
      menu: 'Expense Accounts',
      exporterFileName: 'Expense Accounts_export',
      list: {
        menu: 'Expense Accounts',
        title: 'Expense Accounts',
      },
      create: {
        success: 'Expense Account successfully saved',
      },
      update: {
        success: 'Expense Account successfully saved',
      },
      destroy: {
        success: 'Expense Account successfully deleted',
      },
      destroyAll: {
        success: 'Expense Account(s) successfully deleted',
      },
      edit: {
        title: 'Edit Expense Account',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        year: 'Year',
        yearId: 'Year id',
        company: 'Company',
        companyId: 'Company id',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Expense Account',
      },
      view: {
        title: 'View Expense Account',
      },
      importer: {
        title: 'Import Expense Accounts',
        fileName: 'expenseAccount_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    item: {
      name: 'item',
      label: 'Items',
      menu: 'Items',
      exporterFileName: 'Items_export',
      list: {
        menu: 'Items',
        title: 'Items',
      },
      create: {
        success: 'Item successfully saved',
      },
      update: {
        success: 'Item successfully saved',
      },
      destroy: {
        success: 'Item successfully deleted',
      },
      destroyAll: {
        success: 'Item(s) successfully deleted',
      },
      edit: {
        title: 'Edit Item',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        unit: 'Unit',
        unitRange: 'Unit',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Item',
      },
      view: {
        title: 'View Item',
      },
      importer: {
        title: 'Import Items',
        fileName: 'item_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    itemQuality: {
      name: 'itemQuality',
      label: 'Item Qualities',
      menu: 'Item Qualities',
      exporterFileName: 'Item Qualities_export',
      list: {
        menu: 'Item Qualities',
        title: 'Item Qualities',
      },
      create: {
        success: 'Item Quality successfully saved',
      },
      update: {
        success: 'Item Quality successfully saved',
      },
      destroy: {
        success: 'Item Quality successfully deleted',
      },
      destroyAll: {
        success: 'Item Quality(s) successfully deleted',
      },
      edit: {
        title: 'Edit Item Quality',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        item: 'Item',
        itemId: 'Item id',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Item Quality',
      },
      view: {
        title: 'View Item Quality',
      },
      importer: {
        title: 'Import Item Qualities',
        fileName: 'itemQuality_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    size: {
      name: 'size',
      label: 'Sizes',
      menu: 'Sizes',
      exporterFileName: 'Sizes_export',
      list: {
        menu: 'Sizes',
        title: 'Sizes',
      },
      create: {
        success: 'Size successfully saved',
      },
      update: {
        success: 'Size successfully saved',
      },
      destroy: {
        success: 'Size successfully deleted',
      },
      destroyAll: {
        success: 'Size(s) successfully deleted',
      },
      edit: {
        title: 'Edit Size',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Size',
      },
      view: {
        title: 'View Size',
      },
      importer: {
        title: 'Import Sizes',
        fileName: 'size_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    packing: {
      name: 'packing',
      label: 'Packings',
      menu: 'Packings',
      exporterFileName: 'Packings_export',
      list: {
        menu: 'Packings',
        title: 'Packings',
      },
      create: {
        success: 'Packing successfully saved',
      },
      update: {
        success: 'Packing successfully saved',
      },
      destroy: {
        success: 'Packing successfully deleted',
      },
      destroyAll: {
        success: 'Packing(s) successfully deleted',
      },
      edit: {
        title: 'Edit Packing',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        size: 'Size',
        sizeId: 'Size id',
        weight: 'Weight',
        weightRange: 'Weight',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {
        weight: 'Weight in Kg.',
      },
      hints: {
        weight: 'Approximate weight in Kg.',
      },
      new: {
        title: 'New Packing',
      },
      view: {
        title: 'View Packing',
      },
      importer: {
        title: 'Import Packings',
        fileName: 'packing_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
     subPackingType: {
      name: 'subPackingType',
      label: 'Sub Packing Types',
      menu: 'Sub Packing Types',
      exporterFileName: 'Sub Packing Types_export',
      list: {
        menu: 'Sub Packing Types',
        title: 'Sub Packing Types',
      },
      create: {
        success: 'Sub Packing Type successfully saved',
      },
      update: {
        success: 'Sub Packing Type successfully saved',
      },
      destroy: {
        success: 'Sub Packing Type successfully deleted',
      },
      destroyAll: {
        success: 'Sub Packing Type(s) successfully deleted',
      },
      edit: {
        title: 'Edit Sub Packing Type',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        packingType: 'Packing Type',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Sub Packing Type',
      },
      view: {
        title: 'View Sub Packing Type',
      },
      importer: {
        title: 'Import Sub Packing Types',
        fileName: 'subPackingType_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    individualExpense: {
      name: 'individualExpense',
      label: 'Individual Expenses',
      menu: 'Individual Expenses',
      exporterFileName: 'Individual Expenses_export',
      list: {
        menu: 'Individual Expenses',
        title: 'Individual Expenses',
      },
      create: {
        success: 'Individual Expense successfully saved',
      },
      update: {
        success: 'Individual Expense successfully saved',
      },
      destroy: {
        success: 'Individual Expense successfully deleted',
      },
      destroyAll: {
        success:
          'Individual Expense(s) successfully deleted',
      },
      edit: {
        title: 'Edit Individual Expense',
      },
      fields: {
        id: 'Id',
        rate: 'Rate',
        company: 'Company',
        year: 'Year',
        subGroup: 'Sub Group',
        operator: 'Operator',
        expenseAccount: 'Expense Account',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        operator: {
          Percent: 'Percent',
          Perunit: 'Perunit',
          Fixed: 'Fixed',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Individual Expense',
      },
      view: {
        title: 'View Individual Expense',
      },
      importer: {
        title: 'Import Individual Expenses',
        fileName: 'individualExpense_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    expensesForBill: {
      name: 'expensesForBill',
      label: 'Expenses for Bills',
      menu: 'Expenses for Bills',
      exporterFileName: 'Expenses for Bills_export',
      list: {
        menu: 'Expenses for Bills',
        title: 'Expenses for Bills',
      },
      create: {
        success: 'Expenses for Bill successfully saved',
      },
      update: {
        success: 'Expenses for Bill successfully saved',
      },
      destroy: {
        success: 'Expenses for Bill successfully deleted',
      },
      destroyAll: {
        success:
          'Expenses for Bill(s) successfully deleted',
      },
      edit: {
        title: 'Edit Expenses for Bill',
      },
      fields: {
        id: 'Id',
        company: 'Company',
        year: 'Year',
        expenseAccount: 'Expense Account',
        item: 'Item',
        operator: 'Operator',
        value: 'Value',
        valueRange: 'Value',
        expenseType: 'Expense Type',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        operator: {
          Percent: 'Percent',
          Perunit: 'Perunit',
          Fixed: 'Fixed',
        },
        expenseType: { Credit: 'Credit', Debit: 'Debit' },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Expenses for Bill',
      },
      view: {
        title: 'View Expenses for Bill',
      },
      importer: {
        title: 'Import Expenses for Bills',
        fileName: 'expensesForBill_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    expensesForTransaction: {
      name: 'expensesForTransaction',
      label: 'Expenses for Transactions',
      menu: 'Expenses for Transactions',
      exporterFileName: 'Expenses for Transactions_export',
      list: {
        menu: 'Expenses for Transactions',
        title: 'Expenses for Transactions',
      },
      create: {
        success:
          'Expenses for Transaction successfully saved',
      },
      update: {
        success:
          'Expenses for Transaction successfully saved',
      },
      destroy: {
        success:
          'Expenses for Transaction successfully deleted',
      },
      destroyAll: {
        success:
          'Expenses for Transaction(s) successfully deleted',
      },
      edit: {
        title: 'Edit Expenses for Transaction',
      },
      fields: {
        id: 'Id',
        company: 'Company',
        year: 'Year',
        item: 'Item',
        expenseAccount: 'Expense Account',
        goodsType: 'Goods Type',
        value: 'Value',
        valueRange: 'Value',
        operator: 'Operator',
        expenseType: 'Expense Type',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
        expense:'Expense',
        totalValue: 'Total Value',
      },
      enumerators: {
        operator: {
          Percent: 'Percent',
          Perunit: 'Perunit',
          Fixed: 'Fixed',
        },
        expenseType: { Credit: 'Credit', Debit: 'Debit' },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Expenses for Transaction',
      },
      view: {
        title: 'View Expenses for Transaction',
      },
      importer: {
        title: 'Import Expenses for Transactions',
        fileName: 'expensesForTransaction_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    goodsType: {
      name: 'goodsType',
      label: 'Goods Types',
      menu: 'Goods Types',
      exporterFileName: 'Goods Types_export',
      list: {
        menu: 'Goods Types',
        title: 'Goods Types',
      },
      create: {
        success: 'Goods Type successfully saved',
      },
      update: {
        success: 'Goods Type successfully saved',
      },
      destroy: {
        success: 'Goods Type successfully deleted',
      },
      destroyAll: {
        success: 'Goods Type(s) successfully deleted',
      },
      edit: {
        title: 'Edit Goods Type',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Goods Type',
      },
      view: {
        title: 'View Goods Type',
      },
      importer: {
        title: 'Import Goods Types',
        fileName: 'goodsType_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    goodsArrival: {
      name: 'goodsArrival',
      label: 'Goods Arrivals',
      menu: 'Goods Arrivals',
      exporterFileName: 'Goods Arrivals_export',
      list: {
        menu: 'Goods Arrivals',
        title: 'Goods Arrivals',
      },
      create: {
        success: 'Goods Arrival successfully saved',
      },
      update: {
        success: 'Goods Arrival successfully saved',
      },
      destroy: {
        success: 'Goods Arrival successfully deleted',
      },
      destroyAll: {
        success: 'Goods Arrival(s) successfully deleted',
      },
      edit: {
        title: 'Edit Goods Arrival',
      },
      fields: {
        id: 'Id',
        company: 'Company',
        year: 'Year',
        arrivalDate: 'Arrival Date',
        arrivalDateRange: 'Arrival Date',
        goodsType: 'Goods Type',
        mainSupplier: 'Main Supplier',
        truckNumber: 'Truck Number',
        totalQuantity: 'Total Quantity',
        crGrNumber: 'Gr - Challan Number',
        item: 'Item',
        subPartyName: 'Sub Party Name',
        items: 'Items',
        quantity: 'Quantity',
        quantityRange: 'Quantity',
        packingType: 'Packing Type',
        growerExpenses: 'Grower Expenses',
        buyerExpenses: 'Buyer Expenses',
        isCashSale: 'Is Cash Sale',
        itemQuality: 'Item Quality',
        lotNumber: 'Lot Number/Mandi Number',
        buyer: 'Buyer',
        entryType: 'Entry Type',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
        quality: 'Quality',
        qualities: 'Qualities',
        size: 'Size',
        packing: 'Packing',
        subPackingSize: 'Sub Packing Size',
        rate: 'Rate',
        total: 'Total',
        netTotal: 'Net Total',
        hasGrowerExpenses: 'Has Grower Expenses',
        hasBuyerExpenses: 'Has Buyer Expenses',
        grossTotal: 'Gross Total',
        mainSupplierGrossTotal: 'Main Supplier Gross Total',
        growerExpensesGrossTotal: 'Grower Expenses Gross Total',
        buyerExpensesGrossTotal: 'Buyer Expenses Gross Total',
        agent:'Agent',
        buyerQuantity:'Buyer Quantity',
        buyerRate:'Buyer Rate',
        buyerGrossTotal:'Buyer Gross Total' 
      },
      enumerators: {},
      placeholders: {},
      hints: {
        mainSupplier: 'Name of the SubGroup',
      },
      new: {
        title: 'New Goods Arrival',
      },
      view: {
        title: 'View Goods Arrival',
      },
      importer: {
        title: 'Import Goods Arrivals',
        fileName: 'goodsArrival_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    goodsSales: {
      name: 'goodsSales',
      label: 'Goods Sales',
      menu: 'Goods Sales',
      exporterFileName: 'Goods Sales_export',
      list: {
        menu: 'Goods Sales',
        title: 'Goods Sales',
      },
      create: {
        success: 'Goods Sales successfully saved',
      },
      update: {
        success: 'Goods Sales successfully saved',
      },
      destroy: {
        success: 'Goods Sales successfully deleted',
      },
      destroyAll: {
        success: 'Goods Sales(s) successfully deleted',
      },
      edit: {
        title: 'Edit Goods Sales',
      },
       sell: {
        success: 'Goods successfully sell',
      },
      fields: {
        id: 'Id',
        saleDate: 'Sale Date',
        saleDateRange: 'Sale Date',
        buyerName: 'Buyer Name',
        mainSupplier : 'Main Supplier',
        truckNumber: 'Truck Number',
        crGrNumber: 'Cr Gr Number',
        company: 'Company',
        year: 'Year',
        item: 'Item',
        quality: 'Quality',
        rate: 'Rate',
        quantity: 'Quantity',
        size: 'Size',
        packing: 'Packing',
        quantityRange: 'Quantity',
        subGroup: 'Sub Group',
        subPackingSize: 'Sub Packing Size',
        goodsArrival: 'Goods Arrival',
        grossTotal: 'Gross Total',
        lotNumber: 'Lot Number',
        subPartyGoodsArrival:'Grower Name',
        buyerExpenses: 'Buyer Expenses',
        hasBuyerExpenses: 'Has Buyer Expenses',
        buyerExpensesGrossTotal: 'Buyer Expenses Gross Total',
        buyerGrossTotal: 'Buyer Gross Total',
        netTotal: 'Net Total',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Goods Sales',
      },
      view: {
        title: 'View Goods Sales',
      },
      importer: {
        title: 'Import Goods Sales',
        fileName: 'goodsSales_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    subPartyGoodsArrival: {
      name: 'subPartyGoodsArrival',
      label: 'Sub Party Goods Arrivals',
      menu: 'Stock',
      exporterFileName: 'Sub Party Goods Arrivals_export',
      list: {
        menu: 'Sub Party Goods Arrivals',
        title: 'Sub Party Goods Arrivals',
      },
      create: {
        success:
          'Sub Party Goods Arrival successfully saved',
      },
      update: {
        success:
          'Sub Party Goods Arrival successfully saved',
      },
      destroy: {
        success:
          'Sub Party Goods Arrival successfully deleted',
      },
      destroyAll: {
        success:
          'Sub Party Goods Arrival(s) successfully deleted',
      },
      edit: {
        title: 'Edit Sub Party Goods Arrival',
      },
      fields: {
        id: 'Id',
        subSupplierName: 'Sub Supplier Name',
        item: 'Item',
        quality: 'Quality',
        quantity: 'Quantity',
        quantityRange: 'Quantity',
        packaging: 'Packaging',
        quantityLeft: 'Quantity Left',
        quantityLeftRange: 'Quantity Left',
        year: 'Year',
        company: 'Company',
        goodsArrival: 'Goods Arrival',
        sell:'Sell',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Sub Party Goods Arrival',
      },
      view: {
        title: 'View Sub Party Goods Arrival',
      },
      importer: {
        title: 'Import Sub Party Goods Arrivals',
        fileName: 'subPartyGoodsArrival_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    masterSelection: {
      name: 'masterSelection',
      label: 'Master Selections',
      menu: 'Master Selections',
      exporterFileName: 'Master Selections_export',
      list: {
        menu: 'Master Selections',
        title: 'Master Selections',
      },
      create: {
        success: 'Master Selection successfully saved',
      },
      update: {
        success: 'Master Selection successfully saved',
      },
      destroy: {
        success: 'Master Selection successfully deleted',
      },
      destroyAll: {
        success: 'Master Selection(s) successfully deleted',
      },
      edit: {
        title: 'Edit Master Selection',
      },
      fields: {
        id: 'Id',
        company: 'Company',
        year: 'Year',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Master Selection',
      },
      view: {
        title: 'View Master Selection',
      },
      importer: {
        title: 'Import Master Selections',
        fileName: 'masterSelection_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    voucherEntry: {
      name: 'voucherEntry',
      label: 'Voucher Entries',
      menu: 'Voucher Entries',
      exporterFileName: 'Voucher Entries_export',
      list: {
        menu: 'Voucher Entries',
        title: 'Voucher Entries',
      },
      create: {
        success: 'Voucher Entry successfully saved',
      },
      update: {
        success: 'Voucher Entry successfully saved',
      },
      destroy: {
        success: 'Voucher Entry successfully deleted',
      },
      destroyAll: {
        success: 'Voucher Entry(s) successfully deleted',
      },
      edit: {
        title: 'Edit Voucher Entry',
      },
      fields: {
        id: 'Id',
        voucherEntryType: 'Voucher Entry Type',
        date: 'Date',
        dateRange: 'Date',
        group: 'Group',
        subGroup: 'Sub Group',
        amount: 'Amount',
        amountRange: 'Amount',
        paymentType: 'Payment Type',
        paymentMode: 'Payment Mode',
        remarks: 'Remarks',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        voucherEntryType: {
          Payment: 'Payment',
          Received: 'Received',
          Journal_Entry: 'JournalEntry',
        },
        paymentType: { Credit: 'Credit', Debit: 'Debit' },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Voucher Entry',
      },
      view: {
        title: 'View Voucher Entry',
      },
      importer: {
        title: 'Import Voucher Entries',
        fileName: 'voucherEntry_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    coldStorage: {
      name: 'coldStorage',
      label: 'Cold Storages',
      menu: 'Cold Storages',
      exporterFileName: 'Cold Storages_export',
      list: {
        menu: 'Cold Storages',
        title: 'Cold Storages',
      },
      create: {
        success: 'Cold Storage successfully saved',
      },
      update: {
        success: 'Cold Storage successfully saved',
      },
      destroy: {
        success: 'Cold Storage successfully deleted',
      },
      destroyAll: {
        success: 'Cold Storage(s) successfully deleted',
      },
      edit: {
        title: 'Edit Cold Storage',
      },
      fields: {
        id: 'Id',
        company: 'Company',
        year: 'Year',
        goodsArrival: 'Goods Arrival',
        item: 'Item',
        storeExpense: 'Store Expense',
        subGroup: 'Sub Group',
        sale: 'Sale',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        updatedAtRange: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Cold Storage',
      },
      view: {
        title: 'View Cold Storage',
      },
      importer: {
        title: 'Import Cold Storages',
        fileName: 'coldStorage_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    placeholders: {},
    hints: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url: 'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    host: {
      label: 'Host',
      description: 'Custom access to resources',
    },
    user:{
       label: 'User',
       description: 'Access to grower related resources'
    },
    owner:{
      label: 'Owner',
      description: 'Access to owner related resources'
    }
  },

  user: {
    invite: 'Invite',
    title: 'Users',
    menu: 'Users',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
    },
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    disable: 'Disable',
    enable: 'Enable',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'User(s) successfully deleted',
    edit: {
      title: 'Edit User',
    },
    enumerators: {},
    placeholders: {},
    hints: {},
    new: {
      title: 'New User(s)',
      titleModal: 'New User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint: 'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, }:any) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min: '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }: any) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max: '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint: 'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No options',
    clear: 'Clear',
    noResults: 'No results found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  pagination:{
   items_per_page:'items'
  },
  
 administrator: {
    name: 'administrator',
    label: 'Administrator',
    menu: 'Administrator',
    title: 'Administrator',
  },
  master: {
    name: 'master',
    label: 'Masters',
    menu: 'Masters',
    title: 'Masters',
  },
  purchase: {
    name: 'purchase',
    label: 'Purchases',
    menu: 'Purchases',
    title: 'Purchases',
  },
  sales: {
    name: 'sales',
    label: 'Sales',
    menu: 'Sales',
    title: 'Sales',
  },
  expenses: {
    name: 'expenses',
    label: 'Expenses',
    menu: 'Expenses',
    title: 'Expenses',
  },
  report : {
    name: 'report',
    label: 'Reports',
    menu: 'Reports',
    title: 'Reports',
  },
  table:{
    noData: 'No data',
  }
 
};

export default en;
