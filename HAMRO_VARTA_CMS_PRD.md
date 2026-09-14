# Hamro Varta Television — Digital Media Platform PRD

**Product:** Hamro Varta Television Digital Platform  
**Organization:** Hamro Varta Television  
**Region:** Sikkim, India  
**Product Type:** Media CMS + News Website + Mobile Application + Business/Operations Platform  
**Document Version:** 1.0  
**Status:** Ready for Development

---

## 1. Executive Summary

Hamro Varta Television is a Sikkim-based media house with an established presence across television and digital platforms, including YouTube and Facebook.

The objective of this project is to build a centralized digital ecosystem for Hamro Varta that allows the organization to manage news, articles, videos, breaking news, live television, events, photo galleries, advertisements, social distribution, journalists, employees, users, analytics, and revenue-related information from a single CMS.

The CMS will act as the **central newsroom and digital publishing platform**.

The core principle is:

> **One newsroom. One CMS. Every platform.**

---

# 2. Product Vision

The platform should allow Hamro Varta employees to create content once and control where it is published.

```text
                    HAMRO VARTA CMS
                           |
           +---------------+----------------+
           |               |                |
       WEBSITE         MOBILE APP       SOCIAL MEDIA
           |               |                |
         NEWS          NOTIFICATIONS       VIDEO
        ARTICLES      PERSONALIZATION      LIVE TV
        VIDEOS       BOOKMARKS            SHORTS
        EVENTS       USER FEEDS           PODCAST
```

The CMS should become the **single source of truth** for Hamro Varta's digital content.

---

# 3. Business Objectives

## 3.1 Build Hamro Varta's Own Digital Identity

Reduce dependency on Facebook and YouTube as the primary destinations for the audience.

The website and mobile app should become owned digital properties.

## 3.2 Centralize Content Management

Journalists should be able to manage website, mobile, video, breaking news, and distribution from one system.

## 3.3 Increase Audience

Build capabilities for:

- SEO
- Push notifications
- Trending news
- Personalized feeds
- Video consumption
- Live TV
- Breaking news
- Social sharing
- District-based content

## 3.4 Build Revenue Channels

Support:

- Display advertisements
- Sponsored articles
- Sponsored videos
- Campaign management
- Advertiser management
- Promoted content
- Event sponsorships

## 3.5 Improve Operational Visibility

Management should be able to see:

- Content production
- Journalist performance
- Website traffic
- App users
- Video performance
- Social performance
- Advertising performance
- Revenue
- Employee activity

---

# 4. Target Users

## 4.1 Public Audience

Website and mobile-app users consuming:

- News
- Videos
- Live TV
- Events
- Interviews
- Photo galleries

## 4.2 Super Admin

Complete access to:

- Users
- Employees
- Roles
- Permissions
- Content
- Settings
- Analytics
- Advertisements
- Categories
- Integrations

## 4.3 Editor-in-Chief

Responsible for final editorial decisions.

Can:

- Create articles
- Edit articles
- Review submissions
- Approve articles
- Reject articles
- Schedule publications
- Manage breaking news
- Manage homepage
- Manage featured content

## 4.4 Editor

Can:

- Create articles
- Edit articles
- Review journalist submissions
- Publish content
- Schedule content

## 4.5 Journalist / Reporter

Can:

- Create articles
- Upload images
- Upload videos
- Submit stories
- Save drafts
- View own content
- Track publication status

Direct publishing should be permission-controlled.

## 4.6 Video Team

Can manage:

- Videos
- YouTube links
- Video uploads
- Live streams
- Shorts
- Video thumbnails
- Video categories

## 4.7 Social Media Manager

Can:

- View content
- Create social posts
- Schedule social posts
- Connect social platforms
- Publish to social platforms
- Track social performance

## 4.8 Advertisement Manager

Can manage:

- Advertisers
- Campaigns
- Banner ads
- Sponsored content
- Campaign dates
- Impressions
- Clicks
- Revenue

## 4.9 HR / Employee Manager

Can manage:

- Employees
- Departments
- Designations
- Attendance
- Employee status
- Joining dates
- Employee documents

## 4.10 Analyst / Management

Read-only access to:

- Analytics
- Reports
- Revenue
- Content performance
- Employee performance

---

# 5. Core Architecture

