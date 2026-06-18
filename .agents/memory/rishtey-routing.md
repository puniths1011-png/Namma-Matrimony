---
name: Rishtey App Routing Architecture
description: How routing and auth state work in the Rishtey matrimonial app (artifacts/shaadi-app)
---

## Auth State
- `isLoggedIn` boolean lives in `App.tsx` (useState)
- Passed down as `setIsLoggedIn` prop to all pages
- Components that trigger login/logout import `useLocation` from wouter and call `navigate("/dashboard")` or `navigate("/")`

## Route Structure
- `/` → LandingPage (or Redirect to /dashboard if logged in)
- `/dashboard` → MatchesPage (new matches feed)
- `/dashboard/my-rishtey` → MyRishteyPage (overview + stats)
- `/dashboard/search` → SearchPage (advanced search)
- `/dashboard/inbox` → InboxPage (messages + interests)
- `/dashboard/premium` → PremiumPage (pricing plans)
- `/dashboard/profile` → ProfilePage (6-tab profile editor)
- `/dashboard/settings` → SettingsPage (account/privacy/notifications/security)

## Key Files
- `src/App.tsx` — routing with Wouter Switch/Route/Redirect
- `src/components/matches/Navbar.tsx` — Link navigation, active state via useLocation, user dropdown
- `src/components/matches/DashboardLayout.tsx` — shared wrapper for all dashboard pages
- `src/components/landing/LandingNavbar.tsx` — pre-login sticky nav

**Why:** Wouter's Redirect component is used for auth guards; useLocation hook must be called inside the WouterRouter context, so navigation is done inside the leaf components rather than in App.tsx.
