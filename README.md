# Hamro Varta TV

> A modern digital media platform for Hamro Varta TV — connecting Sikkim with trusted news, stories, videos, events, and digital journalism.

![Hamro Varta TV](https://img.shields.io/badge/Hamro%20Varta%20TV-Digital%20Media-red)
![Status](https://img.shields.io/badge/Status-In%20Development-orange)
![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20CMS%20%7C%20Mobile-blue)

---

## About Hamro Varta TV

Hamro Varta TV is a Sikkim-based media and news platform focused on delivering local news, stories, events, videos, and community-focused content through a modern digital ecosystem.

This project aims to transform Hamro Varta TV from a primarily social-media-driven presence into a structured, professional, and scalable digital media organization.

The platform is designed around three major components:

* Public Website — News, stories, videos, events, categories and organizational information
* Content Management System (CMS) — A centralized platform for journalists and administrators to manage digital content
* Mobile Application — A future-facing platform for readers and viewers to consume Hamro Varta TV content on mobile devices

---

## Project Vision

The goal is not simply to build a website.

The goal is to build a digital infrastructure for a modern media house.

```text
Social Media
     |
     v
Digital Presence
     |
     v
Centralized CMS
     |
     v
Website + Mobile App
     |
     v
Structured Digital Media Platform
     |
     v
Scalable Media Organization
```

The platform will allow Hamro Varta TV to own and manage its digital content instead of relying entirely on third-party social media platforms.

---

## Key Objectives

### 1. Establish a Professional Digital Presence

Create a modern media website that represents Hamro Varta TV as a professional news and media organization.

### 2. Centralize Content Management

Provide journalists and administrators with a single CMS to manage:

* News
* Articles
* Breaking news
* Videos
* Images
* Events
* Categories
* Authors
* Advertisements
* Website content

### 3. Improve Operational Efficiency

Reduce dependency on manual publishing workflows and introduce structured content management.

### 4. Build a Scalable Digital Platform

The architecture should support future expansion into:

* Mobile applications
* Digital subscriptions
* Advertising management
* Analytics
* Notifications
* Video platforms
* Community features
* Advanced search
* AI-assisted features

---

## Platform Architecture

The long-term ecosystem is planned around:

```text
                    +----------------------+
                    |     HAMRO VARTA TV   |
                    |     Digital Core     |
                    +----------+-----------+
                               |
                +--------------+--------------+
                |              |              |
                v              v              v
          +----------+   +-----------+   +----------+
          |   CMS    |   |    API    |   | Database |
          +----+-----+   +-----+-----+   +----------+
               |               |
               +-------+-------+
                       |
             +---------+---------+
             |                   |
             v                   v
       +----------+       +-------------+
       |  Website |       | Mobile App  |
       +----------+       +-------------+
```

The CMS acts as the central content and operational layer.

---

## Core CMS Features

### Content Management

The CMS is intended to provide structured management for:

* News articles
* Breaking news
* Featured stories
* Video content
* Image galleries
* Events
* Categories
* Tags
* Authors
* Drafts
* Published content
* Scheduled publishing

### Editorial Workflow

A structured workflow can support:

```text
Draft
  |
  v
Review
  |
  v
Approval
  |
  v
Published
  |
  v
Updated / Archived
```

This provides better control over the publishing process as the organization grows.

---

## User and Role Management

The system is designed to support role-based access.

Example roles:

| Role        | Responsibilities                      |
| ----------- | ------------------------------------- |
| Super Admin | Complete platform control             |
| Admin       | Organization and content management   |
| Editor      | Review and publish content            |
| Journalist  | Create and manage assigned stories    |
| Coordinator | Manage events and operational content |
| Reporter    | Submit news and field reports         |

Permissions can be expanded as operational requirements evolve.

---

## Public Website

The public-facing website is intended to provide:

* Latest news
* Breaking news
* Featured stories
* Local Sikkim news
* Politics
* Business
* Sports
* Culture
* Events
* Videos
* Photo galleries
* Search
* Category pages
* Author pages
* About Hamro Varta TV
* Contact information
* Social media integration

The website should prioritize:

**Speed, readability, trust, mobile responsiveness, and visual storytelling.**

---

## Mobile Application

The mobile application is planned as the next stage of the platform.

Potential features include:

* Latest news
* Breaking news notifications
* Video content
* Categories
* Search
* Bookmarks
* Events
* Push notifications
* Personalized content
* Share functionality

The mobile application will consume content through the centralized backend/API rather than maintaining a separate publishing workflow.

---

## Media and Video

As a television and digital media organization, video is a major part of the platform.

The system is intended to support:

* News videos
* Interviews
* Reports
* Events
* Short-form videos
* YouTube integration
* Video thumbnails
* Video metadata
* Featured video content

---

## Events

Hamro Varta TV can use the platform to manage and promote:

* Media events
* Press conferences
* Public events
* Job fairs
* Community events
* Organizational programs
* Upcoming broadcasts

Events can be displayed across the website and eventually the mobile application.

---

## Analytics and Future Expansion

The platform can eventually provide centralized insights such as:

* Most-read stories
* Trending news
* Video views
* Traffic sources
* Reader engagement
* Popular categories
* Publishing performance
* Content performance

This can help the organization make data-driven editorial decisions.

---

## Security and Access

Security is a core consideration of the platform.

Planned areas include:

* Authentication
* Role-based access control
* Permission management
* Secure API access
* Input validation
* File upload validation
* Audit logging
* Secure database access
* Environment-based configuration

Sensitive credentials and environment variables must never be committed to the repository.

---

## AI-Assisted Features

AI is considered an enhancement to the platform, not the core product.

Potential future applications include:

* Article summarization
* Headline suggestions
* Content recommendations
* Translation assistance
* SEO suggestions
* Content tagging
* Search assistance
* Editorial productivity tools
* Website visitor assistance

The final implementation will depend on business requirements and operational feasibility.

---

## Development

This repository is currently under active development.

The project structure and technology stack may evolve as the platform progresses through:

```text
Research
   |
   v
Product Requirements
   |
   v
UI/UX Design
   |
   v
Frontend Development
   |
   v
Backend Development
   |
   v
CMS Development
   |
   v
Testing
   |
   v
Deployment
   |
   v
Mobile Application
   |
   v
Continuous Improvement
```

---

## Product Documentation

The detailed product requirements are maintained in:

**[HAMRO_VARTA_CMS_PRD.md](./HAMRO_VARTA_CMS_PRD.md)**

The PRD contains the detailed requirements, workflows, modules, user roles, and functional expectations for the CMS.

---

## Project Structure

```text
hamro-varta-tv/
|
├── README.md
├── HAMRO_VARTA_CMS_PRD.md
|
├── cms/            Node/Express CMS + content API (admin panel at /admin)
|
├── website/         Public news website — Vite + React + TypeScript
|
└── mobile-app/      Reader/viewer app — Expo + React Native
```

Each folder has its own README with setup instructions. `website` and
`mobile-app` are both clients of `cms` — one CMS, one API, every
platform, per the PRD's core principle.

## Quick Start (local demo)

```bash
# 1. CMS + API (http://localhost:4000, admin at /admin)
cd cms && npm install && node index.js

# 2. Website (http://localhost:5173) — in a second terminal
cd website && npm install && npm run dev

# 3. Mobile app — in a third terminal
cd mobile-app && npm install && npx expo start
```

This is a Phase 1 demo build: JSON-file storage, no authentication yet,
and dashboard audience/revenue/social numbers are clearly-labelled
placeholders. See each folder's README and the PRD's roadmap for the
production upgrade path (real database, auth/RBAC, YouTube/Facebook API
integration, analytics pipeline).

---

## Development Principles

### User First

The platform should be easy to use for both readers and internal staff.

### Mobile First

A significant portion of the audience will access the platform through mobile devices.

### Performance

Pages should load quickly even under limited network conditions.

### Scalability

The architecture should support future growth without requiring a complete rebuild.

### Maintainability

Code should remain understandable and maintainable as the team and product grow.

### Security

User accounts, organizational data, and publishing systems must be protected.

### Editorial Control

The organization should have complete ownership and control over its published digital content.

---

## Roadmap

### Phase 1 — Foundation

* [x] Product requirement documentation
* [ ] UI/UX design
* [x] Database design *(demo: JSON-file store; real DB design pending)*
* [x] Backend foundation *(demo: Node/Express API)*
* [ ] Authentication
* [x] CMS foundation *(demo build in `cms/`)*

### Phase 2 — CMS

* [x] Dashboard *(demo data for audience/revenue/social)*
* [ ] User management (real accounts)
* [x] Role and permissions *(demo: client-side role switcher, not real auth)*
* [x] News management *(with editorial workflow: draft → review → published)*
* [x] Category management
* [x] Author management *(basic employee directory)*
* [ ] Media management (upload pipeline)
* [x] Video management *(metadata only, no transcoding)*
* [x] Event management
* [x] Publishing workflow *(status field + breaking-news + audit log)*

### Phase 3 — Public Website

* [x] Homepage
* [x] News pages
* [x] Category pages
* [x] Video pages
* [ ] Event pages
* [ ] Search
* [x] Responsive design
* [ ] SEO optimization

### Phase 4 — Mobile Application

* [x] App shell (Expo/React Native)
* [ ] Android release build
* [ ] iOS release build
* [ ] Push notifications
* [ ] Content synchronization with `cms`
* [ ] User personalization

### Phase 5 — Advanced Platform

* [ ] Analytics
* [ ] Advertising management
* [ ] Advanced search
* [ ] AI-assisted features
* [ ] Content recommendations
* [ ] Digital subscriptions
* [ ] Advanced notifications

---

## Long-Term Vision

Hamro Varta TV is envisioned to evolve from a social-media presence into a complete digital media ecosystem.

```text
                 HAMRO VARTA TV
                       |
        +--------------+--------------+
        |              |              |
     Website          CMS        Mobile App
        |              |              |
        +--------------+--------------+
                       |
                Central Platform
                       |
        +--------------+--------------+
        |              |              |
      News           Video          Events
        |              |              |
        +--------------+--------------+
                       |
                Audience + Data
                       |
                 Digital Growth
```

The objective is to create the digital foundation required for Hamro Varta TV to operate as a modern, structured, and scalable media organization.

---

## About

**Hamro Varta TV**
Sikkim, India

Digital News, Media, Stories, Events, and Community.

---

## License

This project is proprietary software developed for Hamro Varta TV.

Unauthorized reproduction, redistribution, or commercial use of this repository or its contents is prohibited unless explicitly authorized by the project owner.

---

## Project Status

**Under Active Development**

The platform is currently being designed and developed. Features, architecture, and implementation details may change as the product evolves.