```text
                    +----------------------+
                    |      HAMRO VARTA     |
                    |        CMS           |
                    +----------+-----------+
                               |
            +------------------+------------------+
            |                  |                  |
            v                  v                  v
       WEB PLATFORM       MOBILE API        SOCIAL APIs
            |                  |                  |
            v                  v                  v
       NEWS WEBSITE       ANDROID/iOS       FB/YT/IG/etc.
```

The CMS should expose APIs to both the website and mobile application.

---

# 6. CMS Dashboard

The dashboard is the first screen after login.

## 6.1 Content KPIs

Display:

- Total articles
- Published articles
- Draft articles
- Pending approval
- Scheduled articles
- Rejected articles
- Published videos
- Live streams

## 6.2 Audience KPIs

Display:

- Website visitors
- App users
- New users
- Returning users
- Active users

## 6.3 Content Performance

Display:

- Most viewed article
- Most shared article
- Most commented article
- Most viewed video
- Trending stories

## 6.4 Social Metrics

Where APIs permit:

- YouTube subscribers
- YouTube views
- Facebook followers
- Instagram followers
- Social engagement

## 6.5 Revenue

Display:

- Advertisement revenue
- Active campaigns
- Campaign impressions
- Campaign clicks

---

# 7. News Management

News is the core CMS module.

## 7.1 Create News

Fields:

- Title
- Slug
- Subtitle
- Summary
- Content
- Featured image
- Additional images
- Video
- Author
- Reporter
- Category
- Subcategory
- Location
- District
- Tags
- Language
- SEO title
- SEO description
- SEO keywords
- Publish date
- Expiry date
- Status

---

# 8. Article Workflow

Every article should have a lifecycle.

```text
DRAFT
  |
  v
SUBMITTED
  |
  v
UNDER REVIEW
  |
  +-------> REJECTED
  |             |
  |             v
  |          REVISION
  |             |
  |             +-----> SUBMITTED
  |
  v
APPROVED
  |
  v
SCHEDULED
  |
  v
PUBLISHED
  |
  v
UPDATED / ARCHIVED
```

The system should maintain a complete history of status changes.

---

# 9. Breaking News

Breaking news must be a first-class CMS feature.

Editors should be able to mark an article as:

**BREAKING NEWS**

The system should support:

- Breaking-news ticker
- Homepage highlight
- Mobile push notification
- Website alert
- Mobile-app alert
- Breaking-news archive
- Priority level
- Start/end time

Example:

```text
🔴 BREAKING

Major landslide reported in North Sikkim
```

---

# 10. Categories

Initial categories:

- Sikkim
- Gangtok
- East Sikkim
- West Sikkim
- North Sikkim
- South Sikkim
- Politics
- Crime
- Education
- Business
- Sports
- Entertainment
- Health
- Tourism
- Weather
- Government
- Jobs
- Agriculture
- Technology
- National
- International

Categories must be manageable from the CMS.

---

# 11. District-Based News

District-based content should be a major feature.

Initial districts:

- Gangtok
- Mangan
- Namchi
- Gyalshing
- Pakyong
- Soreng

Articles should support:

**District → Location → Locality**

This allows future features such as:

> News from my district.

---

# 12. Multilingual CMS

The system should support multilingual content from day one.

Initial languages:

- Nepali
- English

Future support:

- Hindi
- Additional local languages

Article structure:

```text
Article
 ├── English version
 └── Nepali version
```

Translated versions should remain linked.

---

# 13. Website Content Management

CMS administrators should be able to control the website without developer intervention.

Manage:

- Homepage
- Header
- Footer
- Navigation
- Categories
- Trending sections
- Featured stories
- Breaking-news ticker
- Advertisements
- Static pages
- Banners
- Widgets

---

# 14. Homepage Builder

Admin should be able to arrange homepage sections using drag-and-drop.

Example:

```text
BREAKING NEWS

HERO NEWS
├── Main story
├── Story 2
└── Story 3

LATEST NEWS

SIKKIM NEWS

POLITICS

SPORTS

ENTERTAINMENT

VIDEOS

LIVE TV

TRENDING

MOST READ
```

Admin should be able to:

- Add section
- Remove section
- Reorder section
- Select category
- Select articles
- Select videos
- Schedule sections

---

# 15. Content Distribution Controls

Each content item should have independent distribution controls.

```text
Publish to:

☑ Website
☑ Mobile App
☑ Homepage
☑ Breaking News

Social:
☐ Facebook
☐ Instagram
☐ X
☐ YouTube
☐ Telegram
```

This allows website-only, app-only, or multi-platform publishing.

