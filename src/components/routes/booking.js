import 'date-fns'
import React from 'react'
import { Container } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers'

const Booking = ({ onLoaded }) => {
  const currentDate = new Date()
  const newDate = new Date()

  const [performanceType, setPerformanceType] = React.useState('')
  const [eventType, setEventType] = React.useState('')
  const [eventDate, setEventDate] = React.useState(
    newDate.setDate(currentDate.getDate() + 15)
  )
  const [eventTime, setEventTime] = React.useState()

  setTimeout(() => {
    onLoaded(false)
  })

  return (
    <Container>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <FormControl>
          <TextField
            id="performanceType"
            select
            label="Performance Type"
            value={performanceType}
            onChange={setPerformanceType}
            SelectProps={{
              native: true,
              MenuProps: {
                className: 'working on it'
              }
            }}
            margin="normal"
            variant="filled"
          >
            {[
              'DJ Support (1 -2 hours)',
              'MC Whole (Up to 5 hours)',
              'Moderate Event (English Only)'
            ].map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </TextField>

          <TextField
            id="eventType"
            select
            label="Event Type"
            value={eventType}
            onChange={setEventType}
            SelectProps={{
              native: true,
              MenuProps: {
                className: 'working on it'
              }
            }}
            margin="normal"
            variant="outlined"
          >
            {['Festival/Rave', 'Nightclub', 'Other'].map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </TextField>

          <KeyboardDatePicker
            id="eventDate"
            variant="outlined"
            disableToolbar
            format="MM/dd/yyyy"
            margin="normal"
            label="Date picker inline"
            value={eventDate}
            onChange={setEventDate}
            KeyboardButtonProps={{
              'aria-label': 'Event date'
            }}
          />

          <KeyboardTimePicker
            id="eventTime"
            variant="outlined"
            disableToolbar
            format="HH:MM"
            margin="normal"
            label="Event Time"
            value={eventTime}
            onChange={setEventTime}
            KeyboardButtonProps={{
              'aria-label': 'change time'
            }}
          />

          <TextField
            id="eventName"
            label="Name of Event"
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="eventVenue"
            label="Venue"
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="eventLocationStreetAddress"
            label="Street Address"
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="eventLocationCity"
            label="City"
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="eventLocationState"
            label="State"
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="eventLocationZip"
            label="Zip"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="eventLocationCountry"
            label="Country"
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="eventContactName"
            label="Contact Name"
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="eventContactEmail"
            label="Contact Email"
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="eventContactPhone"
            label="Contact Phone"
            margin="normal"
            variant="outlined"
          />
        </FormControl>
      </MuiPickersUtilsProvider>
    </Container>
  )
}

export default Booking
