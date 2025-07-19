const es = {
  // Traducción al español
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Restablecer',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sí',
    no: 'No',
    pause: 'Pausar',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debes seleccionar una fila',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicación',
  },

  api: {
    menu: 'API',
  },

  entities: {
    company: {
      name: 'empresa',
      label: 'Empresas',
      menu: 'Empresas',
      exporterFileName: 'exportacion_empresa',
      list: {
        menu: 'Empresas',
        title: 'Empresas',
      },
      create: {
        success: 'Empresa guardada con éxito',
      },
      update: {
        success: 'Empresa guardada con éxito',
      },
      destroy: {
        success: 'Empresa eliminada con éxito',
      },
      destroyAll: {
        success: 'Empresa(s) eliminada(s) con éxito',
      },
      edit: {
        title: 'Editar Empresa',
      },
      fields: {
        id: 'Id',
        name: 'Nombre',
        address: 'Dirección',
        licenseNumber: 'Número de Licencia',
        phoneNumber: 'Teléfono',
        phoneNumberRange: 'Teléfono',
        remark: 'Observación',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {},
      placeholders: {
        phoneNumber: 'Ingrese el teléfono',
      },
      hints: {},
      new: {
        title: 'Nueva Empresa',
      },
      view: {
        title: 'Ver Empresa',
      },
      importer: {
        title: 'Importar Empresas',
        fileName: 'empresa_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    balanceSheet: {
      name: 'balanceHoja',
      label: 'Balances de Hoja',
      menu: 'Balances de Hoja',
      exporterFileName: 'balances_hoja_exportar',
      list: {
        menu: 'Balances de Hoja',
        title: 'Balances de Hoja',
      },
      create: {
        success: 'Balance de hoja guardado con éxito',
      },
      update: {
        success: 'Balance de hoja guardado con éxito',
      },
      destroy: {
        success: 'Balance de hoja eliminado con éxito',
      },
      destroyAll: {
        success: 'Balance(s) de hoja eliminado(s) con éxito',
      },
      edit: {
        title: 'Editar Balance de Hoja',
      },
      fields: {
        id: 'Id',
        name: 'Nombre',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nuevo Balance de Hoja',
      },
      view: {
        title: 'Ver Balance de Hoja',
      },
      importer: {
        title: 'Importar Balances de Hoja',
        fileName: 'balanceHoja_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    group: {
      name: 'grupo',
      label: 'Grupos',
      menu: 'Grupos',
      exporterFileName: 'grupos_exportar',
      list: {
        menu: 'Grupos',
        title: 'Grupos',
      },
      create: {
        success: 'Grupo guardado con éxito',
      },
      update: {
        success: 'Grupo guardado con éxito',
      },
      destroy: {
        success: 'Grupo eliminado con éxito',
      },
      destroyAll: {
        success: 'Grupo(s) eliminado(s) con éxito',
      },
      edit: {
        title: 'Editar Grupo',
      },
      fields: {
        id: 'Id',
        name: 'Nombre',
        balanceSheetGroup: 'Grupo de Balance',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nuevo Grupo',
      },
      view: {
        title: 'Ver Grupo',
      },
      importer: {
        title: 'Importar Grupos',
        fileName: 'grupo_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    subGroup: {
      name: 'subgrupo',
      label: 'Subgrupos',
      menu: 'Subgrupos',
      exporterFileName: 'subgrupos_exportar',
      list: {
        menu: 'Subgrupos',
        title: 'Subgrupos',
      },
      create: {
        success: 'Subgrupo guardado con éxito',
      },
      update: {
        success: 'Subgrupo guardado con éxito',
      },
      destroy: {
        success: 'Subgrupo eliminado con éxito',
      },
      destroyAll: {
        success: 'Subgrupo(s) eliminado(s) con éxito',
      },
      edit: {
        title: 'Editar Subgrupo',
      },
      fields: {
        id: 'Id',
        group: 'Grupo',
        name: 'Nombre',
        addressOne: 'Dirección 1',
        addressTwo: 'Dirección 2',
        city: 'Ciudad',
        state: 'Estado',
        agent: 'Agente',
        referenceParty: 'Parte de Referencia',
        pan: 'PAN',
        bankName: 'Banco',
        branch: 'Sucursal',
        iFSCode: 'Código IFS',
        accountNumber: 'Número de Cuenta',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nuevo Subgrupo',
      },
      view: {
        title: 'Ver Subgrupo',
      },
      importer: {
        title: 'Importar Subgrupos',
        fileName: 'subgrupo_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    openingYear: {
      name: 'añoApertura',
      label: 'Años de Apertura',
      menu: 'Años de Apertura',
      exporterFileName: 'años_apertura_exportar',
      list: {
        menu: 'Años de Apertura',
        title: 'Años de Apertura',
      },
      create: {
        success: 'Año de apertura guardado con éxito',
      },
      update: {
        success: 'Año de apertura guardado con éxito',
      },
      destroy: {
        success: 'Año de apertura eliminado con éxito',
      },
      destroyAll: {
        success: 'Año(s) de apertura eliminado(s) con éxito',
      },
      edit: {
        title: 'Editar Año de Apertura',
      },
      fields: {
        id: 'Id',
        company: 'Empresa',
        year: 'Año',
        subGroup: 'Subgrupo',
        amount: 'Monto',
        amountRange: 'Monto',
        creditUnitAmount: 'Monto Unidad Crédito',
        creditUnitAmountRange: 'Monto Unidad Crédito',
        creditDay: 'Día de Crédito',
        creditDayRange: 'Día de Crédito',
        reminderDay: 'Día de Recordatorio',
        reminderDayRange: 'Día de Recordatorio',
        collectionDay: 'Día de Cobro',
        collectionDayRange: 'Día de Cobro',
        securityDeposit: 'Depósito de Seguridad',
        securityDepositRange: 'Depósito de Seguridad',
        securityDepositDate: 'Fecha Depósito Seguridad',
        securityDepositDateRange: 'Fecha Depósito Seguridad',
        expenseRequired: 'Gasto Requerido',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nuevo Año de Apertura',
      },
      view: {
        title: 'Ver Año de Apertura',
      },
      importer: {
        title: 'Importar Años de Apertura',
        fileName: 'añoApertura_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    expenseAccount: {
      name: 'cuentaGasto',
      label: 'Cuentas de Gasto',
      menu: 'Cuentas de Gasto',
      exporterFileName: 'cuentas_gasto_exportar',
      list: {
        menu: 'Cuentas de Gasto',
        title: 'Cuentas de Gasto',
      },
      create: {
        success: 'Cuenta de gasto guardada con éxito',
      },
      update: {
        success: 'Cuenta de gasto guardada con éxito',
      },
      destroy: {
        success: 'Cuenta de gasto eliminada con éxito',
      },
      destroyAll: {
        success: 'Cuenta(s) de gasto eliminada(s) con éxito',
      },
      edit: {
        title: 'Editar Cuenta de Gasto',
      },
      fields: {
        id: 'Id',
        name: 'Nombre',
        year: 'Año',
        company: 'Empresa',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nueva Cuenta de Gasto',
      },
      view: {
        title: 'Ver Cuenta de Gasto',
      },
      importer: {
        title: 'Importar Cuentas de Gasto',
        fileName: 'cuentaGasto_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    item: {
      name: 'artículo',
      label: 'Artículos',
      menu: 'Artículos',
      exporterFileName: 'artículos_exportar',
      list: {
        menu: 'Artículos',
        title: 'Artículos',
      },
      create: {
        success: 'Artículo guardado con éxito',
      },
      update: {
        success: 'Artículo guardado con éxito',
      },
      destroy: {
        success: 'Artículo eliminado con éxito',
      },
      destroyAll: {
        success: 'Artículo(s) eliminado(s) con éxito',
      },
      edit: {
        title: 'Editar Artículo',
      },
      fields: {
        id: 'Id',
        name: 'Nombre',
        unit: 'Unidad',
        unitRange: 'Unidad',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nuevo Artículo',
      },
      view: {
        title: 'Ver Artículo',
      },
      importer: {
        title: 'Importar Artículos',
        fileName: 'artículo_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    itemQuality: {
      name: 'calidadArtículo',
      label: 'Calidades de Artículo',
      menu: 'Calidades de Artículo',
      exporterFileName: 'calidades_artículo_exportar',
      list: {
        menu: 'Calidades de Artículo',
        title: 'Calidades de Artículo',
      },
      create: {
        success: 'Calidad de artículo guardada con éxito',
      },
      update: {
        success: 'Calidad de artículo guardada con éxito',
      },
      destroy: {
        success: 'Calidad de artículo eliminada con éxito',
      },
      destroyAll: {
        success: 'Calidad(es) de artículo eliminada(s) con éxito',
      },
      edit: {
        title: 'Editar Calidad de Artículo',
      },
      fields: {
        id: 'Id',
        name: 'Nombre',
        item: 'Artículo',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nueva Calidad de Artículo',
      },
      view: {
        title: 'Ver Calidad de Artículo',
      },
      importer: {
        title: 'Importar Calidades de Artículo',
        fileName: 'calidadArtículo_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    size: {
      name: 'tamaño',
      label: 'Tamaños',
      menu: 'Tamaños',
      exporterFileName: 'tamaños_exportar',
      list: {
        menu: 'Tamaños',
        title: 'Tamaños',
      },
      create: {
        success: 'Tamaño guardado con éxito',
      },
      update: {
        success: 'Tamaño guardado con éxito',
      },
      destroy: {
        success: 'Tamaño eliminado con éxito',
      },
      destroyAll: {
        success: 'Tamaño(s) eliminado(s) con éxito',
      },
      edit: {
        title: 'Editar Tamaño',
      },
      fields: {
        id: 'Id',
        name: 'Nombre',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nuevo Tamaño',
      },
      view: {
        title: 'Ver Tamaño',
      },
      importer: {
        title: 'Importar Tamaños',
        fileName: 'tamaño_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    packing: {
      name: 'empaque',
      label: 'Empaques',
      menu: 'Empaques',
      exporterFileName: 'empaques_exportar',
      list: {
        menu: 'Empaques',
        title: 'Empaques',
      },
      create: {
        success: 'Empaque guardado con éxito',
      },
      update: {
        success: 'Empaque guardado con éxito',
      },
      destroy: {
        success: 'Empaque eliminado con éxito',
      },
      destroyAll: {
        success: 'Empaque(s) eliminado(s) con éxito',
      },
      edit: {
        title: 'Editar Empaque',
      },
      fields: {
        id: 'Id',
        name: 'Nombre',
        size: 'Tamaño',
        weight: 'Peso',
        weightRange: 'Peso',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {},
      placeholders: {
        weight: 'Peso en Kg.',
      },
      hints: {
        weight: 'Peso aproximado en Kg.',
      },
      new: {
        title: 'Nuevo Empaque',
      },
      view: {
        title: 'Ver Empaque',
      },
      importer: {
        title: 'Importar Empaques',
        fileName: 'empaque_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    individualExpense: {
      name: 'gastoIndividual',
      label: 'Gastos Individuales',
      menu: 'Gastos Individuales',
      exporterFileName: 'gastos_individuales_exportar',
      list: {
        menu: 'Gastos Individuales',
        title: 'Gastos Individuales',
      },
      create: {
        success: 'Gasto individual guardado con éxito',
      },
      update: {
        success: 'Gasto individual guardado con éxito',
      },
      destroy: {
        success: 'Gasto individual eliminado con éxito',
      },
      destroyAll: {
        success: 'Gasto(s) individual(es) eliminado(s) con éxito',
      },
      edit: {
        title: 'Editar Gasto Individual',
      },
      fields: {
        id: 'Id',
        rate: 'Tasa',
        company: 'Empresa',
        year: 'Año',
        subGroup: 'Subgrupo',
        operator: 'Operador',
        expenseAccount: 'Cuenta de Gasto',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {
        operator: {
          Percent: 'Porcentaje',
          Perunit: 'Por unidad',
          Fixed: 'Fijo',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nuevo Gasto Individual',
      },
      view: {
        title: 'Ver Gasto Individual',
      },
      importer: {
        title: 'Importar Gastos Individuales',
        fileName: 'gastoIndividual_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    expensesForBill: {
      name: 'gastosFactura',
      label: 'Gastos por Factura',
      menu: 'Gastos por Factura',
      exporterFileName: 'gastos_factura_exportar',
      list: {
        menu: 'Gastos por Factura',
        title: 'Gastos por Factura',
      },
      create: {
        success: 'Gasto por factura guardado con éxito',
      },
      update: {
        success: 'Gasto por factura guardado con éxito',
      },
      destroy: {
        success: 'Gasto por factura eliminado con éxito',
      },
      destroyAll: {
        success: 'Gasto(s) por factura eliminado(s) con éxito',
      },
      edit: {
        title: 'Editar Gasto por Factura',
      },
      fields: {
        id: 'Id',
        company: 'Empresa',
        year: 'Año',
        expenseAccount: 'Cuenta de Gasto',
        item: 'Artículo',
        operator: 'Operador',
        value: 'Valor',
        valueRange: 'Valor',
        expenseType: 'Tipo de Gasto',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {
        operator: {
          Percent: 'Porcentaje',
          Perunit: 'Por unidad',
          Fixed: 'Fijo',
        },
        expenseType: { Credit: 'Crédito', Debit: 'Débito' },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nuevo Gasto por Factura',
      },
      view: {
        title: 'Ver Gasto por Factura',
      },
      importer: {
        title: 'Importar Gastos por Factura',
        fileName: 'gastosFactura_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    expensesForTransaction: {
      name: 'gastosTransacción',
      label: 'Gastos por Transacción',
      menu: 'Gastos por Transacción',
      exporterFileName: 'gastos_transacción_exportar',
      list: {
        menu: 'Gastos por Transacción',
        title: 'Gastos por Transacción',
      },
      create: {
        success: 'Gasto por transacción guardado con éxito',
      },
      update: {
        success: 'Gasto por transacción guardado con éxito',
      },
      destroy: {
        success: 'Gasto por transacción eliminado con éxito',
      },
      destroyAll: {
        success: 'Gasto(s) por transacción eliminado(s) con éxito',
      },
      edit: {
        title: 'Editar Gasto por Transacción',
      },
      fields: {
        id: 'Id',
        company: 'Empresa',
        year: 'Año',
        item: 'Artículo',
        expenseAccount: 'Cuenta de Gasto',
        goodsType: 'Tipo de Bien',
        value: 'Valor',
        valueRange: 'Valor',
        operator: 'Operador',
        expenseType: 'Tipo de Gasto',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {
        operator: {
          Percent: 'Porcentaje',
          Perunit: 'Por unidad',
          Fixed: 'Fijo',
        },
        expenseType: { Credit: 'Crédito', Debit: 'Débito' },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nuevo Gasto por Transacción',
      },
      view: {
        title: 'Ver Gasto por Transacción',
      },
      importer: {
        title: 'Importar Gastos por Transacción',
        fileName: 'gastosTransacción_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    goodsType: {
      name: 'tipoBien',
      label: 'Tipos de Bien',
      menu: 'Tipos de Bien',
      exporterFileName: 'tipos_bien_exportar',
      list: {
        menu: 'Tipos de Bien',
        title: 'Tipos de Bien',
      },
      create: {
        success: 'Tipo de bien guardado con éxito',
      },
      update: {
        success: 'Tipo de bien guardado con éxito',
      },
      destroy: {
        success: 'Tipo de bien eliminado con éxito',
      },
      destroyAll: {
        success: 'Tipo(s) de bien eliminado(s) con éxito',
      },
      edit: {
        title: 'Editar Tipo de Bien',
      },
      fields: {
        id: 'Id',
        name: 'Nombre',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nuevo Tipo de Bien',
      },
      view: {
        title: 'Ver Tipo de Bien',
      },
      importer: {
        title: 'Importar Tipos de Bien',
        fileName: 'tipoBien_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    goodsArrival: {
      name: 'llegadaBien',
      label: 'Llegadas de Bien',
      menu: 'Llegadas de Bien',
      exporterFileName: 'llegadas_bien_exportar',
      list: {
        menu: 'Llegadas de Bien',
        title: 'Llegadas de Bien',
      },
      create: {
        success: 'Llegada de bien guardada con éxito',
      },
      update: {
        success: 'Llegada de bien guardada con éxito',
      },
      destroy: {
        success: 'Llegada de bien eliminada con éxito',
      },
      destroyAll: {
        success: 'Llegada(s) de bien eliminada(s) con éxito',
      },
      edit: {
        title: 'Editar Llegada de Bien',
      },
      fields: {
        id: 'Id',
        company: 'Empresa',
        year: 'Año',
        arrivalDate: 'Fecha de Llegada',
        arrivalDateRange: 'Fecha de Llegada',
        goodsType: 'Tipo de Bien',
        mainSupplier: 'Proveedor Principal',
        truckNumber: 'Número de Camión',
        crGrNumber: 'Número Cr Gr',
        item: 'Artículo',
        subPartyName: 'Nombre Subparte',
        items: 'Artículos',
        quantity: 'Cantidad',
        quantityRange: 'Cantidad',
        packingType: 'Tipo de Empaque',
        isCashSale: 'Venta en Efectivo',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {},
      placeholders: {},
      hints: {
        mainSupplier: 'Nombre del Subgrupo',
      },
      new: {
        title: 'Nueva Llegada de Bien',
      },
      view: {
        title: 'Ver Llegada de Bien',
      },
      importer: {
        title: 'Importar Llegadas de Bien',
        fileName: 'llegadaBien_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    goodsSales: {
      name: 'ventaBien',
      label: 'Ventas de Bien',
      menu: 'Ventas de Bien',
      exporterFileName: 'ventas_bien_exportar',
      list: {
        menu: 'Ventas de Bien',
        title: 'Ventas de Bien',
      },
      create: {
        success: 'Venta de bien guardada con éxito',
      },
      update: {
        success: 'Venta de bien guardada con éxito',
      },
      destroy: {
        success: 'Venta de bien eliminada con éxito',
      },
      destroyAll: {
        success: 'Venta(s) de bien eliminada(s) con éxito',
      },
      edit: {
        title: 'Editar Venta de Bien',
      },
      fields: {
        id: 'Id',
        saleDate: 'Fecha de Venta',
        saleDateRange: 'Fecha de Venta',
        buyerName: 'Nombre del Comprador',
        company: 'Empresa',
        year: 'Año',
        quality: 'Calidad',
        rate: 'Tasa',
        quantity: 'Cantidad',
        quantityRange: 'Cantidad',
        subGroup: 'Subgrupo',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nueva Venta de Bien',
      },
      view: {
        title: 'Ver Venta de Bien',
      },
      importer: {
        title: 'Importar Ventas de Bien',
        fileName: 'ventaBien_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    subPartyGoodsArrival: {
      name: 'llegadaBienSubparte',
      label: 'Llegadas de Bien Subparte',
      menu: 'Llegadas de Bien Subparte',
      exporterFileName: 'llegadas_bien_subparte_exportar',
      list: {
        menu: 'Llegadas de Bien Subparte',
        title: 'Llegadas de Bien Subparte',
      },
      create: {
        success: 'Llegada de bien subparte guardada con éxito',
      },
      update: {
        success: 'Llegada de bien subparte guardada con éxito',
      },
      destroy: {
        success: 'Llegada de bien subparte eliminada con éxito',
      },
      destroyAll: {
        success: 'Llegada(s) de bien subparte eliminada(s) con éxito',
      },
      edit: {
        title: 'Editar Llegada de Bien Subparte',
      },
      fields: {
        id: 'Id',
        subSupplierName: 'Nombre Subproveedor',
        item: 'Artículo',
        quality: 'Calidad',
        quantity: 'Cantidad',
        quantityRange: 'Cantidad',
        packaging: 'Empaque',
        quantityLeft: 'Cantidad Restante',
        quantityLeftRange: 'Cantidad Restante',
        year: 'Año',
        company: 'Empresa',
        goodsArrival: 'Llegada de Bien',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nueva Llegada de Bien Subparte',
      },
      view: {
        title: 'Ver Llegada de Bien Subparte',
      },
      importer: {
        title: 'Importar Llegadas de Bien Subparte',
        fileName: 'llegadaBienSubparte_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    masterSelection: {
      name: 'selecciónMaestra',
      label: 'Selecciones Maestras',
      menu: 'Selecciones Maestras',
      exporterFileName: 'selecciones_maestras_exportar',
      list: {
        menu: 'Selecciones Maestras',
        title: 'Selecciones Maestras',
      },
      create: {
        success: 'Selección maestra guardada con éxito',
      },
      update: {
        success: 'Selección maestra guardada con éxito',
      },
      destroy: {
        success: 'Selección maestra eliminada con éxito',
      },
      destroyAll: {
        success: 'Selección(es) maestra(s) eliminada(s) con éxito',
      },
      edit: {
        title: 'Editar Selección Maestra',
      },
      fields: {
        id: 'Id',
        company: 'Empresa',
        year: 'Año',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nueva Selección Maestra',
      },
      view: {
        title: 'Ver Selección Maestra',
      },
      importer: {
        title: 'Importar Selecciones Maestras',
        fileName: 'selecciónMaestra_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    voucherEntry: {
      name: 'asientoComprobante',
      label: 'Asientos de Comprobante',
      menu: 'Asientos de Comprobante',
      exporterFileName: 'asientos_comprobante_exportar',
      list: {
        menu: 'Asientos de Comprobante',
        title: 'Asientos de Comprobante',
      },
      create: {
        success: 'Asiento de comprobante guardado con éxito',
      },
      update: {
        success: 'Asiento de comprobante guardado con éxito',
      },
      destroy: {
        success: 'Asiento de comprobante eliminado con éxito',
      },
      destroyAll: {
        success: 'Asiento(s) de comprobante eliminado(s) con éxito',
      },
      edit: {
        title: 'Editar Asiento de Comprobante',
      },
      fields: {
        id: 'Id',
        voucherEntryType: 'Tipo de Asiento',
        date: 'Fecha',
        dateRange: 'Fecha',
        group: 'Grupo',
        subGroup: 'Subgrupo',
        amount: 'Monto',
        amountRange: 'Monto',
        paymentType: 'Tipo de Pago',
        paymentMode: 'Modo de Pago',
        remarks: 'Observaciones',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {
        voucherEntryType: {
          Payment: 'Pago',
          Received: 'Recibido',
          Journal_Entry: 'Asiento Diario',
        },
        paymentType: { Credit: 'Crédito', Debit: 'Débito' },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nuevo Asiento de Comprobante',
      },
      view: {
        title: 'Ver Asiento de Comprobante',
      },
      importer: {
        title: 'Importar Asientos de Comprobante',
        fileName: 'asientoComprobante_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
    coldStorage: {
      name: 'almacenFrío',
      label: 'Almacenes Fríos',
      menu: 'Almacenes Fríos',
      exporterFileName: 'almacenes_fríos_exportar',
      list: {
        menu: 'Almacenes Fríos',
        title: 'Almacenes Fríos',
      },
      create: {
        success: 'Almacén frío guardado con éxito',
      },
      update: {
        success: 'Almacén frío guardado con éxito',
      },
      destroy: {
        success: 'Almacén frío eliminado con éxito',
      },
      destroyAll: {
        success: 'Almacén(es) frío(s) eliminado(s) con éxito',
      },
      edit: {
        title: 'Editar Almacén Frío',
      },
      fields: {
        id: 'Id',
        company: 'Empresa',
        year: 'Año',
        goodsArrival: 'Llegada de Bien',
        item: 'Artículo',
        storeExpense: 'Gasto de Almacenamiento',
        subGroup: 'Subgrupo',
        sale: 'Venta',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        updatedAtRange: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nuevo Almacén Frío',
      },
      view: {
        title: 'Ver Almacén Frío',
      },
      importer: {
        title: 'Importar Almacenes Fríos',
        fileName: 'almacenFrío_importar_modelo',
        hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio.',
      },
    },
  },

  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crear una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: '¿Olvidaste tu contraseña?',
    signin: 'Iniciar sesión',
    signup: 'Registrarse',
    signout: 'Cerrar sesión',
    alreadyHaveAnAccount: '¿Ya tienes una cuenta? Inicia sesión.',
    social: {
      errors: {
        'auth-invalid-provider': 'Este correo ya está registrado con otro proveedor.',
        'auth-no-email': `El correo asociado a esta cuenta es privado o inexistente.`,
      },
    },
    signinWithAnotherAccount: 'Iniciar sesión con otra cuenta',
    passwordChange: {
      title: 'Cambiar contraseña',
      success: 'Contraseña cambiada con éxito',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message: `Por favor confirma tu correo en <strong>{0}</strong> para continuar.`,
      submit: `Reenviar correo de verificación`,
    },
    emptyPermissions: {
      message: `Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.`,
    },
    passwordResetEmail: {
      message: 'Enviar correo para restablecer contraseña',
      error: `Correo no reconocido`,
    },
    passwordReset: {
      message: 'Restablecer contraseña',
    },
    emailAddressVerificationEmail: {
      error: `Correo no reconocido`,
    },
    verificationEmailSuccess: `Correo de verificación enviado con éxito`,
    passwordResetEmailSuccess: `Correo de restablecimiento de contraseña enviado con éxito`,
    passwordResetSuccess: `Contraseña cambiada con éxito`,
    verifyEmail: {
      success: 'Correo verificado con éxito.',
      message: 'Un momento, tu correo está siendo verificado...',
    },
  },

  tenant: {
    name: 'espacioTrabajo',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear Espacio de trabajo',
      success: 'Espacio de trabajo guardado con éxito',
    },
    update: {
      success: 'Espacio de trabajo guardado con éxito',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado con éxito',
    },
    destroyAll: {
      success: 'Espacio(s) de trabajo eliminado(s) con éxito',
    },
    edit: {
      title: 'Editar Espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del Espacio',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del Espacio',
      plan: 'Plan',
    },
    enumerators: {},
    placeholders: {},
    hints: {},
    new: {
      title: 'Nuevo Espacio de trabajo',
    },
    invitation: {
      view: 'Ver Invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar Invitación',
      decline: 'Rechazar Invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail: 'Aceptar Invitación con este correo',
    },
    select: 'Seleccionar Espacio de trabajo',
    validation: {
      url: 'La URL de tu espacio solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acceso total a todos los recursos',
    },
    custom: {
      label: 'Rol Personalizado',
      description: 'Acceso personalizado a recursos',
    },
  },

  user: {
    invite: 'Invitar',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Correo',
      emails: 'Correo(s)',
      fullName: 'Nombre',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      phoneNumber: 'Teléfono',
      role: 'Rol',
      createdAt: 'Creado en',
      updatedAt: 'Actualizado en',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado en',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation: 'Confirmar nueva contraseña',
    },
    validations: {
      email: 'El correo es inválido',
    },
    disable: 'Deshabilitar',
    enable: 'Habilitar',
    doAddSuccess: 'Usuario(s) guardado(s) con éxito',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportar',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess: 'Usuario(s) eliminado(s) con éxito',
    edit: {
      title: 'Editar Usuario',
    },
    enumerators: {},
    placeholders: {},
    hints: {},
    new: {
      title: 'Nuevo(s) Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint: 'Separa múltiples correos usando la coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'usuarios_importar_modelo',
      hint: 'Las columnas de archivos/imágenes deben ser las URLs de los archivos separadas por espacio. Las relaciones deben ser el ID de los registros referenciados separados por espacio. Los roles deben ser los ids de los roles separados por espacio.',
    },
    errors: {
      userAlreadyExists: 'Ya existe un usuario con este correo',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: `No puedes deshabilitarte a ti mismo`,
      revokingOwnPermission: `No puedes revocar tu propio permiso de administrador`,
    },
  },

  plan: {
    menu: 'Planes',
    title: 'Planes',

    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresarial',
      price: '$50',
    },

    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribirse',
    manage: 'Gestionar Suscripción',
    cancelAtPeriodEnd: 'Este plan se cancelará al final del periodo.',
    somethingWrong: 'Hay un problema con tu suscripción. Ve a gestionar suscripción para más detalles.',
    notPlanUser: `No eres el administrador de esta suscripción.`,
  },

  auditLog: {
    menu: 'Registros de Auditoría',
    title: 'Registros de Auditoría',
    exporterFileName: 'registro_auditoría_exportar',
    entityNamesHint: 'Separa múltiples entidades usando la coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Periodo',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de Entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Correo del Usuario',
    },
  },
  settings: {
    title: 'Configuración',
    menu: 'Configuración',
    save: {
      success: 'Configuración guardada con éxito. La página se recargará en {0} segundos para aplicar los cambios.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Imagen de Fondo',
    },
    colors: {
      default: 'Por defecto',
      cyan: 'Cian',
      'geek-blue': 'Azul Geek',
      gold: 'Oro',
      lime: 'Lima',
      magenta: 'Magenta',
      orange: 'Naranja',
      'polar-green': 'Verde Polar',
      purple: 'Púrpura',
      red: 'Rojo',
      volcano: 'Volcán',
      yellow: 'Amarillo',
    },
  },
  dashboard: {
    menu: 'Panel',
    message: `Esta página usa datos ficticios solo para demostración. Puedes editarla en frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        1: 'Enero',
        2: 'Febrero',
        3: 'Marzo',
        4: 'Abril',
        5: 'Mayo',
        6: 'Junio',
        7: 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Durmiendo',
      designing: 'Diseñando',
      coding: 'Programando',
      cycling: 'Ciclismo',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Volver al inicio',
    403: `Lo sentimos, no tienes acceso a esta página`,
    404: 'Lo sentimos, la página que visitaste no existe',
    500: 'Lo sentimos, el servidor reporta un error',
    429: 'Demasiadas solicitudes. Intenta más tarde.',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },

  preview: {
    error: 'Lo sentimos, esta operación no está permitida en modo de vista previa.',
  },

  validation: {
    mixed: {
      default: (path) => `${path} es inválido`,
      required: (path) => `${path} es obligatorio`,
      oneOf: (path, values) => `${path} debe ser uno de los siguientes valores: ${values}`,
      notOneOf: (path, values) => `${path} no debe ser uno de los siguientes valores: ${values}`,
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length: (path, length) => `${path} debe tener exactamente ${length} caracteres`,
      min: (path, min) => `${path} debe tener al menos ${min} caracteres`,
      max: (path, max) => `${path} debe tener como máximo ${max} caracteres`,
      matches: (path, regex) => `${path} debe coincidir con: "${regex}"`,
      email: (path) => `${path} debe ser un correo válido`,
      url: (path) => `${path} debe ser una URL válida`,
      trim: (path) => `${path} debe ser una cadena sin espacios`,
      lowercase: (path) => `${path} debe estar en minúsculas`,
      uppercase: (path) => `${path} debe estar en mayúsculas`,
      selected: (path) => `${path} debe ser seleccionado`
    },
    number: {
      min: (path, min) => `${path} debe ser mayor o igual a ${min}`,
      max: (path, max) => `${path} debe ser menor o igual a ${max}`,
      lessThan: (path, less) => `${path} debe ser menor que ${less}`,
      moreThan: (path, more) => `${path} debe ser mayor que ${more}`,
      notEqual: (path, notEqual) => `${path} no debe ser igual a ${notEqual}`,
      positive: (path) => `${path} debe ser un número positivo`,
      negative: (path) => `${path} debe ser un número negativo`,
      integer: (path) => `${path} debe ser un número entero`
    },
    date: {
      min: (path, min) => `${path} debe ser posterior a ${min}`,
      max: (path, max) => `${path} debe ser anterior a ${max}`
    },
    boolean: {},
    object: {
      noUnknown: (path) => `${path} no puede tener claves no especificadas en la forma del objeto`,
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} es obligatorio`
          : `${path} debe tener al menos ${min} elementos`,
      max: (path, max) => `${path} debe tener como máximo ${max} elementos`
    },
  },
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size: 'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: `Formato inválido. Debe ser uno de: {0}.`,
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: `{0} importados, {1} pendientes y {2} con error`,
    importedMessage: `Procesados {0} de {1}.`,
    noNavigateAwayMessage: 'No navegues fuera de esta página o la importación se detendrá.',
    completed: {
      success: 'Importación completada. Todas las filas fueron importadas con éxito.',
      someErrors: 'Procesamiento completado, pero algunas filas no pudieron ser importadas.',
      allErrors: 'La importación falló. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar plantilla',
      hint: 'Haz clic o arrastra el archivo a esta área para continuar',
    },
    list: {
      discardConfirm: '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo está vacío',
      invalidFileExcel: 'Solo se permiten archivos excel (.xlsx)',
      invalidFileUpload: 'Archivo inválido. Asegúrate de usar la última versión de la plantilla.',
      importHashRequired: 'El hash de importación es obligatorio',
      importHashExistent: 'Los datos ya han sido importados',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
  },

  imagesViewer: {
    noImage: 'Sin imagen',
  },
 administrator: {
    name: 'administrator',
    label: 'Administración',
    menu: 'Administración',
    title: 'Administración',
  },
  master: {
    name: 'master',
    label: 'Maestro',
    menu: 'Maestro',
    title: 'Maestro',
  },
  purchase: {
    name: 'purchase',
    label: 'Compras',
    menu: 'Compras',
    title: 'Compras',
  },
  sales: {
    name: 'sales',
    label: 'Ventas',
    menu: 'Ventas',
    title: 'Ventas',
  },
  expenses: {
    name: 'expenses',
    label: 'Gastos',
    menu: 'Gastos',
    title: 'Gastos',
  },
  report : {
    name: 'report',
    label: 'Reportes',
    menu: 'Reportes',
    title: 'Reportes',
  },
  
};

export default es;