---

# 16. Video Management

Video module should support:

- YouTube videos
- YouTube Shorts
- Uploaded videos
- Live streams
- Video thumbnails
- Video categories
- Video descriptions

Each video should contain:

- Title
- Description
- Thumbnail
- YouTube URL
- Category
- Reporter
- Published date
- Tags
- Program/show
- Episode information where applicable

---

# 17. YouTube Integration

Hamro Varta already has an established YouTube presence.

The CMS should eventually support:

- YouTube channel connection
- Video synchronization
- Video metadata
- Thumbnail retrieval
- View count
- Likes
- Comment count
- Subscriber count
- Video analytics

Potential workflow:

```text
CMS
 |
 +--> Website
 |
 +--> Mobile App
 |
 +--> YouTube
```

All integrations must use official APIs and comply with platform restrictions.

---

# 18. Live TV

Create a dedicated:

**LIVE TV**

page.

Features:

- Live stream player
- Current program
- Program schedule
- Upcoming programs
- Previous programs
- YouTube Live integration
- HLS stream support
- Picture-in-picture where supported

Mobile app should have a prominent **LIVE** entry.

---

# 19. Video-On-Demand

Create a dedicated video library.

Categories:

- News
- Interviews
- Sports
- Entertainment
- Political
- Events
- Special Programs
- Shorts

---

# 20. Programs / Shows

Programs should be reusable entities rather than isolated videos.

Structure:

```text
Program
 ├── Program name
 ├── Description
 ├── Logo
 ├── Host
 ├── Category
 ├── Seasons
 ├── Episodes
 └── Schedule
```

Example:

```text
Sikkim Idol
 ├── Season 1
 ├── Season 2
 └── Season 3
```

---

# 21. Photo Gallery

CMS should support:

- Albums
- Multiple photos
- Captions
- Photographer
- Location
- Date
- Tags

---

# 22. Events

Create an event management module.

Fields:

- Event name
- Description
- Date
- Start time
- End time
- Venue
- Location
- Organizer
- Image
- Registration URL
- Contact
- Status

Future support:

- Event registration
- Ticketing
- Event sponsorship

---

# 23. Search

Website and app should have unified search.

Search:

- Articles
- Videos
- Programs
- Events
- People
- Categories

Filters:

- Date
- Category
- District
- Language
- Content type

---

# 24. Audience User Accounts

Users can optionally create accounts.

Features:

- Registration
- Login
- Google login
- Phone OTP
- Profile
- Saved articles
- Bookmarks
- Reading history
- Notification preferences

---

# 25. Personalized News Feed

Users can select interests:

```text
My Interests

☑ Sikkim
☑ Sports
☑ Politics
☑ Entertainment
☐ Business
```

The app can then provide a personalized:

**My Feed**

---

# 26. Push Notifications

CMS should allow editors to send:

### Breaking News

Immediate notification.

### Normal News

Optional notification.

### Scheduled Notification

Example:

```text
Send tomorrow at 09:00 AM
```

Fields:

- Title
- Message
- Image
- Deep link
- Category
- Schedule
- Target audience

---

# 27. Social Media Integration

Potential integrations:

- Facebook
- Instagram
- YouTube
- X
- WhatsApp
- Telegram

The CMS should provide centralized content distribution where official APIs support the requested operation.

---

# 28. Social Media Scheduler

Social media managers should be able to schedule posts.

Example:

```text
Article Published
       |
       v
Create Social Post
       |
       +--> Facebook
       +--> Instagram
       +--> X
       +--> Telegram
```

Social posts should support:

- Caption
- Image/video
- Link
- Hashtags
- Schedule
- Platform-specific content

---

# 29. Advertisement Management

Advertisement management should be a major business module.

## 29.1 Advertiser

Fields:

- Company name
- Contact person
- Email
- Phone
- Address
- GST details
- Billing details
- Status

## 29.2 Campaign

Fields:

- Campaign name
- Advertiser
- Start date
- End date
- Budget
- Banner
- Target pages
- Target categories
- Device
- Location
- Priority

---

# 30. Advertisement Types

Support:

- Homepage banner
- Article banner
- Sidebar banner
- Mobile banner
- Video advertisement
- Sponsored article
- Sponsored video
- Native advertisement

---

# 31. Advertisement Analytics

Track:

- Impressions
- Clicks
- CTR
- Campaign duration
- Revenue
- Page performance

---

