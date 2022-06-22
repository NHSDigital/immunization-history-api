const moment = require('moment');

const IMMUNIZATION_TARGETS = {
  HPV: 'HPV',
  COVID19: 'COVID19'
};

const SNOMED_PROCEDURE_CODES = {
  CORONAVIRUS_VACCINATION: '90640007'
};

const HTTP_STATUS = {
  BAD_REQUEST: 400,
  OK: 200
};

const SK_DATE_FORMAT = 'YYYY-MM-DD';

const EXTREME_DATES = {
  START: moment('0001-01-01', SK_DATE_FORMAT, true),
  END: moment('9999-12-31', SK_DATE_FORMAT, true)
};

exports.IMMUNIZATION_TARGETS = IMMUNIZATION_TARGETS;
exports.SNOMED_PROCEDURE_CODES = SNOMED_PROCEDURE_CODES;
exports.HTTP_STATUS = HTTP_STATUS;
exports.SK_DATE_FORMAT = SK_DATE_FORMAT;
exports.EXTREME_DATES = EXTREME_DATES;
