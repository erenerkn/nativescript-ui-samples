import * as observableModule from "tns-core-modules/data/observable";
// >> calendar-calendar-require
import * as calendarModule from "nativescript-ui-calendar";
// << calendar-calendar-require

// >> events-source-model
export class ViewModel extends observableModule.Observable {
    private _eventTitles: Array<string> = ["Meeting with Jack", "Lunch with Peter", "Planning meeting",
                                            "Go shopping", "Very important meeting", "Another meeting", "Random event"];

    constructor() {
        super();
        this.createEvents();
    }

    public createEvents() {
          // >> calendar-calendar-event-instance
        let events: Array<calendarModule.CalendarEvent> = new Array<calendarModule.CalendarEvent>();
        let j = 1;
        for (let i = 0; i < this._eventTitles.length; i++) {
            const now: Date = new Date();
            const startDate: Date = new Date(now.getFullYear(), now.getMonth(), j * 2);
            const endDate: Date = new Date(now.getFullYear(), now.getMonth(), (j * 2) + (j % 3));
            const event = new calendarModule.CalendarEvent(this._eventTitles[i], startDate, endDate);
            events.push(event);
            j++;
        }
        this.set("calendarEvents", events);
        // << calendar-calendar-event-instance
    }
}
// << events-source-model