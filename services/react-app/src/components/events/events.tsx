import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { getYears } from '../../lib/get-years'
import addStyling from './events.styles'
import EventList from './event-list/event-list'

interface EventsProps {
  classes: any;
  bind: any;
  callback: any;
}

const Events:React.FC<EventsProps> = ({ classes, bind, callback }) => {
  const currentTimestamp = Date.now()
  const tabLabels = ['Upcoming Shows', 'Previews Shows']
  const eventYears = getYears(bind, 'eventDate')

  const pastEvents = bind.filter((item:any) => {
    const eventDate = Date.parse(item['eventDate'])
    return eventDate < currentTimestamp
  })

  const upcomingEvents = bind.filter((item:any) => {
    const eventDate = Date.parse(item['eventDate'])
    return eventDate > currentTimestamp
  })

  const modeDefault = upcomingEvents.length > 0 ? 1 : 0

  const [mode, setMode] = React.useState(modeDefault)
  const [yearFilter, setYearFilter] = React.useState(0)

  const filterEvents =
    mode === 0 && modeDefault === 1
      ? upcomingEvents
      : pastEvents.filter((event:any) => {
        const currentEventYear = new Date(event['eventDate']).getFullYear()

        return eventYears[yearFilter] === currentEventYear && event
      })

  const eventList = filterEvents.length <= 0 ? bind : filterEvents

  const handleTabChange = (event:any, newValue:any) => {
    callback(tabLabels[newValue])
    setMode(newValue)
  }

  const handleYearFilter = (event:any, newValue:any) => {
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
          {eventYears.map((year:any, index:any) => (
            <>
            <pre>{JSON.stringify(year)}</pre>
            <Tab wrapped key={index} label={year} className={classes.tab}/>
            </>
          ))}
        </Tabs>
      )}

      <EventList classes={classes.list} events={eventList}/>
    </React.Fragment>
  );
};

export default addStyling(Events)
