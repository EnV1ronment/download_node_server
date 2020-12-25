export enum EDirection {
  CHARGE = 1,
  DISCHARGE = 2,
  BOTHWAY = 3
}

export enum EDeviceType {
  PCS = 'ConverterInverter',
  TRANSFORMER = 'Transformer',
  BATTERYUNIT = 'StorageBattery'
}

export enum EDataType {
  temperature = 1,
  voltage,
  SOC
}

export enum EWorkStatus {
  RUNNING = 1,
  OFFLINE,
  MAINTENANCE
}

export enum EAggregationType {
  INTERSECTION = 1
}

export enum ETerminalType {
  WEB = 1,
  APP = 2
}

export enum EStationType {
  STORAGE = 'Storage',
  PHOTOVOLTAIC = 'Photovoltaic',
  WINDPOWER = 'WindPower',
  INTEGRATIONWINDSTORAGE = 'IntegrationWindStorage',
  INTEGRATIONPHOTOVOLTAICSTORAGE = 'IntegrationPhotovoltaicStorage'
}

export enum EEnergyUnitType {
  STORAGE = 'Storage',
  PHOTOVOLTAIC = 'Photovoltaic',
  WINDPOWER = 'WindPower',
  DIESELPOWERGENERATION = 'DieselPowerGeneration',
  SOLARSTORAGE = 'SolarStorage'
}

export enum ETimeFormatType {
  YEAR = 'YYYY',
  MONTH = 'YYYY-MM',
  DAY = 'YYYY-MM-DD',
  HOUR = 'YYYY-MM-DD HH',
  MINUTE = 'YYYY-MM-DD HH:mm',
  SECOND = 'YYYY-MM-DD HH:mm:ss'
}

export enum EEnergyUnitWorkStatus {
  CHARGE = 'Charge',
  DISCHARGE = 'Discharge',
  STORAGE = 'Storage',
  OFFGRID = 'OffGrid',
  FAULT = 'Fault',
  DEBUG = 'Debug'
}

export enum EMonentTimeType {
  DAYS = 'days',
  MONTHS = 'months',
  YEARS = 'years'
}

export enum EPromiseDataType {
  OBJECT = 'object',
  ARRAY = 'array'
}

export enum ELangeuage {
  ZH = 'zh',
  EN = 'en'
}

export enum ERunStrategyControlType {
  POWERCONTROL = 'PowerControl',
  VOLTAGEANDCURRENT = 'Voltage/CurrentControl'
}

export enum ETimeMomentRelation {
  BEFORE = 'before',
  BETWEEN = 'between',
  AFTER = 'after'
}

export enum EStationStatus {
  ACTIVATE = 'activate',
  CONSTRUCTING = 'constructing',
  DEBUGGING = 'debugging',
  TESTING = 'testing',
  DEACTIVATED = 'deactivated'
}

export enum ERunStrategyControlModel {
  AUTOMATIC = 'Automatic',
  MANUAL = 'Manual'
}

export enum ExcludeBatteryType {
  Cell = 'Cell',
  Pack = 'Pack',
  BatteryCluster = 'BatteryCluster'
}

export enum ETimeZone {
  Shanghai = 'Asia/Shanghai',
  Australia = 'Australia/Queensland'
}