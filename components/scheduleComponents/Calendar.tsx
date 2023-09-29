import { CSSProperties, useMemo, useState } from 'react';

function Toolbar({ date, setDate }) {
  const today = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto' })
    .format(0, 'day')
    .toLocaleUpperCase();
  /// increment a date by a number of days
  const incrementDate = (offset: number) =>
    setDate(new Date(date.setDate(date.getDate() + offset)));
  /// format a date as YYYY-MM-DD for the input field
  const dateValue = useMemo(() => date.toISOString().split('T', 1)[0], [date]); // YYYY-MM-DD

  return (
    <div className="p-2 md:px-5 min-h-16 flex flex-row justify-between items-center w-full max-w-sm text-blue-700">
      <button
        className="py-2 px-3 border rounded border-blue-400"
        onClick={() => setDate(new Date())}
      >
        {today}
      </button>
      {/* TODO: use icons rather than characters for this */}
      <button
        className="text-3xl"
        onClick={() => {
          incrementDate(-1);
          console.log(date);
        }}
      >
        &lsaquo;
      </button>
      <button className="text-3xl" onClick={() => incrementDate(+1)}>
        &rsaquo;
      </button>
      <input
        className="rounded"
        value={dateValue}
        onChange={(e) => {
          setDate(e.target.valueAsDate);
          console.log(e.target.valueAsDate);
        }}
        type="date"
      />
    </div>
  );
}

function DateLine({ date }) {
  const isToday = useMemo(
    () => date.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0),
    [date],
  );

  return (
    <div className="py-2 px-4">
      {/* text should be blue if current day is selected */}
      <div className={isToday ? 'text-blue-700' : ''}>
        <div>
          {/* day of week */}
          {date.toLocaleDateString(undefined, { weekday: 'short' })}
        </div>
        <div className="text-4xl pl-3">
          {/* day of month */}
          {date.toLocaleDateString(undefined, { day: 'numeric' })}
        </div>
      </div>
    </div>
  );
}

// TODO: support start/end time
function CalendarGrid({
  increment,
  tracks,
  events,
}: {
  increment: number;
  tracks: string[];
  events: ScheduleEvent[];
}) {
  const minutesInDay = 60 * 24;
  const labeledSections = useMemo(() => minutesInDay / increment, [increment]);

  // create events as list of divs
  const Events = useMemo(
    () =>
      events.map((event) => {
        const start = new Date(event.startDate).getMinutes();
        const end = new Date(event.endDate).getMinutes();
        // compute row start from start time
        const rowStart = start + 1;
        // compute row end from end time (or go to the end of the schedule if the event ends on the next day)
        const rowEnd = start < end ? end : -1;
        // compute column from track
        const col = tracks.indexOf(event.track) + 1 + 1;

        return (
          <div
            key={event.Event}
            style={{ gridRowStart: rowStart, gridRowEnd: rowEnd, gridColumn: col } as CSSProperties}
            className="bg-blue-200 rounded-md p-2 z-10"
          >
            <div>{event.title}</div>
            {event.type ? <div>Type: {event.type}</div> : null}
            <div>Location: {event.location}</div>
          </div>
        );
      }),
    [tracks, events],
  );

  // create cells as list of divs
  const Cells = useMemo(
    () =>
      Array.from({ length: labeledSections * tracks.length }, (_, i) => {
        // compute row and column from index number of cell
        const row = Math.floor(i / tracks.length);
        const col = i % tracks.length;
        return (
          <div
            key={i}
            // provide row and column number to css
            style={
              {
                gridRowStart: row * increment + 1,
                gridRowEnd: row * increment + increment + 1,
                gridColumn: col + 1 + 1,
              } as CSSProperties
            }
            className="border hover:bg-gray-100"
          />
        );
      }),
    [increment, tracks],
  );

  // label every increment with the correct time
  const Labels = useMemo(
    () =>
      Array.from({ length: labeledSections }, (_, i) => {
        const time = new Date();
        time.setHours(0, i * increment, 0, 0);
        return (
          <div
            style={
              {
                gridRowStart: i * increment + 1,
                gridRowEnd: i * increment + increment,
                gridColumn: 1,
              } as CSSProperties
            }
            className="text-right px-1 text-slate-500"
          >
            {time.toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric' })}
          </div>
        );
      }),
    [labeledSections, increment],
  );

  return (
    // provide span length to all children from parent
    <div className="w-full overflow-x-auto grid gap-0 grid-auto-cols grid-cols-[max-content] grid-rows-[repeat(calc(60_*_24),_1.6px)]">
      {/* event cells */}
      {Events}
      {/* background cells */}
      {Cells}
      {/* time labels */}
      {Labels}
    </div>
  );
}

export default function Calendar(props: { events: ScheduleEvent[]; tracks: string[] }) {
  const [date, setDate] = useState(new Date()); // default to today's date
  // only show days that start or end on the current day
  const daysEvents = useMemo(
    () =>
      props.events.filter(
        (event) =>
          new Date(event.startDate).setHours(0, 0, 0, 0) === date.setHours(0, 0, 0, 0) ||
          new Date(event.endDate).setHours(0, 0, 0, 0) === date.setHours(0, 0, 0, 0),
      ),
    [date, props.events],
  );
  return (
    <div>
      <Toolbar date={date} setDate={setDate} />
      <div>
        <div>
          <DateLine date={date} />
          <CalendarGrid increment={30} tracks={props.tracks} events={daysEvents} />
        </div>
      </div>
    </div>
  );
}
