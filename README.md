# Parent Dashboard

A React and Tailwind CSS front-end prototype for a school parent portal.

## Overview

Parent Dashboard is a single-page UI built with React and Vite that lays out a "Parent's Dashboard" landing screen for a school platform. The page combines a collapsible sidebar, a header with a search bar and profile panel, and a responsive grid of dashboard cards (homework, attendance, upcoming events, academic calendar, performance metrics, behavioral insights, health and wellness, and notices).

The project is a front-end UI scaffold rather than a complete application: there is no backend, API, or data layer. Most cards currently render only a title inside a styled container, and the interactive pieces are limited to the sidebar toggle, the profile dropdown, and the embedded calendar widget.

## Features

- Collapsible sidebar navigation built with `react-icons`, toggled between icon-only and expanded states via local component state.
- Header with a search input and a toggleable profile panel that displays a profile picture and name.
- Responsive dashboard grid (1 column on mobile, up to 4 columns on larger screens) composed with Tailwind's grid and `col-span` utilities.
- Interactive academic calendar card built with `react-calendar`, where selecting a date updates component state.
- Dedicated cards for Homework, Upcoming Events, Attendance, Performance Metrics, Behavioral Insights, Health and Wellness, and Notices, each isolated as its own component under `src/components`.

## Tech Stack

**Frontend:** React 18, Vite 5, Tailwind CSS 3 (PostCSS + Autoprefixer), `react-icons`, `react-calendar`

**Tooling:** ESLint 9 with the React, React Hooks, and React Refresh plugins

The dependency list also includes `@fullcalendar/react` (with the `daygrid`, `timegrid`, and `interaction` plugins) and `dayjs`. Neither is used by any active component: the FullCalendar setup exists only as a commented-out alternative inside `AcademicCalendarCard.jsx`, and `dayjs` has no references anywhere in `src`.

## Architecture

The app has a single-page, component-tree architecture with no routing or global state library:

- `main.jsx` mounts the root component in `StrictMode`.
- `App.jsx` (exported as `Parent`) defines the page layout — a fixed `Sidebar`, a `Header`, and a CSS grid of dashboard cards.
- Each card in `src/components` is a self-contained component. State (sidebar open/closed, profile panel open/closed, selected calendar date) is local to the component that owns it via `useState`; there is no shared context or state management library.

## Project Structure

```
parentDashboard/
├── index.html                  # Vite entry HTML
├── src/
│   ├── main.jsx                 # React root render
│   ├── App.jsx                  # Page layout composing Sidebar, Header, and cards
│   ├── index.css                # Tailwind directives
│   ├── App.css                  # Unused, currently empty
│   ├── assets/
│   │   └── react.svg
│   └── components/
│       ├── Sidebar.jsx              # Collapsible nav sidebar
│       ├── Header.jsx               # Search bar + profile dropdown
│       ├── HomeworkCard.jsx
│       ├── EventCard.jsx
│       ├── AttendanceCard.jsx
│       ├── PerformanceMetricsCard.jsx  # internal component name is ExamCard
│       ├── AcademicCalendarCard.jsx     # react-calendar based calendar
│       ├── BehaviorInsightsCard.jsx
│       ├── HealthWellnessCard.jsx
│       ├── CustomizationCard.jsx        # imported in App.jsx but not currently rendered
│       └── NoticeCard.jsx
├── public/
│   └── vite.svg
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── eslint.config.js
```

## Getting Started

### Prerequisites

- Node.js and npm

### Run locally

```bash
npm install
npm run dev
```

This starts the Vite development server (default: http://localhost:5173).

### Build

```bash
npm run build
npm run preview
```

`npm run build` outputs a production bundle via Vite; `npm run preview` serves that build locally.

### Lint

```bash
npm run lint
```

No environment variables are read anywhere in the source, so no `.env` setup is required.

## Usage

After starting the dev server, the app renders the parent dashboard layout:

- Click the menu icon in the sidebar to expand it and reveal labeled navigation items (Home, Courses, Exam, Classroom, Games, Groups, Consultants, Settings).
- Click the profile picture in the header to open a panel with the profile name and a logout button (the button has no attached handler).
- Use the Academic Calendar card to select a date; the selected date is tracked in component state.

## Design Decisions

- **Tailwind-only styling.** All components use Tailwind utility classes directly; `App.css` is intentionally left empty rather than mixing in custom CSS.
- **react-calendar over FullCalendar.** `AcademicCalendarCard.jsx` retains a full FullCalendar implementation as a commented-out block but ships with `react-calendar` instead, favoring its simpler API for a basic date-picker calendar.
- **Per-component local state.** The sidebar, header profile panel, and calendar each manage their own `useState` rather than sharing a layout context, keeping components independent and easy to reason about in isolation.

## Future Improvements

- Connect the dashboard cards (Homework, Attendance, Performance Metrics, Behavioral Insights, Health and Wellness, Notices) to real data sources; each currently renders only a static title.
- Remove the unused `@fullcalendar/*` packages and `dayjs` dependency, or finish the FullCalendar integration that currently exists only as commented-out code in `AcademicCalendarCard.jsx`.
- Render or remove `CustomizationCard`, which is imported in `App.jsx` but commented out of the actual layout.
- Replace the hardcoded profile name and hotlinked placeholder avatar images (`via.placeholder.com`, `freepik.com`) with real profile data and locally hosted assets.
- Wire up the header search input, which currently has no state or filtering behavior attached.
