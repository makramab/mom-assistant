# Implementation Plan for BundaCare Platform

This file tracks the implementation steps for the BundaCare platform, based on the latest plan in UPDATED_NEWEST_PLAN.md.

## 1. Landing Page & User Selection
- [x] Design landing page with three user-type options (Community Health Workers, Mothers, Others)
    - User-type selection UI implemented with carousel (mobile) and grid (desktop)
    - Continue button routes to personalized dashboard (route only, dashboard content pending)
    - Video card with YouTube embed and custom styling (responsive 16:9 card, blends with page, faded white outline, thumbnail shifts up for better composition)
- [x] Implement user-type selection logic (no login required)
    - State managed in LandingPage, selection persists until navigation

## 2. Community Health Workers (Kaders)
### Widget Features
- [ ] E-learning modules (nutrition, immunization, early detection, etc.)
- [ ] Automatic certification system
- [ ] Structured curriculum by role (Maternal & Child Health, Nutrition, Development, etc.)
- [ ] Teaching tools & educational media (videos, posters, templates)
- [ ] Digital visit reporting & monitoring (home visits, nutrition, high-risk pregnancies)
- [ ] Data sync with government/MEL dashboards
- [ ] Modular, asynchronous learning (progress bar, continue where left off)
- [ ] Incentives & productivity tracking (work-hour logs, rewards, wallet integration)

## 3. Mothers
### Pregnancy Phase (Prenatal)
- [ ] Content modules for prenatal care (complications, nutrition, breastfeeding, birth prep)
### 0–6 Months: Exclusive Breastfeeding
- [ ] Content modules for breastfeeding support (techniques, challenges, myths, pumping)
### 6–24 Months: Complementary Feeding
- [ ] Content modules for feeding practices (readiness, 4-star feeding, texture, recipes)
### 2–5 Years: Development & Stimulation
- [ ] Content modules for sensory, motor, language, social-emotional, independence
- [ ] Practical tools (videos, infographics, checklists, nutrition calculator, menu templates)
- [ ] Digital support features (reminders, forum, expert chat, growth charts)

## 4. Others (Government & Private Sector)
- [ ] Define and implement role-specific features & integrations

## 5. Shared & Platform Features
- [x] Implement global navigation bar (Landing page only)
    - Section highlighting based on scroll position
    - Only visible on landing page
    - About Us button links to /about (blank for now)
    - Log In and Sign Up buttons removed
- [x] Style all components for consistency and accessibility
    - Modern, accessible, and responsive design
- [ ] Map plan sections to UI components (menus, modules, widgets)
- [ ] Define data models for progress tracking & reporting
- [ ] Design API endpoints for content delivery & syncing
- [ ] Wireframe user-flow: landing page → role selection → personalized dashboard
- [ ] Add responsive layouts and mobile support
- [ ] Implement error handling, loading states, and smooth transitions

---

# Progress Tracking
Note: Track progress for each user type and feature (see above for completed items). Regularly update this file as features are completed. 