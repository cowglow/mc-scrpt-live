import React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { getYears } from '../../lib/get-years'
import addStyling from './events.styles'
import EventList from './event-list/event-list'

const Events = ({ classes, bind, callback }) => {
  const currentTimestamp = Date.now()
  const tabLabels = ['Upcoming Shows', 'Previews Shows']
  const eventYears = getYears(bind, 'eventDate')

  const pastEvents = bind.filter(item => {
    const eventDate = Date.parse(item['eventDate'])
    return eventDate < currentTimestamp
  })

  const upcomingEvents = bind.filter(item => {
    const eventDate = Date.parse(item['eventDate'])
    return eventDate > currentTimestamp
  })

  const modeDefault = upcomingEvents.length > 0 ? 1 : 0

  const [mode, setMode] = React.useState(modeDefault)
  const [yearFilter, setYearFilter] = React.useState(0)

  const filterEvents =
    mode === 0 && modeDefault === 1
      ? upcomingEvents
      : pastEvents.filter(event => {
        const currentEventYear = new Date(event['eventDate']).getFullYear()

        return eventYears[yearFilter] === currentEventYear && event
      })

  const eventList = filterEvents.length <= 0 ? bind : filterEvents

  const handleTabChange = (event, newValue) => {
    callback(tabLabels[newValue])
    setMode(newValue)
  }

  const handleYearFilter = (event, newValue) => {
    setYearFilter(newValue)
  }

  return (
    <React.Fragment>
      {modeDefault === 1 && (
        <Tabs
          value={mode}
          centered={true}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label={'event list tabs'}
          className={classes.tabs}
        >
          <Tab wrapped label={tabLabels[0]} className={classes.tab}/>
          <Tab wrapped label={tabLabels[1]} className={classes.tab}/>
        </Tabs>
      )}

      {(mode === 1 || modeDefault === 0) && (
        <Tabs
          value={yearFilter}
          centered={true}
          onChange={handleYearFilter}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label={'event list tabs'}
          className={classes.tabs}
        >
          {eventYears.map((year, index) => (
            <Tab wrapped key={index} label={year} className={classes.tab}/>
          ))}
        </Tabs>
      )}

      <EventList classes={classes.list} events={eventList}/>
    </React.Fragment>
  );
};

Events.propTypes = {
  classes: PropTypes.object.isRequired,
  bind: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired
}

export default addStyling(Events)
