# moodle-filter_videolesson

# Video Lesson Filter for Moodle™

The Video Lesson Filter is a Moodle™ text filter that enables automatic rendering of Video Lesson content inside Moodle text areas.

It works in conjunction with the Video Lesson activity module (`mod_videolesson`) to display embedded video content in course sections, labels, and activity descriptions.

---

## Purpose

This plugin allows Video Lesson content to be rendered dynamically wherever supported within Moodle’s text filtering system.

Without this filter enabled, embedded Video Lesson references may not render correctly inside formatted text areas.

---

## Features

- Automatic rendering of Video Lesson embeds
- Compatible with Moodle’s text filtering system
- Works across:
  - Course section descriptions
  - Labels
  - Activity descriptions
  - Page resources
- Lightweight and Moodle-native implementation

---

## Requirements

- Moodle 4.1 or higher (adjust if needed)
- `mod_videolesson` installed

---

## Installation

1. Download or clone this repository.
2. Place the folder into:

/filter/videolesson


3. Visit:
Site administration → Notifications


4. Enable the filter under:
Site administration → Plugins → Filters → Manage filters


---

## Dependency

This plugin requires:

- `mod_videolesson`

Ensure the activity module is installed and configured before enabling this filter.

---

## Versioning

Releases follow Moodle versioning conventions.

Example:
v1.0.0 – Initial public release


---

## License

This plugin is licensed under the GNU GPL v3 or later.

See the LICENSE file for details.

---

Moodle™ is a registered trademark of Moodle Pty Ltd.  
This plugin is not affiliated with or endorsed by Moodle Pty Ltd.
