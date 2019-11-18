export const getApiUri = () => {
  const DEV_EVENTS_RESOURCE = 'fixture/dev_events-fixture.json'
  const EVENTS_RESOURCE =
    'https://' + process.env.GAS_URL + '/' + process.env.GAS_PRODUCT + '/exec'

  return document.domain === 'localhost'
    ? DEV_EVENTS_RESOURCE
    : EVENTS_RESOURCE
}