# 32. Employee Management

Employee management should be separate from CMS user management.

Employee fields:

- Employee ID
- Name
- Photo
- Department
- Designation
- Phone
- Email
- Joining date
- Employment status
- Reporting manager
- Location
- Documents

Departments:

- Editorial
- News
- Video
- Photography
- Social Media
- Technical
- Administration
- Advertising
- Finance
- HR

---

# 33. Employee Performance

Management should be able to review performance.

## Journalist Metrics

- Articles submitted
- Articles published
- Articles rejected
- Views generated
- Shares
- Average article performance

## Video Metrics

- Videos uploaded
- Views
- Engagement

Metrics should not be interpreted as a simplistic ranking. Management should be able to configure performance indicators.

---

# 34. Role-Based Access Control

Use granular permissions.

Examples:

```text
ARTICLE_CREATE
ARTICLE_EDIT
ARTICLE_DELETE
ARTICLE_APPROVE
ARTICLE_PUBLISH
ARTICLE_SCHEDULE

VIDEO_CREATE
VIDEO_EDIT
VIDEO_DELETE
VIDEO_PUBLISH

USER_CREATE
USER_EDIT
USER_DELETE

ADVERTISEMENT_CREATE
ADVERTISEMENT_EDIT
ADVERTISEMENT_REPORT
```

Roles should be customizable.

---

# 35. Audit Logs

Every important action must be logged.

Example:

```text
Reporter created article
09:41 AM

Editor edited article
10:02 AM

Editor approved article
10:03 AM

Admin published article
10:05 AM
```

Track:

- User
- Action
- Entity
- Entity ID
- Timestamp
- IP address
- Previous value
- New value

---

# 36. Content Versioning

Every article should maintain revisions.

Example:

```text
Article v1
Article v2
Article v3
Article v4
```

Editors should be able to:

- Compare versions
- Restore a previous version
- See who changed content
- See when it changed

---

# 37. SEO Management

Every article should support:

- SEO title
- Meta description
- Canonical URL
- Keywords
- Open Graph image
- Open Graph title
- Social card
- Structured data
- Sitemap
- Robots.txt

Use appropriate structured data such as `NewsArticle` where applicable.

---

# 38. Google News Readiness

The architecture should support technical requirements for news discovery:

- Clean URLs
- Publication timestamps
- Author information
- Publisher information
- Structured data
- XML sitemap
- Article metadata

---

# 39. Analytics Dashboard

Analytics should be one of the strongest CMS modules.

## Website Analytics

Track:

- Visitors
- Page views
- Sessions
- New users
- Returning users
- Bounce rate
- Average session duration
- Top pages
- Top articles
- Traffic sources
- Devices
- Browsers
- Geographic data where legally and technically appropriate

---

# 40. Content Analytics

For every article:

```text
Views
Shares
Comments
Bookmarks
Average reading time
Traffic source
Device
Location
```

For videos:

```text
Views
Watch time
Completion rate
Likes
Shares
Traffic source
```

---

# 41. District Analytics

Management should be able to see content consumption by district.

Example:

```text
East Sikkim
Gangtok
South Sikkim
West Sikkim
North Sikkim
Pakyong
Soreng
Other
```

This can help determine where audience demand is highest.

---

# 42. Mobile App Analytics

Track:

- Downloads
- Daily active users
- Monthly active users
- Sessions
- Notification opens
- Article reads
- Video views
- Most-used categories
- Retention

---

# 43. Analytics Date Filters

Every analytics dashboard should support:

- Today
- Yesterday
- Last 7 days
- Last 30 days
- Last 3 months
- Last 6 months
- Last year
- Custom range

---

# 44. Reports

Reports should support:

- PDF
- Excel
- CSV

Reports:

- Daily newsroom report
- Weekly newsroom report
- Monthly newsroom report
- Journalist performance report
- Website traffic report
- Video report
- Advertisement report
- Revenue report

---

# 45. Automated Reports

Example:

```text
Every Monday at 09:00 AM

Weekly Hamro Varta Digital Report

- Website visitors
- Top 10 articles
- Top 10 videos
- New users
- App users
- Social growth
- Advertisement performance
- Revenue
```

---

# 46. Notification Center

Internal CMS notifications:

- Article submitted
- Article approved
- Article rejected
- Breaking news published
- Campaign ending
- Scheduled content published
- System alerts

---

# 47. Comments Management

If comments are enabled, administrators should manage:

