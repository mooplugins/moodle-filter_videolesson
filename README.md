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

- Moodle 4.4.12 or later
- Video Lesson Activity (`mod_videolesson`) installed and configured

---

## Installation

1. Download the plugin ZIP file or clone this repository.
2. Rename the extracted folder to `videolesson` if needed.
3. Copy the folder to:   /path/to/moodle/filter/videolesson
4. Log in to Moodle as an administrator.
5. Go to Site administration → Notifications and complete the installation.
6. Go to Site administration → Plugins → Filters → Manage filters.
7. Enable Video Lesson Filter.
8. Ensure Video Lesson Activity (mod_videolesson) is installed and configured.

---

## Documentation

For installation, configuration, and usage guides, see:
https://www.mooplugins.com/docs-category/video-lesson-activity/

---

## Release notes

### Version 1.0.0

Initial public release of Video Lesson Filter for Moodle.

Included features:

- Added Moodle text filter for Video Lesson embeds.
- Added automatic rendering of Video Lesson references in supported Moodle text areas.
- Added support for course section descriptions, labels, activity descriptions, and Page resources.
- Added integration with the Video Lesson activity module (`mod_videolesson`).

---

## License

This plugin is licensed under the GNU GPL v3 or later.

See the LICENSE file for details.

---

Moodle™ is a registered trademark of Moodle Pty Ltd.  
This plugin is not affiliated with or endorsed by Moodle Pty Ltd.
