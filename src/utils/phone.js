export const COUNTRY_CODES = [
  { code: "+962", label: "+962 Jordan", digits: 9 },
  { code: "+970", label: "+970 Palestine", digits: 9 },
  { code: "+966", label: "+966 Saudi Arabia", digits: 9 },
  { code: "+971", label: "+971 UAE", digits: 9 },
  { code: "+965", label: "+965 Kuwait", digits: 8 },
  { code: "+973", label: "+973 Bahrain", digits: 8 },
  { code: "+974", label: "+974 Qatar", digits: 8 },
  { code: "+968", label: "+968 Oman", digits: 8 },
  { code: "+20", label: "+20 Egypt", digits: 10 },
  { code: "+216", label: "+216 Tunisia", digits: 8 },
  { code: "+212", label: "+212 Morocco", digits: 9 },
  { code: "+213", label: "+213 Algeria", digits: 9 },
  { code: "+961", label: "+961 Lebanon", digits: 8 },
  { code: "+963", label: "+963 Syria", digits: 9 },
  { code: "+964", label: "+964 Iraq", digits: 10 },
  { code: "+1", label: "+1 US/Canada", digits: 10 },
  { code: "+44", label: "+44 UK", digits: 10 },
  { code: "+49", label: "+49 Germany", digits: 10 },
  { code: "+33", label: "+33 France", digits: 9 },
  { code: "+90", label: "+90 Turkey", digits: 10 },
];

export function phoneDigitsFor(code) {
  return COUNTRY_CODES.find((c) => c.code === code)?.digits ?? 9;
}