- Comments
- Reported comments
- Spam
- Blocked users
- Keyword moderation

Actions:

- Approve
- Hide
- Delete
- Ban user

---

# 48. User Moderation

Admin can:

- Search users
- View users
- Disable users
- Delete users
- Ban users
- View activity
- View reported comments

---

# 49. Contact and Leads

Website forms should feed directly into CMS.

Manage:

- General inquiries
- Advertisement inquiries
- Career applications
- Feedback
- News tips

---

# 50. Citizen Journalism / Submit News

Provide:

**Send Us Your News**

Users can submit:

- Text
- Image
- Video
- Location
- Contact information

Workflow:

```text
Citizen Submission
       |
       v
Editor Review
       |
   +---+---+
   |       |
Approve   Reject
   |
   v
Convert to Article
```

Anonymous submissions may be supported with appropriate abuse controls.

---

# 51. News Tip

Provide a quick submission form:

```text
What's happening?

[ Write here ]

Upload photo/video

[ Submit ]
```

---

# 52. Emergency / Breaking News Mode

Provide an emergency publishing mechanism.

Example:

```text
🔴 EMERGENCY ALERT

Major landslide reported...
```

Possible distribution:

- Website banner
- Mobile push
- Breaking ticker
- App alert

---

# 53. Homepage Breaking Bar

Persistent breaking-news ticker:

```text
🔴 BREAKING
Heavy rainfall reported across multiple areas...
```

CMS controls:

- Enable/disable
- Text
- Link
- Priority
- Duration

---

# 54. Content Scheduling

All major content should support scheduling.

Example:

```text
Publish:
14 September 2026
18:30 IST
```

At the scheduled time:

```text
CMS
 |
 +--> Website
 +--> Mobile App
 +--> Optional Social
```

---

# 55. Media Library

Central media repository for:

- Images
- Videos
- Audio
- Documents
- Logos
- Advertisements

Features:

- Search
- Tags
- Folders
- Metadata
- Upload
- Delete
- Replace
- Reuse

---

# 56. Image Optimization

Automatically:

- Resize images
- Compress images
- Generate thumbnails
- Generate responsive sizes
- Use modern formats such as WebP/AVIF where appropriate

This is important for mobile users and varying network conditions.

---

# 57. Video Processing

Future-ready support for:

- Transcoding
- Multiple resolutions
- Thumbnail generation
- Compression
- HLS streaming

Example:

```text
1080p
720p
480p
360p
```

---

# 58. Mobile Application

Recommended platforms:

- Android
- iOS

Main navigation:

```text
HOME
NEWS
VIDEOS
LIVE
CATEGORIES
PROFILE
```

---

# 59. Mobile App Home

Recommended sections:

```text
Breaking News
      |
Top Stories
      |
Latest News
      |
Trending
      |
Videos
      |
District News
      |
Live TV
```

---

# 60. Mobile App Features

Users can:

- Read articles
- Watch videos
- Watch live TV
- Bookmark articles
- Share content
- Receive notifications
- Search
- Select language
- Select district
- Follow categories
- View history

---

# 61. Offline Reading

Future feature:

Allow users to save articles for offline reading.

---

# 62. Personalized Push Notifications

Users can choose notification topics:

```text
☑ Breaking News
☑ Sikkim News
☑ Sports
☐ Politics
☑ Entertainment
☑ Weather
```

---

# 63. Article Page

Recommended structure:

```text
Category

Headline

Subtitle

Author / Reporter
Published date
Updated date

Featured Image

Article Content

Related Video

Advertisement

Related Stories

Trending Stories

Comments
```

---

# 64. Related Content Engine

At the bottom of articles, show related stories based on:

- Category
- Tags
- District
- Keywords
- Topic
- Author

---

# 65. Trending Engine

Trending score can consider:

```text
Views
+
Shares
+
Reading time
+
Recentness
+
Comments
```

The exact algorithm should be configurable.

---

# 66. Website Navigation

Suggested:

```text
HOME

SIKKIM
  East
  West
  North
  South
  Pakyong
  Soreng

POLITICS
BUSINESS
SPORTS
ENTERTAINMENT
LIFESTYLE
VIDEOS
LIVE
EVENTS
MORE
```

---

# 67. Website Pages

CMS-managed pages:

- Home
- About Us
- Contact
- Privacy Policy
- Terms
- Editorial Policy
- Corrections Policy
- Careers
- Advertise With Us
- Our Team

