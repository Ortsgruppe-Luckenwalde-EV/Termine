// Event Data Source
// Format: YYYY-MM-DD for date to ensure correct sorting
const termine = [
    // Februar
    {
        date: '2026-02-19',
        time: '18:00 Uhr',
        title: 'Jahreshauptversammlung (Kassierung ab 18:00)',
        location: 'Gaststätte Royal Mahal'
    },
    {
        date: '2026-02-28',
        time: '09:00 Uhr',
        title: 'Arbeitseinsatz KAV (Forellenangler)',
        location: 'Holbeck Feuerwehr'
    },
    // März
    {
        date: '2026-03-05',
        time: '19:00 Uhr',
        title: 'Vorstandssitzung',
        location: 'Gaststätte Royal Mahal'
    },
    {
        date: '2026-03-21',
        time: '09:00 Uhr',
        title: 'Arbeitseinsatz',
        location: 'Dobbrikow Vereinsbungalow'
    },
    // April
    {
        date: '2026-04-11',
        time: '09:00 Uhr',
        title: 'Arbeitseinsatz',
        location: 'Dobbrikow Vereinsbungalow'
    },
    {
        date: '2026-04-25',
        time: '10:00 Uhr',
        title: 'Anangeln (Anmeldung bis 9:30)',
        location: 'Dobbrikow Vereinsbungalow'
    },
    // Juni
    {
        date: '2026-06-14',
        time: '09:00 Uhr',
        title: 'Arbeitseinsatz KAV',
        location: 'Dobbrikow Feuerwehr'
    },
    // Juli
    {
        date: '2026-07-11',
        time: '10:00 Uhr',
        title: 'Sommerfest mit Angehörigen (Anmeldung bis 10:00)',
        location: 'Dobbrikow am Vereinsbungalow'
    },
    // September
    {
        date: '2026-09-03',
        time: '19:00 Uhr',
        title: 'Vorstandssitzung',
        location: 'Gaststätte Royal Mahal'
    },
    {
        date: '2026-09-12',
        time: '10:00 Uhr',
        title: 'Abangeln (Anmeldung bis 9:30)',
        location: 'Dobbrikow Vereinsbungalow'
    },
    // Oktober
    {
        date: '2026-10-01',
        time: '19:00 Uhr',
        title: 'Vorstandssitzung',
        location: 'Gaststätte Royal Mahal'
    },
    {
        date: '2026-10-03',
        time: '10:00 Uhr',
        title: 'Oktoberfest (Kassler & Eisbein)',
        location: 'Dobbrikow Vereinsbungalow'
    },
    {
        date: '2026-10-17',
        time: '09:00 Uhr',
        title: 'Arbeitseinsatz',
        location: 'Dobbrikow Vereinsbungalow'
    },
    // November
    {
        date: '2026-11-07',
        time: '09:00 Uhr',
        title: 'Arbeitseinsatz',
        location: 'Dobbrikow Vereinsbungalow'
    },
    // Dezember
    {
        date: '2026-12-03',
        time: '19:00 Uhr',
        title: 'Vorstandssitzung',
        location: 'Gaststätte Royal Mahal'
    },
    {
        date: '2026-12-10',
        time: '18:00 Uhr',
        title: 'Mitgliederversammlung (Kassierung)',
        location: 'Gaststätte Royal Mahal'
    }
];

// Sortieren nach Datum
termine.sort((a, b) => new Date(a.date) - new Date(b.date));