---

# 68. Editorial Policy

Create an editable editorial-policy page covering:

- Corrections
- Fact-checking
- Conflict of interest
- User-generated content
- Copyright
- Privacy

---

# 69. Copyright Management

Each media asset should support:

- Owner
- Source
- Copyright status
- Photographer
- License
- Attribution

---

# 70. Security

Required:

- HTTPS
- Secure password hashing
- Secure authentication/session handling
- Role-based authorization
- Two-factor authentication for privileged accounts
- Rate limiting
- Login-attempt protection
- Audit logs
- Secure file uploads
- File-type validation
- Malware scanning where appropriate
- API authentication
- CSRF protection where applicable
- Secure secrets management

---

# 71. Admin 2FA

Recommended for:

- Super Admin
- Editor-in-Chief
- Admin
- Finance
- Advertisement Manager

Support:

- Authenticator app
- Email OTP as fallback where appropriate
- Recovery codes

---

# 72. Backup

Automated backups:

### Database

Daily backups.

### Media

Incremental backups.

### Configuration

Versioned backups.

Suggested retention:

```text
Daily: 7 days
Weekly: 4 weeks
Monthly: 12 months
```

---

# 73. Recommended Technology Architecture

## Backend

Potential stack:

- NestJS / Node.js
- PostgreSQL
- Redis

## Website

- Next.js / React

## Mobile

- React Native or Flutter

## Storage

- S3-compatible object storage

## CDN

- Cloudflare or AWS CloudFront

## Search

- PostgreSQL initially
- OpenSearch/Elasticsearch later if required

---

# 74. Database Domains

Organize the database by business domain.

```text
Users
Roles
Permissions

Employees
Departments
Designations

Articles
ArticleVersions
Categories
Tags
Authors

Videos
Programs
Seasons
Episodes
LiveStreams

Media
MediaFolders

Comments
Reports

Notifications

Advertisements
Advertisers
Campaigns

Events
Registrations

Analytics

AuditLogs

Settings
Integrations
```

---

# 75. API Architecture

Design APIs around resources.

Examples:

```text
/api/v1/articles
/api/v1/videos
/api/v1/categories
/api/v1/users
/api/v1/employees
/api/v1/media
/api/v1/events
/api/v1/advertisements
/api/v1/analytics
/api/v1/notifications
```

---

# 76. API Consumers

The API should serve:

- CMS Admin
- Website
- Mobile App
- Third-party integrations
- Future Smart TV App
- Future OTT applications

---

# 77. Smart TV / OTT Future

Not required for MVP, but architecture should support:

- Android TV
- Fire TV
- Smart TV applications
- OTT platform

The same API should eventually power these platforms.

---

# 78. AI Features — Phase 2+

AI should not be required for MVP.

Potential features:

- Headline suggestions
- Article summarization
- Translation
- Grammar correction
- Social post generation
- SEO suggestions
- Automatic tags
- Automatic category suggestions
- Video transcription
- Subtitles
- Content recommendations

All AI-generated editorial content should require human review before publication.

---

# 79. AI Newsroom Assistant

Future workflow:

```text
Reporter Notes
      |
      v
AI Assistant
      |
      +--> Headline
      +--> Summary
      +--> Article Draft
      +--> SEO Description
      +--> Social Post
      +--> Tags
      +--> Nepali Translation
      |
      v
Human Editor Approval
      |
      v
Publish
```

---

# 80. AI Transcription

Upload:

```text
Interview.mp4
```

System produces:

```text
Transcript

Speaker 1:
...

Speaker 2:
...
```

Journalist can then convert the transcript into an article.

---

# 81. Revenue Dashboard

Management should see:

```text
Monthly Revenue

Advertisements
Sponsored Content
Events
Subscriptions
Other

Total
```

---

# 82. Subscription — Future

Architecture should eventually support:

### Free

Normal public content.

### Premium

Potential:

- Exclusive interviews
- Special documentaries
- Premium shows
- Ad-free experience
- Exclusive archives

Subscription is not part of MVP.

---

# 83. Newsletter

Future:

**Hamro Varta Morning News**

Example:

```text
07:00 AM

Top 10 stories
```

Users should be able to subscribe/unsubscribe.

---

# 84. WhatsApp / Telegram Distribution

Potential future distribution:

```text
New Article
    |
    v
CMS
    |
    +--> WhatsApp Channel
    +--> Telegram
    +--> Facebook
    +--> Instagram
    +--> YouTube
```

Only official/approved platform APIs should be used.

---

# 85. MVP Scope

Do not build every feature in Version 1.

## MVP CMS

- Authentication
- Users
- Roles
- Permissions
- Dashboard
- Articles
- Categories
- Tags
- Media library
- Authors
- Editorial workflow
- Breaking news
- Homepage management
- Videos
- Live TV
- Notifications
- Basic analytics
- Audit logs

## MVP Website

- Homepage
- News listing
- Article page
- Category pages
- Video page
- Live TV
- Search
- About
- Contact
- Advertisement slots
- SEO

## MVP Mobile

- Home
- News
- Categories
- Article
- Video
- Live TV
- Search
- Push notifications
- Bookmark

---

# 86. Phase 2

Add:

- Social media publishing
- YouTube integration
- Advanced analytics
- Advertiser management
- Campaign management
- Employee management
- Citizen journalism
- Events
- Photo galleries
- Newsletter
- User profiles
- Personalized feed

---

# 87. Phase 3

Add:

- AI newsroom
- Automatic translation
- Transcription
- Recommendation engine
- OTT/Smart TV
- Subscription
- Premium content
- Advanced advertising
- Data warehouse
- Predictive analytics

---

# 88. Important Architectural Principle

Do **not** create separate content systems for website and mobile app.

Use:

```text
                 CMS
                  |
                  v
                 API
              /       \
             /         \
        WEBSITE       MOBILE
```

A journalist creates one article.

The CMS controls where it is published.

---

# 89. Website/App Segregation

Every content item should support:

```text
Website visibility:
☑ Visible
☐ Hidden

Mobile visibility:
☑ Visible
☐ Hidden
```

Or:

```text
☑ Website
☑ Mobile App
```

This directly supports website-only, app-only, and shared content.

---

# 90. Journalist Dashboard

```text
My Dashboard

My Drafts
My Submitted Articles
Published Articles
Rejected Articles

Views Generated
Shares
Top Performing Articles
```

---

# 91. Editor Dashboard

```text
Editorial Dashboard

Pending Review
Breaking News
Scheduled
Recently Published
Top Stories
```

---

# 92. Management Dashboard

```text
Management Dashboard

Audience
Revenue
Employees
Content
Performance
Growth
```

Different roles should see dashboards appropriate to their permissions.

---

# 93. Citizen News Workflow

Recommended:

```text
Citizen
  |
  v
Submit News
  |
  v
CMS Inbox
  |
  v
Editor
  |
  +--> Reject
  |
  +--> Request More Information
  |
  +--> Approve
          |
          v
     Convert to Article
```

---

# 94. Content Lifecycle and Governance

Every published story should retain:

- Author
- Editor
- Publication timestamp
- Last updated timestamp
- Revision history
- Approval history
- Distribution history

The system should make it possible to answer:

> Who wrote this?

> Who approved it?

> Who changed it?

> When was it published?

> Where was it distributed?

---

# 95. Success Metrics

## Audience

- Monthly active users
- Daily active users
- Website traffic
- App installs
- Returning visitors
- Retention

## Content

- Articles/day
- Videos/day
- Average article views
- Average video views
- Engagement

## Distribution

- Push notification CTR
- Social traffic
- YouTube traffic
- Search traffic

## Business

- Advertisement revenue
- Advertiser count
- Campaign revenue
- Sponsored content revenue

## Operations

- Average publishing time
- Editorial approval time
- Content correction rate
- Submission-to-publication time

---

# 96. Non-Functional Requirements

## Performance

Target:

- Fast mobile-first experience
- Homepage initial load target of approximately 2–3 seconds under reasonable network conditions
- Optimized images and lazy loading
- CDN delivery for static/media assets

## Availability

Target:

**99.9% uptime**

## Scalability

Initial architecture should support growth toward:

- 100K monthly users
- 1M monthly users
- 10M+ monthly page views

without a fundamental architectural rewrite.

## Security

All admin APIs must enforce:

- Authentication
- Authorization
- Input validation
- Rate limiting
- Audit logging

---

# 97. Observability and Operations

Production should include:

- Application logs
- API logs
- Database monitoring
- Error tracking
- Uptime monitoring
- Performance monitoring
- Queue/job monitoring
- Storage monitoring
- Security alerts

Critical failures should alert technical administrators.

---

# 98. CI/CD and Environments

Maintain separate environments:

```text
Development
     |
     v
Staging
     |
     v
Production
```

Recommended:

- Automated tests
- Linting
- Build verification
- Database migration checks
- Deployment approval
- Rollback capability

---

# 99. Launch Checklist

## CMS

- [ ] Authentication
- [ ] RBAC
- [ ] Article management
- [ ] Editorial workflow
- [ ] Media library
- [ ] Homepage builder
- [ ] Video management
- [ ] Live TV
- [ ] Notifications
- [ ] Audit logs

## Website

- [ ] Responsive
- [ ] SEO
- [ ] Sitemap
- [ ] Search
- [ ] News
- [ ] Videos
- [ ] Live TV
- [ ] Advertisement slots
- [ ] Privacy
- [ ] Terms
- [ ] Contact

## Mobile

- [ ] Android
- [ ] iOS
- [ ] Push notifications
- [ ] Deep links
- [ ] Video
- [ ] Live TV
- [ ] Bookmark

## Infrastructure

- [ ] Production database
- [ ] Object storage
- [ ] CDN
- [ ] SSL
- [ ] Backup
- [ ] Monitoring
- [ ] Logging
- [ ] Error tracking
- [ ] CI/CD

---

# 100. Recommended Final Product Structure

```text
                         HAMRO VARTA
                       DIGITAL ECOSYSTEM
                              |
                       +------+------+
                       | HAMRO VARTA |
                       |     CMS     |
                       +------+------+
                              |
        +---------------------+----------------------+
        |                     |                      |
        v                     v                      v
    WEBSITE              MOBILE APP             SOCIAL
        |                     |                      |
        |                     |              +-------+------+
        |                     |              |       |      |
        v                     v             FB      IG     YT
      NEWS                  NEWS
      VIDEOS                VIDEOS
      LIVE TV               LIVE TV
      EVENTS                PUSH
      ADS                   BOOKMARKS
        |                     |
        +----------+----------+
                   |
                   v
             AUDIENCE DATA
                   |
          +--------+--------+
          |        |        |
          v        v        v
      ANALYTICS   CRM     REVENUE
          |        |        |
          +--------+--------+
                   |
                   v
               MANAGEMENT
```

---

# 101. Product Strategy

The platform should not be treated as simply a replacement for a Facebook page or a WordPress news website.

The strategic objective is to transform Hamro Varta into a **digital-first regional media organization** that owns:

- Its content
- Its website
- Its mobile application
- Its audience relationship
- Its analytics
- Its advertising inventory
- Its newsroom workflow
- Its distribution infrastructure

The long-term goal is:

> **Hamro Varta should become the digital home for Sikkim news, rather than simply another social-media publisher.**

---

# 102. Development Instruction

The engineering team/LLM implementing this PRD should follow these principles:

1. Build the CMS as the central source of truth.
2. Build the API before tightly coupling the website and mobile app.
3. Keep website and mobile content visibility independently configurable.
4. Use role-based permissions rather than hard-coded user roles.
5. Make all important CMS actions auditable.
6. Implement article versioning from the beginning.
7. Design multilingual content into the database architecture.
8. Design district/location metadata into articles.
9. Keep media storage independent from the application server.
10. Build integrations through service abstractions so additional platforms can be added later.
11. Do not put AI features into the MVP unless they are explicitly prioritized.
12. Design for future OTT/Smart TV distribution.
13. Prioritize performance and mobile-first UX.
14. Never allow AI-generated editorial content to publish without configured human approval.
15. Keep the system modular enough that advertising, employee management, analytics, and editorial functionality can evolve independently.

---

# 103. MVP Definition of Done

The MVP can be considered ready for production when:

- A journalist can log in.
- A journalist can create and submit an article.
- An editor can review and approve it.
- An editor can publish it to website, app, or both.
- A published article appears correctly on the website.
- The same article is available through the mobile API.
- Editors can publish breaking news.
- Users can receive push notifications.
- Editors can manage videos.
- Editors can manage homepage content.
- Admins can manage users and permissions.
- All important actions are logged.
- Website and app have independent content visibility.
- Analytics provide meaningful basic traffic/content information.
- Media uploads are secure and optimized.
- Backups and production monitoring are configured.
- The system is responsive and usable on mobile devices.
- SEO metadata and sitemap are functional.
- Production deployment and rollback procedures are documented.

---

## Document End

**Hamro Varta Television — Digital Media Platform PRD v1.0**
